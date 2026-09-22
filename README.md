# Spark IIT

A professional, corporate-style web application for the **Spark IIT**, a vocational training institute specializing in computer-based career courses.

Built with a clean corporate palette of **Navy Blue (`#0f2b5c`) and White**, with modern typography (Inter & Poppins), structured layouts, and complete multi-device responsiveness.

---

## 🚀 Tech Stack

- **Frontend**:
  - **HTML5**: Semantic tags, accessibility (ARIA), clean structured sections
  - **CSS3**: Custom corporate theme, smooth transitions, hover elevations, custom scrollbar
  - **JavaScript (ES6+)**: Modular application architecture, client-side data binding, real-time validation, modal controllers
  - **Bootstrap 5.3 & Bootstrap Icons**: Grid system, responsive sticky navbar, cards, accordions, modals, and badges
- **Backend & Database**:
  - **Node.js & Express**: RESTful API on port `5000` (`/api/admissions`, `/api/contact`, `/api/health`)
  - **Supabase Client (`@supabase/supabase-js`)**: Direct storage into `admissions` and `contact_messages` database tables
  - **Resilient Fallback**: Automatic local storage backup whenever Supabase keys are not yet configured, allowing instant offline testing.

---

## 📁 Project Structure

```
spark-iit-institute/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── supabase.js            # Supabase client setup with graceful local fallback
│   │   ├── controllers/
│   │   │   ├── admissionsController.js# Form validation, tracking ID generation, insert logic
│   │   │   └── contactController.js   # Contact form validation & insert logic
│   │   ├── routes/
│   │   │   ├── admissions.js          # POST & GET /api/admissions
│   │   │   ├── contact.js             # POST & GET /api/contact
│   │   │   └── health.js              # GET /api/health
│   │   └── server.js                  # Express server serving static frontend + REST API
│   ├── data/                          # Fallback persistent storage
│   ├── supabase_schema.sql            # Ready-to-run database table schema & RLS policies
│   ├── package.json
│   ├── .env.example
│   └── .env
├── frontend/
│   ├── index.html                     # Master single-page portal with all sections
│   ├── css/
│   │   └── styles.css                 # Custom navy/white corporate styles & animations
│   ├── js/
│   │   ├── data.js                    # 9 Courses, syllabus modules, reviews, gallery items
│   │   ├── api.js                     # API integration & Supabase transport layer
│   │   └── app.js                     # Dynamic rendering, validations, modals, event handlers
│   └── assets/                        # Emblem vector and iconography
├── package.json                       # Unified root script
└── README.md
```

---

## 🛠️ Quickstart: Running the Application

### 1. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 2. Start the Full-Stack Application
From the root directory:
```bash
npm start
```
Or directly run:
```bash
node backend/src/server.js
```

### 3. Open in Browser
Visit **[http://localhost:5000](http://localhost:5000)** to explore the live website.

---

## 🗄️ Supabase Database Setup

To store admission forms and contact messages in your own Supabase project:

1. Log into your [Supabase Dashboard](https://supabase.com/dashboard) and create a new project.
2. Go to the **SQL Editor** in the left navigation.
3. Open `backend/supabase_schema.sql`, copy its entire content, paste it into the Supabase SQL editor, and click **Run**.
   - This creates:
     - `admissions` table with columns: `id`, `application_id`, `full_name`, `email`, `phone`, `course`, `batch_timing`, `qualification`, `address`, `message`, `status`, `created_at`, `updated_at`.
     - `contact_messages` table with columns: `id`, `name`, `email`, `phone`, `subject`, `message`, `status`, `created_at`.
     - Row Level Security (RLS) policies allowing secure public inserts.
4. Copy your project **URL** and **anon public key** from `Project Settings -> API`.
5. Paste them into `backend/.env`:
   ```env
   PORT=5000
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_ANON_KEY=your-anon-public-key
   ```
6. Restart the server (`npm start`). The backend will automatically detect and write directly to your Supabase tables.

---

## 📋 Comprehensive Pages & Features

### 1. Home Page
- **Hero Banner**: Bold headline, tagline, "Apply Now" and "Explore Courses" CTAs, ISO certification badge, application count ticker.
- **Highlights & Stats**: 15+ Years Experience, 12,500+ Students Trained, 9+ Industry Courses, 85%+ Placement Assistance.
- **Top Courses Overview**: Quick access cards with category tags and syllabus links.
- **Testimonials**: Authentic reviews from past graduates with roles, companies, and star ratings.
- **Call-to-Action Banner**: Prominent admission enrollment invitation.

### 2. About Us
- **Institutional Mission & Vision**: Vocational purpose, core values, and community impact.
- **History**: 15-year journey from a 10-computer lab to a premier training institute.
- **Why Choose Us (5 Pillars)**: Certified Trainers, 1:1 Practical PC Terminals, Flexible Timings, Affordable Fees with EMI, Dedicated Placement Support.
- **Director's Message**: Executive statement from Dr. K. R. Sharma, Founder & Director.

### 3. Courses (All 9 Computer Courses)
1. **Basic Computer Course (CCC)** - 3 Months
2. **Diploma in Computer Applications (DCA)** - 6 Months
3. **MS Office Suite** - 2 Months
4. **Tally with GST** - 3 Months
5. **Web Designing** - 4 Months
6. **Python Programming** - 4 Months
7. **Desktop Publishing (DTP)** - 3 Months
8. **Advanced Excel** - 2 Months
9. **Digital Marketing Basics** - 3 Months
*Each card features category filters, duration badges, eligibility, tools covered, and an **"Enroll Now"** button that automatically pre-selects that course in the admission form.*

### 4. Syllabus Breakdown
- Expandable Bootstrap 5 Accordion listing each course.
- Module-wise topics covered, practical laboratory hours, and specific learning outcomes for all 9 programs.

### 5. Functional Admission Form
- Fields: Full Name, Email, Phone Number, Course Interested In (dropdown of all 9 courses), Preferred Batch Timing (Morning/Afternoon/Evening), Educational Qualification, Address, and Message/Query.
- Validates 10-digit phone number, email syntax, and mandatory inputs.
- Generates a unique tracking reference number (e.g. `SPARK-2026-XXXX`).
- Stores data in Supabase database table `admissions`.
- Displays an interactive Bootstrap Confirmation Modal with receipt details.

### 6. Branch / Location
- Physical campus address and landmark instructions.
- Working hours schedule (Monday to Saturday: 8:00 AM – 7:30 PM).
- Direct helpline and WhatsApp query buttons.
- Fully interactive **Google Maps embed**.

### 7. Campus Gallery
- Responsive image grid showcasing computer labs, theory classrooms, student workshops, and certificate distribution convocations.
- Interactive category filters.
- Fullscreen Lightbox Modal preview with detailed captions.

### 8. Contact Us
- Functional message inquiry form storing submissions in Supabase table `contact_messages`.
- Complete institute contact coordinates, direct helplines, and social media handles.
- Integrated branch location map preview.

### 9. Additional Institutional Sections
- **Sticky Navigation Bar**: Emblem logo, links to all 8 sections, and quick "Apply Now" button.
- **Corporate Footer**: Course directory, accreditation badges, legal links, and copyright.
- **Placement & Credentials**: Industry certification showcase with ISO 9001:2015 details, online QR code verification, and hiring partner information.
- **FAQ Accordion**: Answers to questions regarding eligibility, fees, monthly installments, batch timings, and certification recognition.
- **Admin Portal Viewer**: Accessible via the top notification bar to inspect all submitted admissions in real-time.
