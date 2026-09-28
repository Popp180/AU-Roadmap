const programBase = {
  level: 'undergraduate',
  duration_years: 3,
  atar_requirement: 75,
  fees_domestic: 9120,
  study_mode: 'On campus',
  campus: 'Adelaide City Campus',
  intake: 'February and July',
};

export const demoPrograms = [
  { ...programBase, id: 1, code: 'BCOMP', name: 'Bachelor of Computer Science', faculty: 'Faculty of Sciences', description: 'Build strong foundations in software development, algorithms, artificial intelligence and modern computing systems.', banner_url: '/program/hero-banner-computer-science.jpg' },
  { ...programBase, id: 2, code: 'BENG-SW', name: 'Bachelor of Engineering (Software)', faculty: 'Faculty of Engineering', duration_years: 4, atar_requirement: 80, fees_domestic: 9360, description: 'Design dependable software systems and learn to lead complex engineering projects with industry experience.', banner_url: '/program/hero-banner-software-engineer.jpg' },
  { ...programBase, id: 3, code: 'BDS', name: 'Bachelor of Data Science', faculty: 'Faculty of Sciences', atar_requirement: 78, description: 'Turn complex data into practical insight through statistics, machine learning and data visualisation.', banner_url: '/program/hero-banner-data-science.jpg' },
  { ...programBase, id: 4, code: 'BCYBER', name: 'Bachelor of Cyber Security', faculty: 'Faculty of Engineering', atar_requirement: 76, description: 'Protect digital systems through hands-on study of secure development, networks and cyber operations.', banner_url: '/program/hero-banner-cyber-security.jpg' },
  { ...programBase, id: 5, code: 'BBUS', name: 'Bachelor of Business', faculty: 'Adelaide Business School', atar_requirement: 70, fees_domestic: 8640, description: 'Develop commercial insight and practical skills across management, marketing and entrepreneurship.' },
  { ...programBase, id: 6, code: 'MDS', name: 'Master of Data Science', faculty: 'Faculty of Sciences', level: 'postgraduate', duration_years: 2, atar_requirement: null, fees_domestic: 28400, description: 'Advance your career with applied machine learning, analytics and responsible data practice.' },
];

export const demoCourses = [
  { id: 101, code: 'COMP SCI 1101', name: 'Introduction to Programming', description: 'Problem solving and software development fundamentals using a modern programming language.', units: 3, year_level: 1, semester: 1, semester_number: 1, is_core: true, prerequisites: [] },
  { id: 102, code: 'MATHS 1001', name: 'Mathematics for Computing', description: 'Discrete mathematics, logic and foundational methods for computing.', units: 3, year_level: 1, semester: 1, semester_number: 1, is_core: true, prerequisites: [] },
  { id: 103, code: 'COMP SCI 1102', name: 'Object-Oriented Programming', description: 'Object-oriented design, testing and reusable software construction.', units: 3, year_level: 1, semester: 2, semester_number: 2, is_core: true, prerequisites: [{ id: 101, code: 'COMP SCI 1101', name: 'Introduction to Programming' }] },
  { id: 104, code: 'DATA 1001', name: 'Data Foundations', description: 'Collecting, cleaning, interpreting and communicating with data.', units: 3, year_level: 1, semester: 2, semester_number: 2, is_core: false, prerequisites: [] },
  { id: 201, code: 'COMP SCI 2201', name: 'Algorithms and Data Structures', description: 'Efficient algorithms, abstract data types and computational complexity.', units: 3, year_level: 2, semester: 1, semester_number: 1, is_core: true, prerequisites: [{ id: 103, code: 'COMP SCI 1102', name: 'Object-Oriented Programming' }] },
  { id: 202, code: 'COMP SCI 2202', name: 'Database Systems', description: 'Relational modelling, SQL, transactions and contemporary data platforms.', units: 3, year_level: 2, semester: 1, semester_number: 1, is_core: true, prerequisites: [{ id: 101, code: 'COMP SCI 1101', name: 'Introduction to Programming' }] },
  { id: 203, code: 'COMP SCI 2203', name: 'Computer Networks', description: 'Network architecture, protocols, distributed communication and security.', units: 3, year_level: 2, semester: 2, semester_number: 2, is_core: true, prerequisites: [] },
  { id: 204, code: 'DESIGN 2001', name: 'Human-Centred Design', description: 'Research and design methods for usable, inclusive digital products.', units: 3, year_level: 2, semester: 2, semester_number: 2, is_core: false, prerequisites: [] },
  { id: 301, code: 'COMP SCI 3301', name: 'Artificial Intelligence', description: 'Search, reasoning and machine learning approaches to intelligent systems.', units: 3, year_level: 3, semester: 1, semester_number: 1, is_core: true, prerequisites: [{ id: 201, code: 'COMP SCI 2201', name: 'Algorithms and Data Structures' }] },
  { id: 302, code: 'COMP SCI 3302', name: 'Software Engineering Project', description: 'A team-based industry project covering discovery, delivery and evaluation.', units: 6, year_level: 3, semester: 1, semester_number: 1, is_core: true, prerequisites: [{ id: 201, code: 'COMP SCI 2201', name: 'Algorithms and Data Structures' }] },
  { id: 303, code: 'COMP SCI 3303', name: 'Cloud Computing', description: 'Designing, deploying and operating resilient cloud applications.', units: 3, year_level: 3, semester: 2, semester_number: 2, is_core: false, prerequisites: [{ id: 203, code: 'COMP SCI 2203', name: 'Computer Networks' }] },
  { id: 304, code: 'COMP SCI 3304', name: 'Professional Practice', description: 'Ethics, communication and leadership in the technology profession.', units: 3, year_level: 3, semester: 2, semester_number: 2, is_core: true, prerequisites: [] },
];

