/**
 * Spark IIT
 * Main Application Logic (DOM, Event Handlers, Modals, Forms)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic components
  initCourseCatalog();
  initSyllabusAccordion();
  initTestimonials();
  initGallery();
  initFAQs();
  populateCourseDropdown();
  initFormValidationAndSubmission();
  initContactForm();
  initNavigationScroll();
  initAdminViewer();
});

/* --------------------------------------------------------------------------
   1. COURSES CATALOG
   -------------------------------------------------------------------------- */
function initCourseCatalog() {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  renderCourses(COURSES_DATA);

  // Filter Buttons
  const filterBtns = document.querySelectorAll('[data-course-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-course-filter');
      if (filter === 'all') {
        renderCourses(COURSES_DATA);
      } else {
        const filtered = COURSES_DATA.filter(c => c.category.toLowerCase() === filter.toLowerCase());
        renderCourses(filtered);
      }
    });
  });
}

function renderCourses(courses) {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-5 text-muted">No courses found in this category.</div>`;
    return;
  }

  container.innerHTML = courses.map(course => {
    const highlightsHtml = course.highlights.map(h => `
      <li><i class="bi bi-check-circle-fill"></i> <span>${h}</span></li>
    `).join('');

    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="course-card h-100">
          <div class="course-header">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div class="course-icon-badge">
                <i class="bi ${course.icon}"></i>
              </div>
              <span class="badge bg-white text-navy border px-2 py-1">${course.code}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="course-duration-badge">
                <i class="bi bi-clock-history"></i> ${course.duration}
              </span>
              <span class="badge bg-primary-subtle text-primary border">${course.category}</span>
            </div>
          </div>
          <div class="course-body">
            <h3 class="course-title">${course.name}</h3>
            <p class="course-desc">${course.shortDescription}</p>
            
            <div class="mb-3">
              <span class="text-xs fw-bold text-uppercase text-muted d-block mb-1" style="font-size: 0.75rem;">Key Modules & Tools:</span>
              <ul class="course-features">
                ${highlightsHtml}
              </ul>
            </div>

            <div class="mt-auto pt-2 border-top">
              <div class="text-xs text-muted mb-3" style="font-size: 0.8rem;">
                <i class="bi bi-person-check text-navy me-1"></i> <strong>Eligibility:</strong> ${course.eligibility}
              </div>
              <div class="d-flex gap-2">
                <button type="button" class="btn btn-navy flex-grow-1 py-2 btn-sm enroll-course-btn" data-course-name="${course.name}">
                  <i class="bi bi-pencil-square"></i> Enroll Now
                </button>
                <a href="#syllabus" class="btn btn-outline-navy py-2 btn-sm view-syllabus-btn" data-course-id="${course.id}">
                  <i class="bi bi-journal-text"></i> Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach Enroll Now listeners
  document.querySelectorAll('.enroll-course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course-name');
      enrollInCourse(courseName);
    });
  });

  // Attach Syllabus Quick Jump listeners
  document.querySelectorAll('.view-syllabus-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseId = btn.getAttribute('data-course-id');
      const targetCollapse = document.getElementById(`collapse-${courseId}`);
      if (targetCollapse) {
        const bsCollapse = new bootstrap.Collapse(targetCollapse, { show: true });
        targetCollapse.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

function enrollInCourse(courseName) {
  const admissionSection = document.getElementById('admission');
  const courseDropdown = document.getElementById('admissionCourse');

  if (courseDropdown && courseName) {
    courseDropdown.value = courseName;
    courseDropdown.classList.add('border-primary', 'bg-light');
    setTimeout(() => {
      courseDropdown.classList.remove('border-primary', 'bg-light');
    }, 2000);
  }

  if (admissionSection) {
    admissionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* --------------------------------------------------------------------------
   2. SYLLABUS ACCORDION
   -------------------------------------------------------------------------- */
function initSyllabusAccordion() {
  const container = document.getElementById('syllabusAccordion');
  if (!container) return;

  container.innerHTML = SYLLABUS_DATA.map((item, index) => {
    const isFirst = index === 0;
    const modulesHtml = item.modules.map(mod => `
      <div class="card border mb-3 bg-white shadow-sm">
        <div class="card-body p-3 p-md-4">
          <div class="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-2">
            <span class="module-badge">Module ${mod.moduleNumber}</span>
            <span class="badge bg-light text-navy border"><i class="bi bi-clock me-1"></i>${mod.hours}</span>
          </div>
          <h5 class="fw-bold text-navy mb-2" style="font-size: 1.05rem;">${mod.title}</h5>
          <ul class="mb-3 ps-3 text-secondary" style="font-size: 0.9rem;">
            ${mod.topics.map(t => `<li class="mb-1">${t}</li>`).join('')}
          </ul>
          <div class="bg-light p-2 rounded border" style="font-size: 0.85rem;">
            <strong class="text-navy"><i class="bi bi-trophy-fill text-gold me-1"></i>Key Outcome:</strong>
            <span class="text-secondary">${mod.outcome}</span>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="heading-${item.courseId}">
          <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${item.courseId}" aria-expanded="${isFirst}" aria-controls="collapse-${item.courseId}">
            <div class="d-flex flex-wrap align-items-center justify-content-between w-100 me-3 gap-2">
              <span class="fw-bold" style="font-size: 1.1rem;">${item.courseName}</span>
              <span class="badge bg-navy text-white rounded-pill px-3 py-1 font-sans" style="font-size: 0.8rem; font-weight: 500;">
                <i class="bi bi-calendar3 me-1"></i>${item.duration}
              </span>
            </div>
          </button>
        </h2>
        <div id="collapse-${item.courseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="heading-${item.courseId}" data-bs-parent="#syllabusAccordion">
          <div class="accordion-body">
            <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <span class="text-muted text-xs">Total Modules:</span> <strong>${item.modules.length} Modules</strong>
              </div>
              <button class="btn btn-sm btn-navy enroll-course-btn" data-course-name="${item.courseName}">
                <i class="bi bi-pencil-square me-1"></i> Apply for this Course
              </button>
            </div>
            ${modulesHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach enroll buttons inside accordion
  container.querySelectorAll('.enroll-course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course-name');
      enrollInCourse(courseName);
    });
  });
}

/* --------------------------------------------------------------------------
   3. TESTIMONIALS
   -------------------------------------------------------------------------- */
function initTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(item => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="testimonial-card">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="text-warning">
            ${'<i class="bi bi-star-fill me-1"></i>'.repeat(item.rating)}
          </div>
          <span class="quote-icon"><i class="bi bi-quote"></i></span>
        </div>
        <p class="text-secondary mb-4 flex-grow-1" style="font-size: 0.94rem; line-height: 1.6;">"${item.quote}"</p>
        <div class="d-flex align-items-center gap-3 pt-3 border-top">
          <img src="${item.image}" alt="${item.name}" class="testimonial-avatar">
          <div>
            <h6 class="fw-bold mb-0 text-navy">${item.name}</h6>
            <div class="text-muted" style="font-size: 0.8rem;">${item.role}</div>
            <div class="text-primary fw-semibold" style="font-size: 0.75rem;">${item.company}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. GALLERY & LIGHTBOX
   -------------------------------------------------------------------------- */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  renderGallery(GALLERY_DATA);

  // Gallery category filter buttons
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');
      if (filter === 'all') {
        renderGallery(GALLERY_DATA);
      } else {
        const filtered = GALLERY_DATA.filter(g => g.category.toLowerCase() === filter.toLowerCase());
        renderGallery(filtered);
      }
    });
  });
}

function renderGallery(items) {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="gallery-card" data-img-src="${item.image}" data-img-title="${item.title}" data-img-caption="${item.caption}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="badge bg-white text-navy align-self-start mb-1" style="font-size: 0.72rem;">${item.categoryLabel}</span>
          <h5 class="fw-bold mb-1 text-white" style="font-size: 1.1rem;">${item.title}</h5>
          <p class="small text-light mb-0 text-truncate">${item.caption}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Click on gallery card opens lightbox modal
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-img-src');
      const title = card.getAttribute('data-img-title');
      const caption = card.getAttribute('data-img-caption');

      const modalImg = document.getElementById('lightboxImage');
      const modalTitle = document.getElementById('lightboxTitle');
      const modalCaption = document.getElementById('lightboxCaption');

      if (modalImg) modalImg.src = src;
      if (modalTitle) modalTitle.textContent = title;
      if (modalCaption) modalCaption.textContent = caption;

      const modalEl = document.getElementById('galleryLightboxModal');
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. FAQS ACCORDION
   -------------------------------------------------------------------------- */
function initFAQs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((faq, index) => {
    const isFirst = index === 0;
    return `
      <div class="accordion-item mb-2 border rounded overflow-hidden">
        <h2 class="accordion-header" id="faqHeading-${index}">
          <button class="accordion-button ${isFirst ? '' : 'collapsed'} py-3 text-navy fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-${index}" aria-expanded="${isFirst}">
            <i class="bi bi-question-circle-fill text-primary me-2"></i> ${faq.question}
          </button>
        </h2>
        <div id="faqCollapse-${index}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="faqHeading-${index}" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-secondary" style="font-size: 0.94rem; line-height: 1.6; white-space: pre-line;">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   6. POPULATE DROPDOWN
   -------------------------------------------------------------------------- */
function populateCourseDropdown() {
  const dropdown = document.getElementById('admissionCourse');
  if (!dropdown) return;

  // Clear existing options except placeholder
  dropdown.innerHTML = '<option value="" selected disabled>Select Course Interested In *</option>';

  COURSES_DATA.forEach(course => {
    const option = document.createElement('option');
    option.value = course.name;
    option.textContent = `${course.name} (${course.duration})`;
    dropdown.appendChild(option);
  });
}

/* --------------------------------------------------------------------------
   7. ADMISSION FORM VALIDATION & SUBMISSION
   -------------------------------------------------------------------------- */
function initFormValidationAndSubmission() {
  const form = document.getElementById('admissionForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('admissionFullName').value.trim();
    const email = document.getElementById('admissionEmail').value.trim();
    const phone = document.getElementById('admissionPhone').value.trim();
    const course = document.getElementById('admissionCourse').value;
    const batchTiming = document.getElementById('admissionBatchTiming').value;
    const qualification = document.getElementById('admissionQualification').value;
    const address = document.getElementById('admissionAddress').value.trim();
    const message = document.getElementById('admissionMessage').value.trim();

    // Reset validations
    form.classList.remove('was-validated');
    let isValid = true;

    // Validate Full Name
    if (fullName.length < 2) {
      document.getElementById('admissionFullName').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionFullName').classList.remove('is-invalid');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('admissionEmail').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionEmail').classList.remove('is-invalid');
    }

    // Validate Phone (at least 10 digits)
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      document.getElementById('admissionPhone').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionPhone').classList.remove('is-invalid');
    }

    // Validate Course
    if (!course) {
      document.getElementById('admissionCourse').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionCourse').classList.remove('is-invalid');
    }

    // Validate Batch Timing
    if (!batchTiming) {
      document.getElementById('admissionBatchTiming').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionBatchTiming').classList.remove('is-invalid');
    }

    // Validate Qualification
    if (!qualification) {
      document.getElementById('admissionQualification').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionQualification').classList.remove('is-invalid');
    }

    // Validate Address
    if (address.length < 5) {
      document.getElementById('admissionAddress').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('admissionAddress').classList.remove('is-invalid');
    }

    if (!isValid) {
      return;
    }

    // Submit state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Submitting to Spark IIT Portal...`;

    try {
      const response = await SPARK_IIT_API.submitAdmission({
        fullName,
        email,
        phone,
        course,
        batchTiming,
        qualification,
        address,
        message
      });

      // Show Confirmation Modal
      const modalRef = document.getElementById('confirmationRefId');
      const modalName = document.getElementById('confirmationStudentName');
      const modalCourse = document.getElementById('confirmationCourseName');
      const modalBatch = document.getElementById('confirmationBatch');

      const appData = response.application || {};
      if (modalRef) modalRef.textContent = appData.application_id || 'SPARK-2026-REG';
      if (modalName) modalName.textContent = fullName;
      if (modalCourse) modalCourse.textContent = course;
      if (modalBatch) modalBatch.textContent = `${batchTiming} Batch`;

      const confModal = new bootstrap.Modal(document.getElementById('admissionSuccessModal'));
      confModal.show();

      // Reset form
      form.reset();
      document.querySelectorAll('#admissionForm .is-invalid').forEach(el => el.classList.remove('is-invalid'));
    } catch (err) {
      alert('Could not submit application: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  // Clear validation styling on typing
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM VALIDATION & SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    let isValid = true;
    if (name.length < 2) {
      document.getElementById('contactName').classList.add('is-invalid');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('contactEmail').classList.add('is-invalid');
      isValid = false;
    }

    if (message.length < 5) {
      document.getElementById('contactMessage').classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Sending...`;

    try {
      await SPARK_IIT_API.submitContact({
        name,
        email,
        phone,
        subject,
        message
      });

      const alertBox = document.getElementById('contactSuccessAlert');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        setTimeout(() => alertBox.classList.add('d-none'), 6000);
      }

      form.reset();
    } catch (err) {
      alert('Error sending message: ' + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

/* --------------------------------------------------------------------------
   9. NAVIGATION SCROLL & ACTIVE STATE
   -------------------------------------------------------------------------- */
function initNavigationScroll() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Auto-close mobile menu on link click
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. ADMIN INQUIRIES VIEWER
   -------------------------------------------------------------------------- */
function initAdminViewer() {
  const trigger = document.getElementById('openAdminViewerBtn');
  if (!trigger) return;

  trigger.addEventListener('click', async () => {
    const listContainer = document.getElementById('adminAdmissionsList');
    if (!listContainer) return;

    listContainer.innerHTML = `<div class="text-center py-4"><div class="spinner-border text-primary"></div><p class="mt-2 small text-muted">Fetching records from Spark IIT system...</p></div>`;

    const modal = new bootstrap.Modal(document.getElementById('adminViewerModal'));
    modal.show();

    try {
      const admissions = await SPARK_IIT_API.getAdmissions();
      if (!admissions || admissions.length === 0) {
        listContainer.innerHTML = `<div class="alert alert-info">No admission records found yet. Submit the admission form to see records here.</div>`;
        return;
      }

      listContainer.innerHTML = `
        <div class="table-responsive">
          <table class="table table-hover align-middle">
            <thead class="table-light">
              <tr style="font-size: 0.85rem;">
                <th>Application ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody style="font-size: 0.9rem;">
              ${admissions.map(adm => `
                <tr>
                  <td><span class="badge bg-navy text-white">${adm.application_id || 'SPARK-2026-ADM'}</span></td>
                  <td><strong>${adm.full_name}</strong><br><small class="text-muted">${adm.email}</small></td>
                  <td>${adm.course}</td>
                  <td><span class="badge bg-light text-navy border">${adm.batch_timing}</span></td>
                  <td>${adm.phone}</td>
                  <td><span class="badge bg-success-subtle text-success border border-success-subtle">${adm.status || 'PENDING'}</span></td>
                  <td class="text-muted small">${new Date(adm.created_at).toLocaleDateString()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch (err) {
      listContainer.innerHTML = `<div class="alert alert-danger">Error fetching records: ${err.message}</div>`;
    }
  });
}
