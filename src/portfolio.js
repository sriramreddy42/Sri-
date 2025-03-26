/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sriram Reddy Bandari",
  title: "Hey hi..., I'm Ram",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with extensive experience in building dynamic web applications using JavaScript, React.js, Node.js, and Spring Boot. Proficient in developing scalable backend services and crafting intuitive user interfaces, I thrive on leveraging modern frameworks and libraries to deliver impactful solutions that enhance user experience and drive business growth."
    ),
  resumeLink:
    "https://drive.google.com/file/d/1Eci0-PkZe1JiMyko333jkS1i3YVE4OAU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sriramreddy42",
  linkedin: "https://www.linkedin.com/in/sriram-b-875a06324/",
  gmail: "sbandari@careerattainment.com",
  facebook: "https://www.facebook.com/ram.mandly",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / MongoDB"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "spring-boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Dayton",
      logo: require("./assets/images/UDLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: " Took courses about Software Engineering, Operating Systems, Azure Cloud Computing ...",
      descBullets: [
        "Completed a course on Safety and Security in Autonomous Systems, gaining hands-on experience in simulating a bouncing ball, autonomous cruise control systems, and exploring security mechanisms in robotic vacuum cleaners, room sensors, and other autonomous technologies.",
        "Completed a course on Web Semantics, gaining hands-on experience in creating a web application that uses semantic web technologies to provide a personalized experience for users.",
      ]
    },
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/LPU.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - April 2021",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Compleeted a course on Data Structures and Algorithms, semantically analyzing the time and space complexity of algorithms and implementing them in Java.",
        "Completed a course on Web Technologies, gaining hands-on experience in creating a web application using HTML, CSS, JavaScript, and Servlets.",]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "PTC",
      companylogo: require("./assets/images/PTC.png"),
      date: "January 2024 - Present",
      desc: "Developed a high-performance front-end with React and Redux, Engineered a robust microservices-based architecture utilizing Java (Spring Boot), J2EE, and Spring Cloud, enabling seamless independent deployments, horizontal scaling, and modular service management across the platform"
    },
    {
      role: "Full Stack Developer",
      company: "Magna Info Tech",
      companylogo: require("./assets/images/MI.jpeg"),
      date: "July 2021 – August 2022",
      desc: "Designed scalable microservices-based RESTful APIs using Java, Spring Boot, and Spring Cloud. Enhanced data persistence performance by 30% through advanced Hibernate and JDBC tuning, caching strategies, and database partitioning; managed MySQL and PostgreSQL databases with effective indexing, partitioning, and replication for high availability.",
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, certifications, award letters, and some cool stuff I have done so far, with more to come.",

  achievementsCards: [
    {
      title: "Micro1: Official Fullstack Developer",
      subtitle:
        "This certification reflects my dedication to building robust and scalable software solutions while continuing to grow and contribute to innovative projects.",
      image: require("./assets/images/Micro1.jpg"),
      imageAlt: "Oracle Autonomous Database Cloud 2019 Certified Specialist",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/10-D11fPzKaLbi04F-VO3wxqY0zCKt-GN/view?usp=sharing"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "***********",
    //   subtitle:
    //     "************",
    //   image: require("./assets/images/Micro1.jpg"),
    //   imageAlt: "Spring Boot Certificate Logo",
    //   footerLink: [
    //     {
    //       name: "******",
    //       url: "*****"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss about a role or just want to say hi? My Inbox is open for all.",
  number: "+1-9372518688",
  email_address: "sbandari@careerattainment.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  // bigProjects,
  achievementSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
