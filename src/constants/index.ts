export interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "Jan 2025 - Present",
    role: "Quality Assurance Engineer",
    company: "Sproxil",
    location: "Ikeja, Lagos",
    bullets: [
      "Own end-to-end QA across 8+ Sproxil products, including supply-chain traceability, survey platforms, WhatsApp conversational AI, call centre systems, and mobile field data collection.",
      "Built Playwright + TypeScript end-to-end frameworks from scratch for two products (Page Object Model, custom auth fixtures), including a 43-test suite running in GitHub Actions.",
      "Set up the team's shared QA automation repository: one GitHub Actions workflow for every product, environment-based test runs, and CI secrets scoped to the product that needs them.",
      "Led test execution for the PULSE Survey Builder, designing 200+ test cases covering conditional logic, pagination, checkbox grids, and question type variations, catching critical flow defects before launch.",
      "Found and documented high-impact defects, including a race condition that broke survey creation in about 83% of attempts and a delete action that never reached the server.",
      "Traced intermittent test failures to a concurrency limit in the test environment using trace analysis and controlled re-runs, making the automated suite reliable.",
      "Designed requirement-based test suites from PRDs, including a 270-case API test plan covering authentication, role-based access, validation, and security edge cases.",
      "Wrote the QA automation architecture proposal (repository strategy, CI/CD, test data, and ownership) for the CTO and engineering team.",
      "Built and maintained a Postman collection of 50+ API tests validating authentication, data integrity, and error handling across REST endpoints.",
      "Coordinated 3 manual testers and produced all QA deliverables per release: test plans, test cases, defect reports, regression reports, and QA sign-off.",
    ],
  },
  {
    year: "Mar 2022 - Sep 2024",
    role: "Software Tester",
    company: "Eaglecrest Technologies (a Paylode company)",
    location: "Ikeja, Lagos",
    bullets: [
      "Delivered functional, sanity, stress, performance, and scalability testing for web and mobile applications across SME and enterprise clients.",
      "Designed and executed test plans and test cases for UAT, ensuring software met client acceptance criteria before every handover.",
      "Conducted API validation using Postman to verify endpoint behaviour, response payloads, and error codes across client-facing integrations.",
      "Leveraged Playwright and Cypress for automating critical regression flows, reducing manual test time on key release cycles.",
      "Performed root-cause analysis on defects and collaborated with developers to reproduce, document, and track issues to resolution.",
      "Participated in Agile sprint ceremonies and maintained test cycle pace within sprint timelines without compromising coverage.",
    ],
  },
  {
    year: "Mar 2022 - Oct 2024",
    role: "Frontend Developer (Intern)",
    company: "Paylode Services Limited",
    location: "Lagos",
    bullets: [
      "Maintained frontend components and features for a payment gateway platform used by more than 50 merchants in Nigeria.",
      "Collaborated with senior developers and designers to implement UI/UX designs and ensure seamless integration with backend systems.",
    ],
  },
];

export interface Project {
  title: string;
  company: string;
  year: string;
  bullets: string[];
  technologies: string[];
  /** Optional proof a recruiter can open: a GitHub repo, sample report, or case study. */
  link?: { label: string; url: string };
}

