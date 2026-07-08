import { StaticImageData } from "next/image";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "2025 - Present",
    role: "Quality Assurance Engineer",
    company: "SPROXIL",
    description: `Design and execute manual and automated test cases for web applications.
                Perform functional, regression, and integration testing
                Validate UI implementation against product requirements and designs.
                Identify, document, and track defects to resolution.
                Collaborate with developers and product teams to improve release quality.`,
    technologies: ["SDLC", "Agile Methodologies","API Testing", "Postman", "JMeter", "SQL", "Jira", "Git", "Jenkins", "CI/CD", "Owasp ZAP"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer(Internship)",
    company: "Paylode Service Limited",
    description: `I developed and maintained frontend components and features for a payment gateway platform used by more than 20 merchants in Nigeria.
    Collaborated with backend developers and designers to implement UI/UX designs and ensure seamless integration with backend systems.
     Used React.js, HTML5, CSS3, JavaScript, Next Js and React Js to build interactive and performant user interfaces. Contributed to the selection and implementation of frontend frameworks, significantly enhancing project workflow.
     I implemented the best practices to ensure code quality and maintaining it.
    `,
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "React.Js",
      "Next.Js",
      "FIREBASE",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Software Tester",
    company: "Paylode Service Limited",
    description: `I developed and maintained frontend components and features for a payment gateway platform used by more than 20 merchants in Nigeria.
    Collaborated with backend developers and designers to implement UI/UX designs and ensure seamless integration with backend systems.
     Used React.js, HTML5, CSS3, JavaScript, Next Js and React Js to build interactive and performant user interfaces. Contributed to the selection and implementation of frontend frameworks, significantly enhancing project workflow.
     I implemented the best practices to ensure code quality and maintaining it.
    `,
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "React.Js",
      "Next.Js",
      "FIREBASE",
    ],
  },
  {
    year: "2021 - 2024(Contract)",
    role: "Software Tester",
    company: "EAGLECREST",
    description: `Detected and reported software defects and provided detailed bug reports to
    developers
    Analyzed requirements and designed test cases to ensure complete test coverage
    Developed test plans and test cases for user acceptance testing to ensure the
    software met customer requirements.
    `,
    technologies: [ "SDLC", "Agile Methodologies", "API Testing", "Jira", "" ],
  },
];

export interface Project {
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Trabook",
    image: Project1,
    description:
      "Trabook is a travel agency web app offering expert guidance for your travel destinations. Our team of seasoned tourism professionals provides top tips and tailored advice.Discover the best recommendations for every place you wish to explore. Let Trabook make your travel planning seamless and stress-free",
    technologies: ["JavaScript", "Tailwind CSS", "React.Js"],
  },
  {
    title: "Hoobank",
    image: Project2,
    description:
      "Hoobank is an online banking platform for payments that helps users find the best credit cards.It employs a smart methodology to identify cards that match your needs.With Hoobank, choosing the right credit card is simple and tailored to you.Experience personalized banking with Hoobank's innovative approach.",
    technologies: ["JavaScript", "Tailwind CSS", "React.Js"],
  },
  {
    title: "Bilvending",
    image: Project3,
    description:
      "It is designed to make bill payments in a breeze, so you can spend less time worrying about bills and more time enjoying life. In addition, with our secure and reliable payment system, you can rest assured that your transactions are always safe and secure",
    technologies: ["JavaScript", "Tailwind CSS", "React.Js"],
  },
  {
    title: "Uber Clone App",
    image: Project4,
    description:
      "I developed an Uber clone app using React.js and Firebase.The app replicates core Uber features, providing a seamless user experience.React.js powers the front-end, ensuring a dynamic interface.Firebase handles the backend, offering real-time data synchronization and authentication",
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "React.Js",
      "Next.Js",
      "FIREBASE",
    ],
  },
];

export const CONTACT = {
  address: " Ikeja Lagos State, Nigeria. ",
  phoneNo: " +234 81 0435 7439 , +234 80 7953 4994",
  email: "Oluwakemi.dada37@gmail.com",
};
