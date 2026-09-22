export interface Course {
  id: string;
  name: string;
  code: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Foundation' | 'Professional' | 'Development' | 'Design' | 'Finance';
  icon: string;
  highlights: string[];
  eligibility: string;
  jobRoles: string[];
  certificationBadge: string;
}

export interface SyllabusModule {
  moduleNumber: number;
  moduleTitle: string;
  durationHours: string;
  topics: string[];
  learningOutcome: string;
}

export interface CourseSyllabus {
  courseId: string;
  courseName: string;
  duration: string;
  prerequisites: string;
  modules: SyllabusModule[];
  assessmentPattern: string;
  certificateAwarded: string;
}

export interface AdmissionFormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  batchTiming: 'Morning' | 'Afternoon' | 'Evening' | '';
  qualification: string;
  address: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  year: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Labs' | 'Classrooms' | 'Events' | 'Certificates';
  image: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Fees & Financials' | 'Certification' | 'Batches';
}