export const PROJECTS: Project[] = [
    {
    title: "Stacks: Playwright E2E Suite",
    company: "Personal project (open source)",
    year: "2026",
    bullets: [
      "Built a 43-test Playwright + TypeScript suite for a library catalogue web app, covering registration, login, dashboard filtering, navigation guards and a full user journey.",
      "Structured with the Page Object Model and a shared-session setup project, so authenticated tests skip the login form while register and login tests run with no session.",
      "Runs in GitHub Actions on every push and weekly, with the HTML test report published to GitHub Pages.",
      "Diagnosed a flaky logout test with Playwright traces and fixed it with a targeted wait instead of a global timeout increase.",
    ],
    technologies: ["Playwright", "TypeScript", "GitHub Actions", "POM"],
    link: { label: "View code and live report", url: "https://github.com/oluwakemie/stacks-playwright-e2e" },
  },
  {
    title: "Routely Shipping Platform",
    company: "Routely",
    year: "2025",
    bullets: [
      "Delivered a full QA test suite for a multi-modal logistics SaaS platform covering Authentication, Shipment Creation, Payment, Tracking, Address System, and RoutelyOne (7 sub-modules).",
      "Authored 100+ test cases including edge cases, negative paths, and security scenarios, with OWASP Mobile Top 10 checks for the mobile app.",
      "Built Playwright automation scripts for end-to-end shipment creation flows across intracity, interstate, and international routes, executed in CI on every deployment.",
      "Executed API endpoint testing across 10 critical endpoints via Postman, achieving p95 response times under 500ms and a 0% error rate under 100 concurrent users.",
      "Produced 6 QA deliverables: functional test cases, bug/defect report, performance report (HTML), usability feedback, regression report, and final QA sign-off.",
    ],
    technologies: ["Playwright", "Postman", "TypeScript", "CI/CD", "OWASP"],
  },
  {
    title: "PULSE Survey Builder",
    company: "Sproxil",
    year: "2025",
    bullets: [
      "Led QA ownership for a large-scale configurable survey platform, testing 7 question types, conditional logic flows, and paginated navigation.",
      "Wrote Playwright scripts to automate conditional logic validation and pagination flows, enabling rapid regression on each sprint release.",
      "Identified and documented critical issues including conditional logic failures, database data-orphaning, and mobile viewport defects, all resolved before production.",
      "Delivered a complete QA suite: 100+ test cases, 5 defect reports, a 93.5% API compliance performance report, usability summary, regression report, and sign-off doc.",
    ],
    technologies: ["Playwright", "Postman", "Regression Testing", "Agile"],
  },
  {
    title: "HRM - Human Resources Portal",
    company: "LASUCOM",
    year: "2024",
    bullets: [
      "Tested an HR platform managing staff leave, appointments, queries, and exit clearance, covering functional, API, and regression testing.",
      "Used Playwright to automate key leave application and approval flows, improving regression cycle speed and consistency.",
    ],
    technologies: ["Playwright", "API Testing", "Regression Testing"],
  },
  {
    title: "Public QA Work Samples",
    company: "Personal portfolio",
    year: "Ongoing",
    bullets: [
      "Cypress end-to-end tests using the Page Object Model for login, payment and transaction flows, with HTML reports and run recordings.",
      "Paystack API test suite in Postman covering transaction initialisation, verification, webhook validation and negative scenarios.",
      "JMeter performance test plan, summary report and HTML dashboard covering response times, throughput, error rates and percentiles.",
      "Manual functional and regression test cases for a logistics web application.",
    ],
    technologies: ["Cypress", "Postman", "JMeter", "Test Design"],
    link: { label: "View on GitHub", url: "https://github.com/oluwakemie/QA_portfolio" },
  },
];

export interface Certification {
  title: string;
  issuer: string;
  status?: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: "The Complete 2024 Software Testing Bootcamp", issuer: "Udemy" },
  { title: "API Crash Course: How to Create, Test & Document APIs", issuer: "Udemy" },
  { title: "Playwright with TypeScript: Zero to Hero", issuer: "Udemy", status: "In Progress" },
  { title: "Web Security Testing Fundamentals", issuer: "Cisco" },
  { title: "Soft Skills Course Certificate", issuer: "Jobberman" },
];

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Ajayi Crowther University, Oyo",
    year: "May 2024 - Present",
  },
  {
    degree: "HND in Computer Science",
    school: "Federal Polytechnic Ilaro, Ogun State",
    year: "Sep 2019 - Dec 2021",
  },
  {
    degree: "ND in Computer Science",
    school: "Federal Polytechnic Ilaro, Ogun State",
    year: "Sep 2016 - Nov 2018",
  },
];

export const CONTACT = {
  location: "Lagos, Nigeria",
  phoneNo: "+234 807 953 4994",
  email: "oluwakemi.dada37@gmail.com",
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/oluwakemiesther/",
  github: "https://github.com/oluwakemie",
};

export const STATS = [
  { value: "4+", label: "Years in QA" },
  { value: "300+", label: "Test Cases Authored" },
  { value: "50+", label: "API Tests Automated" },
  { value: "3", label: "Testers Coordinated" },
];