export const demoRoadmap = {
  program: demoPrograms[0],
  roadmap: [1, 2, 3].map(year => ({
    year,
    year_level: year,
    semesters: [1, 2].map(semester => ({
      semester,
      semester_number: semester,
      courses: demoCourses.filter(course => course.year_level === year && course.semester_number === semester),
    })),
  })),
};

export const demoAlumni = [
  { id: 21, user_id: 21, first_name: 'Rhaneela', last_name: 'Punitham', role: 'alumni', graduation_year: 2024, current_position: 'Technology Consultant', current_company: 'KPMG', bio: 'Rhaneela helps organisations modernise digital services and mentors early-career technologists.', skills: 'Cloud strategy, consulting, software delivery', profile_image_url: '/alumni/rhaneela-punitham.jpeg', avatar_url: '/alumni/rhaneela-punitham.jpeg', connection_status: null },
  { id: 22, user_id: 22, first_name: 'Lasni', last_name: 'Kumarasinghe', role: 'alumni', graduation_year: 2020, current_position: 'Health Technology Lead', current_company: 'SA Health', bio: 'Lasni works at the intersection of health services, research and digital transformation.', skills: 'Health informatics, research, leadership', profile_image_url: '/alumni/lasni-kumarasinghe.jpeg', avatar_url: '/alumni/lasni-kumarasinghe.jpeg', connection_status: 'connected' },
  { id: 23, user_id: 23, first_name: 'Dave', last_name: 'Fletcher', role: 'alumni', graduation_year: 2018, current_position: 'Product Director', current_company: 'Fivecast', bio: 'Dave leads multidisciplinary product teams building trusted data platforms.', skills: 'Product strategy, data platforms, mentoring', profile_image_url: '/alumni/dave-fletcher.jpg', avatar_url: '/alumni/dave-fletcher.jpg', connection_status: 'pending' },
  { id: 24, user_id: 24, first_name: 'Walter', last_name: 'Marsh', role: 'alumni', graduation_year: 2023, current_position: 'Research Analyst', current_company: 'State Library of SA', bio: 'Walter combines digital research methods with clear public communication.', skills: 'Research, writing, digital humanities', profile_image_url: '/alumni/walter-marsh.jpeg', avatar_url: '/alumni/walter-marsh.jpeg', connection_status: null },
];

export const demoCareers = {
  outcomes: [
    { id: 1, year: 2025, employment_rate: 93, median_salary: 78000, salary_range_low: 68000, salary_range_high: 104000, further_study_rate: 11, satisfaction_rate: 91 },
    { id: 2, year: 2024, employment_rate: 91, median_salary: 74500, salary_range_low: 65000, salary_range_high: 98000, further_study_rate: 13, satisfaction_rate: 89 },
  ],
  paths: [
    { id: 1, job_title: 'Software Engineer', average_salary: 108500, demand_level: 'high', growth_outlook: 'Strong', description: 'Design and build software products across web, mobile and cloud platforms.' },
    { id: 2, job_title: 'Data Analyst', average_salary: 92500, demand_level: 'high', growth_outlook: 'Very strong', description: 'Translate organisational data into evidence for better decisions.' },
    { id: 3, job_title: 'Cyber Security Analyst', average_salary: 112000, demand_level: 'high', growth_outlook: 'Very strong', description: 'Identify risks and strengthen the security of digital systems.' },
    { id: 4, job_title: 'Product Manager', average_salary: 121000, demand_level: 'medium', growth_outlook: 'Strong', description: 'Guide cross-functional teams to solve valuable customer problems.' },
  ],
};

