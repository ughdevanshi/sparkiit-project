const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

let rawUrl = (process.env.SUPABASE_URL || '').trim();
if (rawUrl.endsWith('/')) rawUrl = rawUrl.slice(0, -1);
if (rawUrl.endsWith('/rest/v1')) rawUrl = rawUrl.replace(/\/rest\/v1$/, '');
const supabaseUrl = rawUrl;
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();

let supabase = null;
const isConfigured = Boolean(supabaseUrl && supabaseKey && !supabaseUrl.includes('your-supabase'));

if (isConfigured) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false
      }
    });
    console.log('[Supabase] Initialized client connected to:', supabaseUrl);
  } catch (error) {
    console.warn('[Supabase] Error creating Supabase client:', error.message);
    supabase = null;
  }
} else {
  console.log('[Supabase] No credentials configured. Running in Local Storage Fallback mode.');
}

// Local Storage Fallback helper
const dataDir = path.join(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const getFallbackData = (filename) => {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]), 'utf-8');
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return [];
  }
};

const saveFallbackData = (filename, data) => {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

module.exports = {
  supabase,
  isConfigured,
  getFallbackData,
  saveFallbackData
};
