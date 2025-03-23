
import { Company, Job } from './types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechNova',
    logo: 'https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3klMjBsb2dvfGVufDB8fDB8fHww',
    description: 'TechNova is a leading technology company specializing in artificial intelligence and machine learning solutions. We build cutting-edge products that help businesses automate processes and gain insights from their data.',
    website: 'https://technova.example.com',
    location: 'San Francisco, CA',
    industry: 'Technology',
    size: '501-1000 employees',
    founded: 2010,
  },
  {
    id: '2',
    name: 'GreenEarth',
    logo: 'https://images.unsplash.com/photo-1564986410613-97e0b371efe9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVuJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'GreenEarth is an environmental technology company focused on developing sustainable solutions for energy production and conservation. Our mission is to accelerate the world\'s transition to renewable energy.',
    website: 'https://greenearth.example.com',
    location: 'Portland, OR',
    industry: 'Clean Energy',
    size: '201-500 employees',
    founded: 2015,
  },
  {
    id: '3',
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'HealthPlus is a healthcare technology company that develops innovative solutions to improve patient care and streamline medical processes. We combine medical expertise with advanced technology to create better health outcomes.',
    website: 'https://healthplus.example.com',
    location: 'Boston, MA',
    industry: 'Healthcare',
    size: '101-200 employees',
    founded: 2018,
  },
  {
    id: '4',
    name: 'FinSmart',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
    description: 'FinSmart is a financial technology company that provides innovative solutions for personal and business finance management. Our platform helps users make smarter financial decisions through AI-powered insights.',
    website: 'https://finsmart.example.com',
    location: 'New York, NY',
    industry: 'FinTech',
    size: '51-100 employees',
    founded: 2019,
  },
  {
    id: '5',
    name: 'CreativeMinds',
    logo: 'https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyZWF0aXZlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'CreativeMinds is a digital design agency that helps brands tell their stories through beautiful and functional design. We specialize in branding, web design, and user experience.',
    website: 'https://creativeminds.example.com',
    location: 'Austin, TX',
    industry: 'Design',
    size: '11-50 employees',
    founded: 2017,
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    companyId: '1',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build beautiful, responsive web applications. You will work closely with designers and backend developers to implement user interfaces that are both functional and visually appealing.',
    requirements: [
      '5+ years of experience in frontend development',
      'Proficiency in React, TypeScript, and modern CSS',
      'Experience with state management libraries (Redux, MobX, etc.)',
      'Strong understanding of web performance optimization',
      'Excellent problem-solving skills and attention to detail',
    ],
    responsibilities: [
      'Develop and maintain frontend components and features',
      'Collaborate with designers to implement UI/UX designs',
      'Optimize applications for maximum speed and scalability',
      'Ensure the technical feasibility of UI/UX designs',
      'Mentor junior developers and participate in code reviews',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development budget',
      'Generous paid time off',
    ],
    postedAt: '2023-05-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Data Scientist',
    companyId: '1',
    location: 'San Francisco, CA',
    locationType: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'We are seeking a talented Data Scientist to help us extract insights from complex datasets. You will work on developing machine learning models and algorithms to solve business problems and improve our products.',
    requirements: [
      'MS or PhD in Computer Science, Statistics, or related field',
      'Strong programming skills in Python and SQL',
      'Experience with machine learning frameworks (TensorFlow, PyTorch, etc.)',
      'Knowledge of statistical analysis and modeling techniques',
      'Excellent communication skills to present findings to non-technical stakeholders',
    ],
    responsibilities: [
      'Develop and implement machine learning models',
      'Analyze large datasets to extract actionable insights',
      'Collaborate with engineering teams to deploy models to production',
      'Monitor and improve model performance',
      'Stay up-to-date with the latest research and technologies in the field',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development budget',
      'Generous paid time off',
    ],
    postedAt: '2023-05-10',
    featured: true,
  },
  {
    id: '3',
    title: 'Renewable Energy Engineer',
    companyId: '2',
    location: 'Portland, OR',
    locationType: 'On-site',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'We are looking for a Renewable Energy Engineer to join our team and help design and implement sustainable energy solutions. You will work on projects related to solar, wind, and other renewable energy sources.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Electrical, Mechanical, or Environmental Engineering',
      'Experience with renewable energy systems (solar, wind, etc.)',
      'Knowledge of energy storage technologies',
      'Familiarity with energy modeling software',
      'Strong analytical and problem-solving skills',
    ],
    responsibilities: [
      'Design and develop renewable energy systems',
      'Conduct feasibility studies and energy assessments',
      'Collaborate with cross-functional teams on project implementation',
      'Monitor and optimize system performance',
      'Stay current with industry trends and regulations',
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Health, dental, and vision insurance',
      'Retirement plan with company match',
      'Professional development opportunities',
      'Paid volunteer time for environmental causes',
    ],
    postedAt: '2023-05-08',
    featured: false,
  },
  {
    id: '4',
    title: 'Healthcare Software Developer',
    companyId: '3',
    location: 'Boston, MA',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'We are seeking a Healthcare Software Developer to help build innovative solutions for healthcare providers and patients. You will work on developing secure, compliant applications that improve healthcare delivery and patient outcomes.',
    requirements: [
      '3+ years of experience in software development',
      'Proficiency in JavaScript/TypeScript and backend technologies',
      'Experience with healthcare data standards (HL7, FHIR, etc.) is a plus',
      'Understanding of HIPAA compliance and healthcare regulations',
      'Strong problem-solving skills and attention to detail',
    ],
    responsibilities: [
      'Develop and maintain healthcare software applications',
      'Implement secure data exchange between healthcare systems',
      'Ensure compliance with healthcare regulations and standards',
      'Collaborate with product managers and healthcare professionals',
      'Participate in code reviews and quality assurance processes',
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development opportunities',
      'Wellness program and gym membership',
    ],
    postedAt: '2023-05-05',
    featured: false,
  },
  {
    id: '5',
    title: 'Financial Analyst',
    companyId: '4',
    location: 'New York, NY',
    locationType: 'On-site',
    type: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'We are looking for a Financial Analyst to join our team and help analyze financial data, prepare reports, and provide insights to support business decisions. You will work closely with the finance team and other departments to optimize financial performance.',
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      'Strong analytical and quantitative skills',
      'Proficiency in Excel and financial modeling',
      'Experience with financial analysis and reporting',
      'Attention to detail and ability to work with complex datasets',
    ],
    responsibilities: [
      'Analyze financial data and prepare reports',
      'Develop financial models and forecasts',
      'Support budgeting and planning processes',
      'Identify trends and provide recommendations',
      'Collaborate with cross-functional teams on financial matters',
    ],
    benefits: [
      'Competitive salary and bonus potential',
      'Comprehensive health benefits',
      '401(k) with company match',
      'Professional development opportunities',
      'Commuter benefits',
    ],
    postedAt: '2023-05-03',
    featured: false,
  },
  {
    id: '6',
    title: 'UX/UI Designer',
    companyId: '5',
    location: 'Austin, TX',
    locationType: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'We are seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients. You will work closely with clients and development teams to design user-centered digital experiences that meet business goals and user needs.',
    requirements: [
      'Portfolio demonstrating strong UI/UX design skills',
      'Experience with design tools (Figma, Sketch, Adobe XD, etc.)',
      'Understanding of user-centered design principles',
      'Knowledge of HTML/CSS is a plus',
      'Excellent communication and collaboration skills',
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with clients to understand their needs and goals',
      'Work with developers to ensure accurate implementation',
      'Stay current with design trends and best practices',
    ],
    benefits: [
      'Competitive salary and profit sharing',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Creative development budget',
      'Collaborative and supportive work environment',
    ],
    postedAt: '2023-05-01',
    featured: true,
  },
  {
    id: '7',
    title: 'Product Manager',
    companyId: '1',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'We are looking for an experienced Product Manager to lead the development of our AI-powered products. You will work closely with engineering, design, and marketing teams to define product strategy and roadmap.',
    requirements: [
      '5+ years of experience in product management',
      'Strong understanding of technology and software development',
      'Experience with AI/ML products is a plus',
      'Excellent analytical and problem-solving skills',
      'Outstanding communication and leadership abilities',
    ],
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product requirements',
      'Work closely with engineering and design teams',
      'Analyze market trends and competitive landscape',
      'Measure and optimize product performance',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible work schedule and remote options',
      'Professional development budget',
      'Generous paid time off',
    ],
    postedAt: '2023-04-28',
    featured: false,
  },
  {
    id: '8',
    title: 'Sustainability Consultant',
    companyId: '2',
    location: 'Portland, OR',
    locationType: 'Hybrid',
    type: 'Full-time',
    salary: '$80,000 - $100,000',
    description: 'We are seeking a Sustainability Consultant to help our clients develop and implement sustainable business practices. You will conduct assessments, provide recommendations, and support the implementation of sustainability initiatives.',
    requirements: [
      'Bachelor\'s or Master\'s degree in Environmental Science, Sustainability, or related field',
      'Knowledge of sustainability frameworks and standards',
      'Experience with environmental impact assessments',
      'Strong analytical and problem-solving skills',
      'Excellent communication and presentation abilities',
    ],
    responsibilities: [
      'Conduct sustainability assessments for clients',
      'Develop sustainability strategies and action plans',
      'Support clients in implementing sustainability initiatives',
      'Monitor and report on sustainability performance',
      'Stay current with sustainability trends and regulations',
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Health, dental, and vision insurance',
      'Retirement plan with company match',
      'Professional development opportunities',
      'Paid volunteer time for environmental causes',
    ],
    postedAt: '2023-04-25',
    featured: false,
  },
];

// Helper function to get a company by ID
export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

// Helper function to get a job by ID
export const getJobById = (id: string): Job | undefined => {
  const job = jobs.find(job => job.id === id);
  if (job) {
    job.company = getCompanyById(job.companyId);
  }
  return job;
};

// Helper function to get jobs by company ID
export const getJobsByCompanyId = (companyId: string): Job[] => {
  return jobs.filter(job => job.companyId === companyId);
};

// Helper function to get a company with its jobs
export const getCompanyWithJobs = (id: string): Company | undefined => {
  const company = getCompanyById(id);
  if (company) {
    company.jobs = getJobsByCompanyId(id);
  }
  return company;
};
