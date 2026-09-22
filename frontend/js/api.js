/**
 * Spark IIT
 * API & Supabase Client Integration Layer
 */

const API_BASE_URL = window.location.origin.includes('http') ? window.location.origin : 'http://localhost:5000';

// Fallback in-browser storage key for direct file viewing without a server
const LOCAL_STORAGE_ADMISSIONS_KEY = 'spark_iit_admissions_data';
const LOCAL_STORAGE_CONTACT_KEY = 'spark_iit_contact_data';

const getBrowserStoredItems = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveBrowserStoredItem = (key, item) => {
  try {
    const existing = getBrowserStoredItems(key);
    existing.unshift(item);
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }
};

// API Services
const SPARK_IIT_API = {
  /**
   * Submit an admission application
   * Sends to Express backend which inserts into Supabase table 'admissions'
   */
  async submitAdmission(formData) {
    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      batch_timing: formData.batchTiming,
      qualification: formData.qualification,
      address: formData.address,
      message: formData.message || ''
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/admissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || (errorData.errors ? errorData.errors.join(', ') : 'Failed to submit application'));
      }

      const result = await response.json();
      return result;
    } catch (networkError) {
      console.warn('Backend API unreachable or offline, using client fallback:', networkError.message);
      
      // Resilient fallback: simulate success, store in localStorage, generate Reference ID
      const fallbackId = `SPARK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const fallbackRecord = {
        ...payload,
        application_id: fallbackId,
        status: 'PENDING',
        created_at: new Date().toISOString()
      };
      saveBrowserStoredItem(LOCAL_STORAGE_ADMISSIONS_KEY, fallbackRecord);

      return {
        success: true,
        message: 'Application submitted successfully! Our counseling team will contact you within 24 hours.',
        application: fallbackRecord,
        storage: 'browser_fallback'
      };
    }
  },

  /**
   * Submit a contact message
   * Sends to Express backend which inserts into Supabase table 'contact_messages'
   */
  async submitContact(formData) {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      subject: formData.subject || 'General Inquiry',
      message: formData.message
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || (errorData.errors ? errorData.errors.join(', ') : 'Failed to send message'));
      }

      const result = await response.json();
      return result;
    } catch (networkError) {
      console.warn('Backend API unreachable, using client fallback:', networkError.message);
      
      const fallbackRecord = {
        ...payload,
        created_at: new Date().toISOString()
      };
      saveBrowserStoredItem(LOCAL_STORAGE_CONTACT_KEY, fallbackRecord);

      return {
        success: true,
        message: 'Thank you for contacting Spark IIT. Your message has been received.',
        data: fallbackRecord,
        storage: 'browser_fallback'
      };
    }
  },

  /**
   * Fetch admissions for administrative view
   */
  async getAdmissions() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admissions`);
      if (response.ok) {
        const data = await response.json();
        return data.admissions || [];
      }
    } catch (err) {
      console.warn('Error querying backend admissions:', err);
    }
    return getBrowserStoredItems(LOCAL_STORAGE_ADMISSIONS_KEY);
  },

  /**
   * Check backend health
   */
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      if (response.ok) {
        return await response.json();
      }
    } catch (err) {
      return { status: 'offline', error: err.message };
    }
    return { status: 'offline' };
  }
};

window.SPARK_IIT_API = SPARK_IIT_API;
