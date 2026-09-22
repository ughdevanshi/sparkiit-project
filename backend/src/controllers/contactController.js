const { supabase, isConfigured, getFallbackData, saveFallbackData } = require('../config/supabase');

// Validate email format
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// POST /api/contact
const submitContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const errors = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name is required (minimum 2 characters)');
    }
    if (!email || !isValidEmail(email)) {
      errors.push('A valid email address is required');
    }
    if (!message || message.trim().length < 5) {
      errors.push('Message is required (minimum 5 characters)');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const messageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : null,
      subject: subject ? subject.trim() : 'General Inquiry',
      message: message.trim(),
      status: 'UNREAD',
      created_at: new Date().toISOString()
    };

    // Store in Supabase if configured
    if (isConfigured && supabase) {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([messageData])
        .select()
        .single();

      if (error) {
        console.error('[Supabase Error - contact_messages]:', error.message);
        const existing = getFallbackData('contact_messages.json');
        existing.unshift(messageData);
        saveFallbackData('contact_messages.json', existing);

        return res.status(201).json({
          success: true,
          message: 'Your message has been received! Our support team will get back to you shortly.',
          data: messageData,
          storage: 'local_fallback',
          supabaseNotice: `Supabase returned: ${error.message}. Please run supabase_schema.sql.`
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Thank you for contacting Spark IIT. Your message has been stored in our system and an advisor will reply shortly.',
        data: data || messageData,
        storage: 'supabase'
      });
    }

    // Resilient local storage
    const existing = getFallbackData('contact_messages.json');
    existing.unshift(messageData);
    saveFallbackData('contact_messages.json', existing);

    return res.status(201).json({
      success: true,
      message: 'Thank you for contacting Spark IIT. Your message has been received and our team will get in touch shortly.',
      data: messageData,
      storage: 'local_storage'
    });
  } catch (error) {
    console.error('[submitContactMessage Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error submitting contact message',
      error: error.message
    });
  }
};

// GET /api/contact
const getContactMessages = async (req, res) => {
  try {
    if (isConfigured && supabase) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return res.status(200).json({
          success: true,
          count: data.length,
          messages: data,
          storage: 'supabase'
        });
      }
    }

    const fallbackList = getFallbackData('contact_messages.json');
    return res.status(200).json({
      success: true,
      count: fallbackList.length,
      messages: fallbackList,
      storage: 'local_storage'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching contact messages',
      error: error.message
    });
  }
};

module.exports = {
  submitContactMessage,
  getContactMessages
};