export const demoIndustry = [
  { id: 1, name: 'Atlassian', industry_sector: 'Software', partnership_type: 'internship', website_url: 'https://atlassian.com', description: 'Global collaboration software company with strong Australian roots.', opportunity_description: 'Summer internships and graduate software engineering roles.' },
  { id: 2, name: 'Google Australia', industry_sector: 'Technology', partnership_type: 'guest_lecture', website_url: 'https://google.com', description: 'Industry speakers contribute to cloud and responsible AI teaching.', opportunity_description: 'Guest lectures, technical workshops and student challenges.' },
  { id: 3, name: 'Defence Science and Technology Group', industry_sector: 'Defence research', partnership_type: 'research', website_url: 'https://dst.defence.gov.au', description: 'Applied research collaboration across cyber security and autonomous systems.', opportunity_description: 'Research placements and honours projects.' },
  { id: 4, name: 'PwC Australia', industry_sector: 'Professional services', partnership_type: 'employment', website_url: 'https://pwc.com.au', description: 'Consulting pathways combining technology, strategy and human-centred design.', opportunity_description: 'Graduate program, vacation program and mentoring.' },
  { id: 5, name: 'Santos', industry_sector: 'Energy', partnership_type: 'sponsorship', website_url: 'https://santos.com', description: 'Supporting student innovation and applied data science projects.', opportunity_description: 'Scholarships and industry capstone projects.' },
];

export const demoResources = [
  { id: 1, title: 'Learning Support Hub', category: 'academic', description: 'Book study skills, writing and mathematics support with a learning adviser.', url: 'https://www.adelaide.edu.au/' },
  { id: 2, title: 'Career Services', category: 'career', description: 'Get feedback on your résumé, practise interviews and find graduate opportunities.', url: 'https://www.adelaide.edu.au/' },
  { id: 3, title: 'Student Wellbeing', category: 'wellbeing', description: 'Confidential counselling, wellbeing resources and urgent support contacts.', url: 'https://www.adelaide.edu.au/' },
  { id: 4, title: 'Library Discovery', category: 'library', description: 'Search journals, ebooks, databases and course reading lists.', url: 'https://www.adelaide.edu.au/' },
  { id: 5, title: 'IT Service Desk', category: 'technology', description: 'Help with accounts, devices, software and campus connectivity.', url: 'https://www.adelaide.edu.au/' },
  { id: 6, title: 'Scholarships and Grants', category: 'financial', description: 'Explore scholarships, emergency grants and financial wellbeing guidance.', url: 'https://www.adelaide.edu.au/' },
];

export const demoUser = {
  id: 1,
  first_name: 'Maya',
  last_name: 'Chen',
  email: 'maya.chen@students.adelaide.edu.au',
  role: 'student',
  student_id: 'A1904832',
  program_id: 1,
  year_level: 2,
  bio: 'Computer science student interested in responsible AI and accessible product design.',
  avatar_url: '/avatar/user_1_1777869492116.jpg',
  created_at: '2025-02-10T09:00:00Z',
};

export const demoThreads = [
  { id: 41, title: 'Tips for choosing a third-year elective?', content: 'I am deciding between Cloud Computing and Advanced Data Science. What helped you choose?', category: 'academic', first_name: 'Maya', last_name: 'Chen', author_id: 1, role: 'student', created_at: '2026-09-27T08:20:00Z', reply_count: 3, image_url: null },
  { id: 42, title: 'Graduate program application season', content: 'A few alumni are running résumé reviews next Thursday. Share your questions here before the session.', category: 'career', first_name: 'Rhaneela', last_name: 'Punitham', author_id: 21, role: 'alumni', created_at: '2026-09-25T03:45:00Z', reply_count: 5, image_url: null },
  { id: 43, title: 'Study group for Algorithms', content: 'We are meeting in the library on Tuesday afternoons. New members are welcome.', category: 'social', first_name: 'Noah', last_name: 'Williams', author_id: 7, role: 'student', created_at: '2026-09-23T11:10:00Z', reply_count: 2, image_url: null },
];

export const demoReplies = [
  { id: 401, thread_id: 41, content: 'Cloud Computing was very practical and paired well with the capstone project.', first_name: 'Rhaneela', last_name: 'Punitham', user_id: 21, role: 'alumni', created_at: '2026-09-27T09:10:00Z' },
  { id: 402, thread_id: 41, content: 'I chose Data Science because I wanted more machine learning depth. Both are solid options.', first_name: 'Noah', last_name: 'Williams', user_id: 7, role: 'student', created_at: '2026-09-27T10:30:00Z' },
];

export const demoUsers = [
  demoUser,
  { id: 7, first_name: 'Noah', last_name: 'Williams', email: 'noah.williams@students.adelaide.edu.au', role: 'student', student_id: 'A1887210', created_at: '2025-03-02T10:00:00Z' },
  { id: 21, first_name: 'Rhaneela', last_name: 'Punitham', email: 'rhaneela.p@example.com', role: 'alumni', student_id: null, created_at: '2024-08-18T10:00:00Z' },
  { id: 90, first_name: 'Alex', last_name: 'Morgan', email: 'admin@adelaide.edu.au', role: 'admin', student_id: null, created_at: '2024-01-15T10:00:00Z' },
];
