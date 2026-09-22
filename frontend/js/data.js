/**
 * Spark IIT
 * Academic Programs, Syllabus, and Content Data
 */

const COURSES_DATA = [
  {
    id: "ccc",
    name: "Basic Computer Course (CCC)",
    code: "SPARK-CCC-101",
    duration: "3 Months (90 Hours)",
    category: "Foundation",
    icon: "bi-laptop",
    shortDescription: "Essential foundational computer literacy covering hardware components, Windows OS, typing, internet fundamentals, and digital payment systems.",
    fullDescription: "Designed for beginners and candidates preparing for government or private clerical examinations. Aligned with national digital literacy frameworks, this course equips students with confident PC handling, typing mastery, document drafting, and online safety.",
    eligibility: "10th Standard or equivalent",
    highlights: ["Computer Architecture & Windows 11", "English/Regional Typing Mastery", "Internet Navigation & Cyber Safety", "Word Processing & Basic Spreadsheets"],
    jobRoles: ["Data Entry Operator", "Computer Clerk", "Front Desk Executive"],
    certificationBadge: "Govt. Recognized Certification"
  },
  {
    id: "dca",
    name: "Diploma in Computer Applications (DCA)",
    code: "SPARK-DCA-201",
    duration: "6 Months (180 Hours)",
    category: "Professional",
    icon: "bi-mortarboard-fill",
    shortDescription: "Flagship career diploma covering operating systems, complete MS Office automation, MS Access database management, and computerized accounting basics.",
    fullDescription: "A comprehensive vocational diploma providing in-depth practical knowledge for corporate office environments. From building relational databases and automating spreadsheet models to managing corporate records, DCA is widely recognized for office administration.",
    eligibility: "10+2 (Any Stream)",
    highlights: ["Advanced Windows 11 Administration", "Comprehensive MS Office Suite", "Relational Databases in MS Access", "Financial Bookkeeping Basics"],
    jobRoles: ["Office Coordinator", "Documentation Specialist", "Admin Assistant", "MIS Clerk"],
    certificationBadge: "Spark IIT Vocational Diploma"
  },
  {
    id: "msoffice",
    name: "MS Office Suite",
    code: "SPARK-MSO-102",
    duration: "2 Months (60 Hours)",
    category: "Foundation",
    icon: "bi-file-earmark-spreadsheet-fill",
    shortDescription: "Master corporate document creation in Word, financial worksheets & formulas in Excel, dynamic presentations in PowerPoint, and email rules in Outlook.",
    fullDescription: "Become an indispensable corporate office user. Learn professional document formatting, mail merge, complex formula calculations in Excel, impactful pitch decks in PowerPoint, and calendar management in Outlook.",
    eligibility: "Open to all students & job seekers",
    highlights: ["MS Word Letterheads & Mail Merge", "Excel Formulas, Formatting & Tables", "PowerPoint Master Slides & Decks", "Outlook Email & Calendar Rules"],
    jobRoles: ["Executive Assistant", "Office Coordinator", "Operations Associate"],
    certificationBadge: "Corporate Office Specialist"
  },
  {
    id: "tally",
    name: "Tally with GST",
    code: "SPARK-TLY-301",
    duration: "3 Months (90 Hours)",
    category: "Finance",
    icon: "bi-calculator-fill",
    shortDescription: "Complete computerized accounting using TallyPrime, covering voucher entries, GST billing, E-way bill generation, TDS deductions, and balance sheets.",
    fullDescription: "Highly practical accounting training on authentic corporate transactions. Master company creation, multi-godown inventory, GST calculations (CGST, SGST, IGST), bank reconciliation, payroll processing, and final audited balance sheets.",
    eligibility: "10+2 Commerce / Graduate (Any Stream)",
    highlights: ["TallyPrime Navigation & Ledgers", "GST Returns (GSTR-1, GSTR-3B)", "Multi-Godown Stock & Inventory", "Bank Reconciliation & Final Accounts"],
    jobRoles: ["Junior Accountant", "GST Billing Clerk", "Accounts Assistant", "Audit Support Assistant"],
    certificationBadge: "Professional Accounting Certificate"
  },
  {
    id: "webdesign",
    name: "Web Designing",
    code: "SPARK-WEB-401",
    duration: "4 Months (120 Hours)",
    category: "Development",
    icon: "bi-globe",
    shortDescription: "Design modern, responsive, mobile-first websites using HTML5, CSS3, JavaScript, Bootstrap 5, Tailwind CSS, and Git/GitHub version control.",
    fullDescription: "Step into creative web technology. Learn how websites work from the ground up, convert Figma designs to pixel-perfect responsive code, build mobile navigation and interactive modals, and deploy live websites to real hosting domains.",
    eligibility: "10+2 or basic computer knowledge",
    highlights: ["Semantic HTML5 & Modern CSS3", "Bootstrap 5 & Tailwind CSS", "Interactive JavaScript DOM Manipulation", "Live Hosting & GitHub Portfolios"],
    jobRoles: ["Frontend Web Designer", "UI Developer", "Junior Web Developer", "Freelance Designer"],
    certificationBadge: "Certified Web Designer"
  },
  {
    id: "python",
    name: "Python Programming",
    code: "SPARK-PYT-501",
    duration: "4 Months (120 Hours)",
    category: "Development",
    icon: "bi-code-square",
    shortDescription: "Learn Python from syntax to object-oriented programming (OOP), data structures, automation scripts, SQLite databases, and REST API consumption.",
    fullDescription: "One of the most versatile programming languages in high demand globally. Master programming logic, variables, loops, data structures (lists, tuples, dicts), OOP concepts, SQLite database connectivity, and automated task scripts.",
    eligibility: "10+2 with Math/Science or Any Graduate / BCA",
    highlights: ["Core Python Syntax & Control Flow", "Object-Oriented Architecture (OOP)", "Database CRUD with SQLite", "Automation Scripts & Capstone Project"],
    jobRoles: ["Python Developer Trainee", "Software Associate", "Automation Specialist", "Junior Data Analyst"],
    certificationBadge: "Spark IIT Certified Python Associate"
  },
  {
    id: "dtp",
    name: "Desktop Publishing (DTP)",
    code: "SPARK-DTP-302",
    duration: "3 Months (90 Hours)",
    category: "Design",
    icon: "bi-palette-fill",
    shortDescription: "Commercial print production and graphic design utilizing Adobe Photoshop, CorelDRAW, Adobe InDesign, typography, and color separations.",
    fullDescription: "Master the art and technology of commercial publishing. Create marketing banners, corporate logos, brochures, visiting cards, social media creatives, book layouts, and prepress files ready for offset and digital printers.",
    eligibility: "10th Standard or equivalent",
    highlights: ["Photoshop Photo Editing & Retouching", "CorelDRAW Vector Graphics & Logos", "InDesign Multi-page Publication Layouts", "Commercial Printing & CMYK Outputs"],
    jobRoles: ["DTP Operator", "Graphic Designer", "Print Production Specialist", "Banner & Signage Artist"],
    certificationBadge: "DTP Master Certification"
  },
  {
    id: "excel",
    name: "Advanced Excel",
    code: "SPARK-XLS-202",
    duration: "2 Months (60 Hours)",
    category: "Professional",
    icon: "bi-graph-up-arrow",
    shortDescription: "Advanced business modeling, nested lookup functions (XLOOKUP), Power Query ETL, interactive executive KPI dashboards, and VBA Macro automation.",
    fullDescription: "Engineered for analysts, managers, and administrative leads who want to automate calculations and extract critical business insights from large corporate datasets. Master XLOOKUP, INDEX/MATCH, Dynamic Arrays, and Dashboarding.",
    eligibility: "Basic familiarity with MS Excel",
    highlights: ["Advanced XLOOKUP & Dynamic Arrays", "Power Query Automated ETL", "Interactive Executive Dashboards", "Intro to VBA Macros & Automation"],
    jobRoles: ["MIS Executive", "Business Reporting Analyst", "Data Operations Specialist"],
    certificationBadge: "Advanced Analytics Certificate"
  },
  {
    id: "digitalmarketing",
    name: "Digital Marketing Basics",
    code: "SPARK-DGM-303",
    duration: "3 Months (90 Hours)",
    category: "Professional",
    icon: "bi-megaphone-fill",
    shortDescription: "Explore search engine optimization (SEO), Google Search Console, Meta Facebook & Instagram ads, Google Ads PPC, and Google Analytics 4.",
    fullDescription: "Discover how modern businesses attract customers online. Learn on-page and off-page SEO, run Meta and Google Ad campaigns, design creative social marketing strategies, and track campaign ROI using Google Analytics 4.",
    eligibility: "10+2 / Any College Student / Business Owner",
    highlights: ["SEO Keyword Research & On-page Optimization", "Meta Ads (Facebook & Instagram Ads Manager)", "Google Ads Search PPC Campaigns", "Google Analytics 4 & Conversion Tracking"],
    jobRoles: ["Digital Marketing Executive", "SEO Assistant", "Social Media Coordinator"],
    certificationBadge: "Certified Digital Marketer"
  }
];

