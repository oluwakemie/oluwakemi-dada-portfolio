export interface Experience {
  year: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "Dec 2024 — Present",
    role: "Quality Assurance Engineer",
    company: "Sproxil",
    location: "Ikeja, Lagos",
    bullets: [
      "Owned end-to-end QA for multiple survey and product verification platforms across functional, regression, and integration testing.",
      "Led test execution for the PULSE Survey Builder — designed 200+ test cases covering conditional logic, pagination, checkbox grids, and question type variations, catching critical flow defects before launch.",
      "Built and maintained a Postman collection of 50+ API tests validating authentication, data integrity, and error handling across REST endpoints.",
      "Initiated a Playwright automation framework for regression coverage — authored scripts using the Page Object Model (POM) pattern for repeatable, maintainable test execution.",
      "Performed backend data validation via developer tools, application logs, and API endpoints to verify response accuracy with zero data corruption.",
      "Produced all QA deliverables per release: test plans, test case documents, defect reports, regression reports, and final QA sign-off.",
      "Coordinated 3 manual testers, improving team test coverage and accelerating release confidence across parallel workstreams.",
    ],
  },
  {
    year: "Mar 2022 — Sep 2024",
    role: "Software Tester",
    company: "Eaglecrest Technologies",
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
];

export interface Project {
  title: string;
  company: string;
  year: string;
  bullets: string[];
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Routely Shipping Platform",
    company: "Routely",
    year: "2025",
    bullets: [
      "Delivered a full QA test suite for a multi-modal logistics SaaS platform covering Authentication, Shipment Creation, Payment, Tracking, Address System, and RoutelyOne (7 sub-modules).",
      "Authored 100+ test cases including edge cases, negative paths, and OWASP Mobile Top 10 security test scenarios for web and mobile.",
      "Built Playwright automation scripts for end-to-end shipment creation flows across intracity, interstate, and international routes — executed in CI on every deployment.",
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
      "Led QA ownership for a large-scale configurable survey platform — tested 7 question types, conditional logic flows, and paginated navigation.",
      "Wrote Playwright scripts to automate conditional logic validation and pagination flows, enabling rapid regression on each sprint release.",
      "Identified and documented critical issues including conditional logic failures, database data-orphaning, and mobile viewport defects — all resolved before production.",
      "Delivered a complete QA suite: 100+ test cases, 5 defect reports, a 93.5% API compliance performance report, usability summary, regression report, and sign-off doc.",
    ],
    technologies: ["Playwright", "Postman", "Regression Testing", "Agile"],
  },
  {
    title: "HRM — Human Resources Portal",
    company: "LASUCOM",
    year: "2024",
    bullets: [
      "Tested an HR platform managing staff leave, appointments, queries, and exit clearance — covering functional, API, and regression testing.",
      "Used Playwright to automate key leave application and approval flows, improving regression cycle speed and consistency.",
    ],
    technologies: ["Playwright", "API Testing", "Regression Testing"],
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
    year: "May 2024 — Present",
  },
  {
    degree: "HND in Computer Science",
    school: "Federal Polytechnic Ilaro, Ogun State",
    year: "Sep 2019 — Nov 2021",
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
