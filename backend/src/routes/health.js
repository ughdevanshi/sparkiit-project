const express = require('express');
const router = express.Router();
const { isConfigured, supabase } = require('../config/supabase');

router.get('/', async (req, res) => {
  let supabaseStatus = isConfigured ? 'configured' : 'not_configured (using local storage)';

  if (isConfigured && supabase) {
    try {
      const { error } = await supabase.from('admissions').select('id').limit(1);
      supabaseStatus = error ? `error: ${error.message}` : 'connected';
    } catch (err) {
      supabaseStatus = `unreachable: ${err.message}`;
    }
  }

  res.status(200).json({
    status: 'online',
    institute: 'Spark IIT',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    supabase: supabaseStatus
  });
});

module.exports = router;