const SYLLABUS_DATA = [
  {
    courseId: "ccc",
    courseName: "Basic Computer Course (CCC)",
    duration: "3 Months (90 Hours Practical + Theory)",
    modules: [
      {
        moduleNumber: 1,
        title: "Introduction to Computers & Hardware Basics",
        hours: "15 Hours",
        topics: [
          "Computer Evolution, Generations & Functional Units",
          "CPU Architecture, Primary & Secondary Memory (RAM, ROM, SSD, HDD)",
          "Peripheral Devices: Printers, Scanners, Barcode Readers & Projectors",
          "Operating System Basics: Windows 11 Setup, File Explorer, System Properties"
        ],
        outcome: "Identify hardware components, assemble peripherals, and navigate Windows 11 system utilities."
      },
      {
        moduleNumber: 2,
        title: "GUI Operating System & Desktop Management",
        hours: "18 Hours",
        topics: [
          "Personalizing Desktop, Taskbar, Notification Area, and Start Menu",
          "Creating, Renaming, Moving, and Archiving Files and Folders",
          "Control Panel Management, Network Configuration, and Antivirus Protection",
          "Touch Typing Mastery in English (Target: 25+ WPM) and Regional typing basics"
        ],
        outcome: "Achieve efficient typing speed and maintain organized digital filing systems."
      },
      {
        moduleNumber: 3,
        title: "Word Processing (MS Word / Writer)",
        hours: "22 Hours",
        topics: [
          "Document Setup, Margins, Fonts, Paragraph Spacing, and Alignments",
          "Tables, Header/Footer, Page Numbers, Watermarks, and Page Borders",
          "Shapes, SmartArt Graphics, Picture Editing & Text Wrapping",
          "Mail Merge: Bulk Letters, Address Labels, and Certificate Generation"
        ],
        outcome: "Format professional letters, memos, resumes, and multi-recipient mail merge circulars."
      },
      {
        moduleNumber: 4,
        title: "Spreadsheet Fundamentals & Presentation Tools",
        hours: "20 Hours",
        topics: [
          "Rows, Columns, Cells, Data Types, and Cell Alignment",
          "Basic Calculations: SUM, AVERAGE, MIN, MAX, COUNT, and Percentages",
          "Slide Master, Custom Layouts, and Text Animation in PowerPoint",
          "Transition Effects, Speaker Notes, and Delivering Slide Shows"
        ],
        outcome: "Create formatted financial sheets, student marks cards, and corporate presentation decks."
      },
      {
        moduleNumber: 5,
        title: "Internet, Digital Payments & Cyber Safety",
        hours: "15 Hours",
        topics: [
          "Web Browsers, Search Engines, Downloading, and Bookmarking",
          "Professional Email Etiquette, Attachments, and CC/BCC Practices",
          "UPI, Net Banking, DigiLocker, UMANG, and E-Governance Portals",
          "Cyber Security: Strong Passwords, OTP Safety, Phishing Scams, and Antivirus Updates"
        ],
        outcome: "Perform digital financial transactions securely and safeguard personal data from cyber threats."
      }
    ]
  },
  {
    courseId: "dca",
    courseName: "Diploma in Computer Applications (DCA)",
    duration: "6 Months (180 Hours Intensive Practical)",
    modules: [
      {
        moduleNumber: 1,
        title: "IT Fundamentals, Windows Administration & Utilities",
        hours: "25 Hours",
        topics: [
          "Information Architecture, Number Systems (Binary/Hex), and Memory Hierarchy",
          "Windows 11 Disk Management, Backup, Restore, and System Image",
          "Command Prompt (CMD) & PowerShell Automation Basics",
          "Software Installation, Driver Configurations, and Hardware Diagnostics"
        ],
        outcome: "Administer workstations, resolve driver conflicts, and run disk health utilities."
      },
      {
        moduleNumber: 2,
        title: "Advanced Office Automation (Word & Excel)",
        hours: "40 Hours",
        topics: [
          "Complex Documents: Tables of Content, Indexes, Cross-References, Footnotes",
          "Spreadsheet Functions: VLOOKUP, HLOOKUP, IF, AND, OR, NESTED IF",
          "Data Validation Rules, Conditional Formatting, and Formula Auditing",
          "Pivot Tables, Slicers, and Dynamic Summary Charts"
        ],
        outcome: "Prepare corporate executive reports, audit spreadsheets, and track company budgets."
      },
      {
        moduleNumber: 3,
        title: "Database Management with Microsoft Access",
        hours: "30 Hours",
        topics: [
          "Relational Database Concepts, Primary Keys, Foreign Keys, and Normalization",
          "Table Design, Field Validation Rules, and Lookup Wizards",
          "SQL Queries: Select, Update, Append, Delete, and Parameterized Queries",
          "Designing Interactive Data Entry Forms and Automated Printable Reports"
        ],
        outcome: "Build relational database systems for patient registries, inventory, and school admissions."
      },
      {
        moduleNumber: 4,
        title: "Computerized Accounting (Tally Basics)",
        hours: "35 Hours",
        topics: [
          "Accounting Principles: Golden Rules, Double Entry, and Journal Entries",
          "Company Creation, Primary Groups, Secondary Groups, and Ledgers",
          "Voucher Entries: Payment, Receipt, Contra, Sales, and Purchase",
          "Generating Trial Balance, Profit & Loss Statement, and Balance Sheet"
        ],
        outcome: "Record business bookkeeping transactions and produce preliminary financial statements."
      },
      {
        moduleNumber: 5,
        title: "Web Technologies & Comprehensive Capstone Project",
        hours: "50 Hours",
        topics: [
          "HTML5 Semantic Tags, Forms, Audio/Video, and Tables",
          "CSS3 Selectors, Typography, Colors, and Responsive Layouts",
          "Capstone Project: End-to-end Computerized Office Automation System",
          "Project Documentation, Presentation, and Viva Voce"
        ],
        outcome: "Deliver an end-to-end office automation system portfolio certified by Spark IIT faculty."
      }
    ]
  },
  {
    courseId: "msoffice",
    courseName: "MS Office Suite",
    duration: "2 Months (60 Hours)",
    modules: [
      {
        moduleNumber: 1,
        title: "Microsoft Word: Corporate Business Documentation",
        hours: "18 Hours",
        topics: [
          "Letterheads, Official Notices, Legal Agreements, and Corporate Formatting",
          "Advanced Tables, Nested Lists, Section Breaks, and Page Setup",
          "Collaborative Editing: Track Changes, Comments, and Document Comparison",
          "Mail Merge for Envelopes, Personalized Invoices, and ID Cards"
        ],
        outcome: "Draft publication-grade corporate proposals, contracts, and personalized circulars."
      },
      {
        moduleNumber: 2,
        title: "Microsoft Excel: Business Calculation & Data Structuring",
        hours: "22 Hours",
        topics: [
          "Cell Referencing: Relative, Absolute ($), and Mixed Calculations",
          "Math, Text, and Date Functions: CONCATENATE, TEXT, DATE, DATEDIF",
          "Logical Functions: IF, IFS, nested IF, COUNTIF, SUMIF",
          "Sorting, Multi-level Filtering, and Print Optimization"
        ],
        outcome: "Build mathematical calculation sheets, payroll registers, and inventory balances."
      },
      {
        moduleNumber: 3,
        title: "Microsoft PowerPoint: High-Impact Visual Presentations",
        hours: "12 Hours",
        topics: [
          "Slide Master Customization and Corporate Branding Uniformity",
          "Visual Storytelling with Infographics, SmartArt, and Embedded Charts",
          "Hyperlinks, Trigger Animations, and Multimedia (Audio/Video) integration",
          "Presenter View, Rehearsal Timings, and Exporting to PDF & Video"
        ],
        outcome: "Deliver compelling business slide presentations for executive boardrooms."
      },
      {
        moduleNumber: 4,
        title: "Microsoft Outlook: Enterprise Communication & Calendar",
        hours: "8 Hours",
        topics: [
          "Configuring IMAP/Exchange Email and Corporate Signature Setup",
          "Inbox Organization: Rules, Categories, Quick Steps, and Search Folders",
          "Calendar Scheduling: Meeting Invitations, Recurring Events, and Time Zones",
          "Task Delegation, Follow-up Flags, and Address Book Groups"
        ],
        outcome: "Manage professional enterprise email communications and team schedules effortlessly."
      }
    ]
  },
  {
    courseId: "tally",
    courseName: "Tally with GST",
    duration: "3 Months (90 Hours Practical Accounting)",
    modules: [
      {
        moduleNumber: 1,
        title: "Accounting Fundamentals & TallyPrime Architecture",
        hours: "16 Hours",
        topics: [
          "Golden Rules of Accounting, Chart of Accounts, and Company Creation",
          "Security Control, User Roles, and Password Configuration",
          "Ledger Creation, Grouping, and Opening Balances Verification",
          "Cash and Bank Book Reconciliation"
        ],
        outcome: "Configure new commercial entities in TallyPrime with compliant ledger structures."
      },
      {
        moduleNumber: 2,
        title: "Inventory Management & Order Cycles",
        hours: "20 Hours",
        topics: [
          "Stock Items, Groups, Categories, Units of Measure & Compound Units",
          "Multi-location Godowns, Stock Transfers, and Physical Stock Vouchers",
          "Purchase Order (PO) and Sales Order (SO) Cycles",
          "Price Lists, Discount Structures, and Reorder Levels"
        ],
        outcome: "Manage multi-warehouse stock, track inventory valuations, and process order cycles."
      },
      {
        moduleNumber: 3,
        title: "Goods & Services Tax (GST) Implementation",
        hours: "26 Hours",
        topics: [
          "GST Architecture: CGST, SGST, IGST, and Cess Provisions",
          "HSN/SAC Code Assignment and Tax Rate Mapping",
          "GST Tax Invoices, Bill of Supply, Credit Notes, and Debit Notes",
          "E-Way Bill Generation & E-Invoicing Portals"
        ],
        outcome: "Generate legally compliant GST invoices, handle interstate trade, and produce E-way bills."
      },
      {
        moduleNumber: 4,
        title: "GST Returns (GSTR-1, 3B), TDS & Bank Reconciliation",
        hours: "18 Hours",
        topics: [
          "Filing GSTR-1 (Outward Supplies) & GSTR-3B Summary Returns",
          "TDS Calculations, Deductions, Challan 281, and Form 16A",
          "Automated Bank Reconciliation with Bank Statement Imports",
          "Aging Analysis of Receivables and Payables"
        ],
        outcome: "Reconcile corporate bank ledgers and file monthly/quarterly GST tax returns without errors."
      },
      {
        moduleNumber: 5,
        title: "Payroll Management & Final Financial Accounts",
        hours: "10 Hours",
        topics: [
          "Employee Groups, Pay Heads, and Attendance Types",
          "Salary Slip Generation, PF, ESI, and Professional Tax Deductions",
          "Balance Sheet, Profit & Loss Account, Cash Flow & Financial Ratios",
          "Data Backup, Restore, Audit Trail, and Year-End Splitting"
        ],
        outcome: "Generate monthly staff payroll slips and finalize audited balance sheets for tax accountants."
      }
    ]
  },
  {
    courseId: "webdesign",
    courseName: "Web Designing",
    duration: "4 Months (120 Hours Live Coding)",
    modules: [
      {
        moduleNumber: 1,
        title: "Semantic HTML5 & Web Architecture",
        hours: "20 Hours",
        topics: [
          "Client-Server Architecture, DNS, HTTP/HTTPS, and Browsers",
          "HTML5 Semantic Elements: header, nav, main, section, article, footer",
          "Form Elements, Input Validation, Tables, Audio, and Video Embeds",
          "SEO Meta Tags, Open Graph Protocol, and Accessibility (ARIA) basics"
        ],
        outcome: "Build clean, semantic HTML structures fully optimized for search engines and assistive tech."
      },
      {
        moduleNumber: 2,
        title: "Modern CSS3, Flexbox & CSS Grid",
        hours: "30 Hours",
        topics: [
          "CSS Selectors, Cascade, Specificity, Inheritance, and Box Model",
          "Responsive Design: Viewports, Mobile-First Media Queries",
          "CSS Flexbox for Navigation Bars, Cards, and Dynamic Layouts",
          "CSS Grid for 2D Page Layouts, Hero Grids, and Image Galleries",
          "CSS Variables, Transforms, Transitions, and Keyframe Animations"
        ],
        outcome: "Design fully responsive layouts that adjust seamlessly across mobile, tablet, and desktop screens."
      },
      {
        moduleNumber: 3,
        title: "UI Frameworks: Bootstrap 5 & Tailwind CSS",
        hours: "25 Hours",
        topics: [
          "Bootstrap 5 12-column Grid, Containers, Rows, and Breakpoints",
          "Bootstrap Components: Navbars, Modals, Accordions, Carousels, Toasts",
          "Tailwind CSS Utility-First Framework: Setup, Config, and Color Tokens",
          "Prototyping Landing Pages from Figma and Adobe XD Wireframes"
        ],
        outcome: "Rapidly assemble modern corporate and commercial UI components using industry frameworks."
      },
      {
        moduleNumber: 4,
        title: "Interactive JavaScript (ES6+) & DOM Manipulation",
        hours: "30 Hours",
        topics: [
          "JavaScript Syntax: let/const, Data Types, Operators, and Functions",
          "DOM Selection, Event Listeners, Form Validation, and Class Toggling",
          "Array Methods: map, filter, reduce, forEach, and Object Destructuring",
          "Fetch API for REST APIs and LocalStorage for Theme / Cart persistence"
        ],
        outcome: "Implement rich frontend interactivity including tab filters, form verification, and API calls."
      },
      {
        moduleNumber: 5,
        title: "Git, GitHub & Live Production Deployment",
        hours: "15 Hours",
        topics: [
          "Git Version Control: init, add, commit, branch, and merge",
          "Pushing Code to GitHub and Managing Online Repositories",
          "Deploying Live Websites to Vercel, Netlify, and GitHub Pages",
          "Custom Domains, SSL Certificates, and Performance Optimization"
        ],
        outcome: "Launch a live personal web design portfolio with a custom domain hosted on cloud infrastructure."
      }
    ]
  },
  {
    courseId: "python",
    courseName: "Python Programming",
    duration: "4 Months (120 Hours Hands-on)",
    modules: [
      {
        moduleNumber: 1,
        title: "Python Syntax, Environment & Flow Control",
        hours: "22 Hours",
        topics: [
          "Installing Python 3, VS Code Setup, Virtual Environments, and PIP",
          "Variables, Data Types, Operators, and Formatted Strings (f-strings)",
          "Conditionals: if, elif, else statements and Logical Operators",
          "Loops: while, for, range(), break, continue, and list iteration"
        ],
        outcome: "Write structured Python scripts to solve algorithmic challenges and process user inputs."
      },
      {
        moduleNumber: 2,
        title: "Data Structures & Modular Functions",
        hours: "26 Hours",
        topics: [
          "Lists, Tuples, Sets, and Dictionaries: Operations, Methods & Slicing",
          "List and Dictionary Comprehensions for concise data pipelines",
          "Functions: Parameters, Return Values, *args, **kwargs, and Scope",
          "Standard Library Modules: math, random, datetime, os, and sys"
        ],
        outcome: "Manipulate multi-dimensional data structures and architect clean modular code."
      },
      {
        moduleNumber: 3,
        title: "Object-Oriented Programming (OOP) & Exception Handling",
        hours: "26 Hours",
        topics: [
          "Classes, Objects, Methods, and the __init__ Constructor",
          "Encapsulation, Private Attributes, Getters, and Setters",
          "Inheritance, super() function, Polymorphism, and Method Overriding",
          "Exception Handling with try, except, else, and finally blocks"
        ],
        outcome: "Model real-world business domains using industry-grade object-oriented principles."
      },
      {
        moduleNumber: 4,
        title: "File Operations & Relational Databases (SQLite)",
        hours: "24 Hours",
        topics: [
          "Reading and Writing Text (.txt), CSV (.csv), and JSON (.json) files",
          "Database Operations with SQLite3: Connecting and Executing Queries",
          "CRUD Operations: Create Tables, Insert Records, Select, Update, Delete",
          "Parameterized Queries and Preventing SQL Injection"
        ],
        outcome: "Build persistent database-backed software systems for student and inventory tracking."
      },
      {
        moduleNumber: 5,
        title: "Web Automation, REST APIs & Capstone Project",
        hours: "22 Hours",
        topics: [
          "Automating Tasks with Python Scripts (Excel processing, Bulk Emails)",
          "Consuming REST APIs using the `requests` library",
          "Introduction to Web Micro-frameworks (Flask) or Desktop GUI (Tkinter)",
          "Final Capstone Project Implementation, Code Review & GitHub publishing"
        ],
        outcome: "Build an end-to-end Python automation script or web tool and publish the code to GitHub."
      }
    ]
  },
  {
    courseId: "dtp",
    courseName: "Desktop Publishing (DTP)",
    duration: "3 Months (90 Hours Studio Training)",
    modules: [
      {
        moduleNumber: 1,
        title: "Design Principles, Color Theory & Prepress Basics",
        hours: "12 Hours",
        topics: [
          "Visual Hierarchy, Balance, Contrast, Alignment, and White Space",
          "Color Modes: RGB vs. CMYK, Spot Colors, and Pantone Standards",
          "Typography Fundamentals: Font Pairing, Leading, Kerning, and Tracking",
          "Print Paper Dimensions: A4, A3, Legal, 12x18, Flex Specifications"
        ],
        outcome: "Understand commercial prepress specifications to produce flawless high-resolution print outputs."
      },
      {
        moduleNumber: 2,
        title: "Adobe Photoshop: Photo Editing & Digital Compositing",
        hours: "30 Hours",
        topics: [
          "Workspace, Selection Tools (Pen Tool, Lasso, Quick Mask)",
          "Layers, Masks, Clipping Masks, and Blending Modes",
          "Photo Retouching: Healing Brush, Clone Stamp, Color Correction",
          "Creating Social Media Posts, Web Banners, and YouTube Thumbnails"
        ],
        outcome: "Retouch photos, remove backgrounds, and create eye-catching digital marketing graphics."
      },
      {
        moduleNumber: 3,
        title: "CorelDRAW: Vector Illustration & Commercial Printing",
        hours: "26 Hours",
        topics: [
          "Vector Illustration with Bezier & Pen Tools, Shape Operations",
          "Designing Corporate Logos, Business Cards, and Letterheads",
          "Flex Banners, Hoardings, Standees, and Glow Signboards",
          "Die-Cut Packaging, Product Labels, Barcodes, and Pre-print Proofing"
        ],
        outcome: "Design scalable corporate branding assets and large-scale outdoor flex advertisements."
      },
      {
        moduleNumber: 4,
        title: "Adobe InDesign: Multi-page Publication Layouts",
        hours: "22 Hours",
        topics: [
          "Document Grids, Margins, Bleeds, Slug, and Facing Pages",
          "Master Pages, Automatic Page Numbering, and Multi-column Layouts",
          "Paragraph & Character Styles for Books, Catalogs, and Magazines",
          "Preflight Checking, Packaging Project Files, and High-Res PDF Export"
        ],
        outcome: "Assemble multi-page magazines, brochures, catalogs, and book publications for offset printing."
      }
    ]
  },
  {
    courseId: "excel",
    courseName: "Advanced Excel",
    duration: "2 Months (60 Hours Business Analytics)",
    modules: [
      {
        moduleNumber: 1,
        title: "Advanced Lookup & Reference Functions",
        hours: "14 Hours",
        topics: [
          "VLOOKUP (Exact & Approximate), HLOOKUP, and Reference Limitations",
          "INDEX and MATCH for Flexible Two-way Matrix Lookups",
          "Modern Excel: XLOOKUP, XMATCH, and Multi-criteria Conditionals",
          "Dynamic Array Functions: FILTER, SORT, UNIQUE, SEQUENCE"
        ],
        outcome: "Retrieve data across disparate multi-sheet workbooks without formula breakage."
      },
      {
        moduleNumber: 2,
        title: "Automated Data Cleaning with Power Query (ETL)",
        hours: "16 Hours",
        topics: [
          "Connecting to External Data (CSV, Excel Folders, Web, SQL Databases)",
          "Splitting Columns, Unpivoting, Removing Duplicates, and Replacing Nulls",
          "Merging (Joins) and Appending Multiple Spreadsheets Automatically",
          "One-Click Automated Refresh for 100,000+ Row Datasets"
        ],
        outcome: "Automate recurring data scrubbing pipelines and eliminate manual copy-pasting."
      },
      {
        moduleNumber: 3,
        title: "Pivot Tables, Data Modeling & Executive Dashboards",
        hours: "18 Hours",
        topics: [
          "Advanced Pivot Tables: Calculated Fields, Items, and Custom Groupings",
          "Building Relational Data Models with Excel Power Pivot",
          "Designing Executive KPI Cards, Dynamic Slicers, and Timelines",
          "Corporate Interactive Dashboards: Sales Trends, Profit Margins, and Funnels"
        ],
        outcome: "Construct interactive visual executive dashboards for business management presentations."
      },
      {
        moduleNumber: 4,
        title: "What-If Analysis, Security & Intro to VBA Macros",
        hours: "12 Hours",
        topics: [
          "Goal Seek, Scenario Manager, and Data Tables for Financial Projections",
          "Sheet & Workbook Protection, Cell Locking, and Formula Hiding",
          "Recording VBA Macros and Assigning Macros to Custom Dashboard Buttons",
          "Basic Code Tweaking in VBA Editor for Daily Task Automation"
        ],
        outcome: "Perform financial sensitivity forecasts and automate routine reports using button-triggered macros."
      }
    ]
  },
  {
    courseId: "digitalmarketing",
    courseName: "Digital Marketing Basics",
    duration: "3 Months (90 Hours Practical)",
    modules: [
      {
        moduleNumber: 1,
        title: "Digital Marketing Fundamentals & Funnels",
        hours: "12 Hours",
        topics: [
          "Traditional vs. Digital Marketing, Customer Acquisition Funnels (AIDA)",
          "Buyer Personas, Competitor Benchmarking, and USP Identification",
          "Landing Page Optimization, High-Converting CTAs, and Lead Magnets",
          "WordPress Fundamentals for Business Lead Generation Websites"
        ],
        outcome: "Formulate an end-to-end customer acquisition strategy for local and e-commerce enterprises."
      },
      {
        moduleNumber: 2,
        title: "Search Engine Optimization (SEO) Mastery",
        hours: "26 Hours",
        topics: [
          "Keyword Research: Search Volume, Intent, and Competition Analysis",
          "On-Page SEO: Title Tags, Meta Descriptions, Header Tags, and URL Hierarchy",
          "Technical SEO: Robots.txt, XML Sitemaps, Page Speed, and Mobile Responsiveness",
          "Off-Page SEO: High-Authority Backlink Strategies and Guest Posting",
          "Google Search Console & Google Business Profile (Local Map Pack Ranking)"
        ],
        outcome: "Rank websites on Google Search Page 1 for high-intent queries and optimize local map listings."
      },
      {
        moduleNumber: 3,
        title: "Social Media Marketing & Meta Ads",
        hours: "24 Hours",
        topics: [
          "Organic Engagement Strategies on Instagram, Facebook, and LinkedIn",
          "Meta Ads Manager: Business Account, Pixel Tracking, and Event Setup",
          "Targeting: Demographics, Interests, Custom Audiences, and Lookalikes",
          "Ad Formats: Carousel, Video, Lead Generation Forms, and Retargeting Campaigns"
        ],
        outcome: "Run high-converting Facebook and Instagram ad campaigns that generate qualified customer leads."
      },
      {
        moduleNumber: 4,
        title: "Google Ads (PPC) & Search Advertising",
        hours: "16 Hours",
        topics: [
          "Google Search Ads: Campaign Structure, Ad Groups, and Keywords",
          "Keyword Match Types: Broad, Phrase, Exact, and Negative Keywords",
          "Ad Copywriting, Quality Score Optimization, and Sitelink Extensions",
          "Bidding Strategies: Maximize Clicks, Target CPA, and Conversion Tracking"
        ],
        outcome: "Launch targeted search ads capturing high-intent customers ready to purchase immediately."
      },
      {
        moduleNumber: 5,
        title: "Google Analytics 4 (GA4), Email Marketing & Freelancing",
        hours: "12 Hours",
        topics: [
          "Configuring GA4: Events, Conversion Goals, and Traffic Reports",
          "Email Marketing: Lead Capture, Automated Welcome Sequences, and Newsletters",
          "Freelance Playbook: Upwork, Fiverr, and Pitching to Local Businesses",
          "Client Onboarding, Strategy Proposals, and Monthly ROI Reporting"
        ],
        outcome: "Track campaign performance with analytics and launch a career as a freelance digital marketer."
      }
    ]
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Rajesh Sharma",
    course: "Diploma in Computer Applications (DCA)",
    year: "2025 Graduate",
    role: "Administrative Executive",
    company: "Apex Global Logistics",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "Joining Spark IIT transformed my career outlook completely. The 1:1 computer lab practice and teacher attention gave me the confidence to handle corporate spreadsheets and administrative paperwork without any hesitation.",
    rating: 5
  },
  {
    name: "Pooja Verma",
    course: "Tally with GST & E-Way Bill",
    year: "2025 Graduate",
    role: "Junior Accountant",
    company: "Singhal & Co. Chartered Accountants",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "The practical approach with real GST billing invoices and bank reconciliation cases in Tally was exactly what was tested in my interview. The institute placement cell arranged 3 interviews right after completion!",
    rating: 5
  },
  {
    name: "Aman Deep Singh",
    course: "Web Designing & Frontend",
    year: "2024 Graduate",
    role: "UI Designer / Frontend Dev",
    company: "NexTech Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "I had no coding background, but the faculty at Spark IIT started from the absolute basics of HTML and CSS. Within 4 months, I built 3 live portfolio projects and landed my first web design job.",
    rating: 5
  },
  {
    name: "Neha Srivastava",
    course: "Advanced Excel & Business Analytics",
    year: "2025 Graduate",
    role: "MIS Reporting Analyst",
    company: "Zenith Retail Corporation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    quote: "Power Query and dynamic dashboards taught in the Advanced Excel course saved our department hours of manual copying every week. Highly recommended for any working professional looking to upskill.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    course: "Python Programming",
    year: "2025 Graduate",
    role: "Software Trainee",
    company: "DataCore Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "The modular assignments, database connectivity with SQLite, and script automation were explained step by step. Great infrastructure with high-speed internet and well-maintained air-conditioned labs.",
    rating: 5
  }
];

