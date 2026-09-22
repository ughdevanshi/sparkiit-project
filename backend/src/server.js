const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const admissionsRoutes = require('./routes/admissions');
const contactRoutes = require('./routes/contact');
const healthRoutes = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Serve static frontend files (HTML, CSS, JS, Assets)
const frontendPath = path.join(__dirname, '../../frontend');
app.use(express.static(frontendPath));

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/admissions', admissionsRoutes);
app.use('/api/contact', contactRoutes);

// Fallback route for single page app
app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(frontendPath, 'index.html');
  res.sendFile(indexPath);
});

// 404 handler for unmatched API routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.stack);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

if (require.main === module) {
  // Start server
  app.listen(PORT, () => {
    console.log('================================================================');
    console.log(` Spark IIT`);
    console.log(` Full-Stack Server running at: http://localhost:${PORT}`);
    console.log(` Frontend Static Path: ${frontendPath}`);
    console.log(` Health Check API: http://localhost:${PORT}/api/health`);
    console.log('================================================================');
  });
}

module.exports = app;
