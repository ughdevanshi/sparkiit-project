const { supabase, isConfigured, getFallbackData, saveFallbackData } = require('../config/supabase');

// Generate unique reference number: SPARK-YYYY-XXXX
const generateApplicationId = () => {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `SPARK-${year}-${randomNum}`;
};

// Validate phone number format (at least 10 digits)
const isValidPhone = (phone) => {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
};

// Validate email format
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Allowed course list for verification
const ALLOWED_COURSES = [
  'Basic Computer Course (CCC)',
  'Diploma in Computer Applications (DCA)',
  'MS Office Suite',
  'Tally with GST',
  'Web Designing',
  'Python Programming',
  'Desktop Publishing (DTP)',
  'Advanced Excel',
  'Digital Marketing Basics'
];

// POST /api/admissions
const createAdmission = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      course,
      batch_timing,
      qualification,
      address,
      message
    } = req.body;

    // Field validations
    const errors = [];
    if (!full_name || full_name.trim().length < 2) {
      errors.push('Full name is required (minimum 2 characters)');
    }
    if (!email || !isValidEmail(email)) {
      errors.push('A valid email address is required');
    }
    if (!phone || !isValidPhone(phone)) {
      errors.push('A valid phone number is required (at least 10 digits)');
    }
    if (!course || !course.trim()) {
      errors.push('Please select a course interested in');
    }
    if (!batch_timing) {
      errors.push('Preferred batch timing is required');
    }
    if (!qualification) {
      errors.push('Educational qualification is required');
    }
    if (!address || address.trim().length < 5) {
      errors.push('Address is required (minimum 5 characters)');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const applicationId = generateApplicationId();
    const admissionData = {
      application_id: applicationId,
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      course: course.trim(),
      batch_timing: batch_timing.trim(),
      qualification: qualification.trim(),
      address: address.trim(),
      message: message ? message.trim() : '',
      status: 'PENDING',
      created_at: new Date().toISOString()
    };

    // Store in Supabase if configured
    if (isConfigured && supabase) {
      const { data, error } = await supabase
        .from('admissions')
        .insert([admissionData])
        .select()
        .single();

      if (error) {
        console.error('[Supabase Error - admissions]:', error.message);
        // Fallback to local storage if table is missing or permissions issue
        const existing = getFallbackData('admissions.json');
        existing.unshift(admissionData);
        saveFallbackData('admissions.json', existing);

        return res.status(201).json({
          success: true,
          message: 'Admission submitted successfully! (Saved via local backup)',
          application: admissionData,
          storage: 'local_fallback',
          supabaseNotice: `Supabase returned: ${error.message}. Please run supabase_schema.sql.`
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Admission application submitted successfully to Spark IIT database!',
        application: data || admissionData,
        storage: 'supabase'
      });
    }

    // Otherwise use resilient local storage
    const existing = getFallbackData('admissions.json');
    existing.unshift(admissionData);
    saveFallbackData('admissions.json', existing);

    return res.status(201).json({
      success: true,
      message: 'Admission application submitted successfully! Our counseling team will reach out to you within 24 hours.',
      application: admissionData,
      storage: 'local_storage'
    });
  } catch (error) {
    console.error('[createAdmission Error]:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error processing admission',
      error: error.message
    });
  }
};

// GET /api/admissions
const getAdmissions = async (req, res) => {
  try {
    if (isConfigured && supabase) {
      const { data, error } = await supabase
        .from('admissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return res.status(200).json({
          success: true,
          count: data.length,
          admissions: data,
          storage: 'supabase'
        });
      }
    }

    const fallbackList = getFallbackData('admissions.json');
    return res.status(200).json({
      success: true,
      count: fallbackList.length,
      admissions: fallbackList,
      storage: 'local_storage'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching admissions',
      error: error.message
    });
  }
};

module.exports = {
  createAdmission,
  getAdmissions
};