const GALLERY_DATA = [
  {
    id: "g1",
    title: "High-Performance Computer Lab",
    category: "labs",
    categoryLabel: "Computer Labs",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    caption: "Modern air-conditioned lab with individual workstations and dual-screen instructor terminals."
  },
  {
    id: "g2",
    title: "Smart Classroom Theory Session",
    category: "classrooms",
    categoryLabel: "Classrooms",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    caption: "Interactive lecture theater with audio-visual projection for conceptual architecture and case studies."
  },
  {
    id: "g3",
    title: "Certificate Distribution Convocation",
    category: "certificates",
    categoryLabel: "Certificates",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=800&q=80",
    caption: "Graduating batch awarded ISO 9001:2015 recognized diplomas by the institute director."
  },
  {
    id: "g4",
    title: "Hands-on Software Development Lab",
    category: "labs",
    categoryLabel: "Computer Labs",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    caption: "Students collaborating on Python scripting and web application projects under faculty guidance."
  },
  {
    id: "g5",
    title: "Corporate HR Recruitment Workshop",
    category: "events",
    categoryLabel: "Student Events",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    caption: "Industry HR leaders conducting mock interview rounds and resume building workshops."
  },
  {
    id: "g6",
    title: "DTP & Graphic Design Studio",
    category: "labs",
    categoryLabel: "Computer Labs",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    caption: "Color-calibrated design terminals for Photoshop, CorelDRAW, and InDesign print workflows."
  },
  {
    id: "g7",
    title: "Faculty Mentorship & Practical Debugging",
    category: "classrooms",
    categoryLabel: "Classrooms",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    caption: "Certified instructors providing 1-on-1 personalized problem-solving support to students."
  },
  {
    id: "g8",
    title: "Merit Scholars & Outstanding Performers",
    category: "certificates",
    categoryLabel: "Certificates",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    caption: "Top-ranking students awarded certificates of excellence for practical exam scores."
  },
  {
    id: "g9",
    title: "Annual Tech Fest & Project Showcase",
    category: "events",
    categoryLabel: "Student Events",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "Annual coding hackathon and digital marketing exhibition organized by the student council."
  }
];

const FAQ_DATA = [
  {
    category: "Admissions",
    question: "What is the minimum eligibility criteria for enrolling in courses?",
    answer: "Foundational courses such as Basic Computer Course (CCC), MS Office, and DTP require a minimum of 10th standard pass. Career diploma courses like DCA, Web Designing, Python, and Tally with GST recommend 10+2 (any stream) or higher. Working professionals and college students can enroll directly without prior IT background."
  },
  {
    category: "Admissions",
    question: "How do I apply for admission?",
    answer: "You can submit the online Admission Form on this website with your preferred course and batch timing. Our academic counselors will reach out to you within 24 hours to confirm your seat, review your documents, and complete your registration."
  },
  {
    category: "Batches",
    question: "What are the available batch timings and schedule?",
    answer: "We provide three convenient daily batch slots from Monday to Saturday:\n• Morning Batch: 8:00 AM – 12:00 PM\n• Afternoon Batch: 12:00 PM – 4:00 PM\n• Evening Batch: 4:00 PM – 8:00 PM\nWeekend doubt clearing and extra practice lab hours are also available on Saturdays."
  },
  {
    category: "Fees",
    question: "Can the course fees be paid in monthly installments?",
    answer: "Yes, Spark IIT offers interest-free monthly installment facilities for all diploma and multi-month programs. An initial registration fee is paid upon admission, and the balance can be split into comfortable monthly installments."
  },
  {
    category: "Certification",
    question: "Is the certificate issued by Spark IIT recognized by employers?",
    answer: "Yes. Spark IIT is an ISO 9001:2015 certified vocational education institute. Certificates and diplomas carry a unique registration number with a tamper-proof QR code that can be verified online by recruiters, government portals, and corporate employers."
  },
  {
    category: "Certification",
    question: "What is the assessment pattern to receive the certificate?",
    answer: "Assessments comprise an objective MCQ theory exam (40% weightage) and a hands-on practical lab test (60% weightage). Students must score an aggregate of at least 50% marks and submit the mandatory course project to earn their official diploma or certificate."
  },
  {
    category: "Placement",
    question: "Does Spark IIT provide placement assistance after course completion?",
    answer: "Yes, our active Placement Cell provides interview preparation, resume formatting, mock technical interviews, and coordinates campus placement drives with our network of over 120 hiring partners across IT, accounting, retail, and manufacturing sectors."
  },
  {
    category: "Batches",
    question: "Can I transfer to a different batch timing after joining?",
    answer: "Yes. If your college or office hours change, you can submit a simple batch change request form at the administrative desk, and you will be accommodated in your preferred slot subject to bench availability."
  }
];
