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
  username: "Vijay Arun",
  title: "Hi all, I'm Vijay Arun",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring Boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://1drv.ms/b/c/6b767768d96ca0b7/IQT4uV6NDXxhSKSW0wOa_5ZuAVsMEqQXf-gvTmwOEeNJtXM", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ArunDoddi",
  linkedin: "https://www.linkedin.com/in/vijay-arun-doddi-08087277/",
  gmail: "vadoddi1994@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/arun.doddi.7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
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
      desc: "Worked as HRL for 2 years. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Completed a course on Safety and Security in Autonomous Systems, gaining hands-on experience in simulating a bouncing ball, autonomous cruise control systems, and exploring security mechanisms in robotic vacuum cleaners, room sensors, and other autonomous technologies.",
        "Completed a course on Web Semantics, gaining hands-on experience in creating a web application that uses semantic web technologies to provide a personalized experience for users.",
      ]
    },
    {
      schoolName: "Gayatri Vidya Parishad College of Engineering",
      logo: require("./assets/images/GVPLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2012 - April 2016",
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
      progressPercentage: "60%" //Insert relative proficiency in percentage
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
      role: "Software Consultant",
      company: "Enrich Technology",
      companylogo: require("./assets/images/enrich_logo.png"),
      date: "August 2024 - Present",
      desc: "Designed and developed scalable web applications using **Spring Boot** for backend services, **React & Vue** for dynamic front-end experiences, and **MongoDB** for efficient data storage, ensuring seamless integration, high performance, and maintainability."
    },
    {
      role: "Senior Software Engineer",
      company: "Altran Technologies",
      companylogo: require("./assets/images/altran_logo.jpg"),
      date: "July 2021 – August 2022",
      desc: "Worked on a project for a cisco client. Developed a web application using ReactJS, Redux, and Spring Boot. Developed a REST API using SprinBoot. Developed a web application using ReactJS, Redux, and NodeJS.",
      // descBullets: [
      //   "",
      //   ""
      // ]
    },
    {
      role: "Application Developer",
      company: "Onmobile Global Limited",
      companylogo: require("./assets/images/OnmoLogo.jpg"),
      date: "August 2016 – June 2021",
      desc: "Engineered seamless API integrations, optimized data retrieval with JPQL, enhanced UI efficiency, streamlined request workflows in ONMOX, and bolstered deployment reliability by troubleshooting failed nodes."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, certifications, award letters, and some cool stuff I have done so far, with more to come.",

  achievementsCards: [
    {
      title: "Oracle Autonomous Database Cloud 2019 Certified Specialist",
      subtitle:
        "Knowledge on the features and workflows of Autonomous Database; provisioning and connecting, migration using SQL Developer, Data Pump and Golden Gate, manage and monitor, and understands tools, reporting and analytics using Autonomous Data Warehouse.",
      image: require("./assets/images/orc_cld_specialist.png"),
      imageAlt: "Oracle Autonomous Database Cloud 2019 Certified Specialist",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/2ef07c14-57e4-448c-ad1f-4ce69d2c9fa8/linked_in_profile"
        },
        {
          name: "Award Letter",
          url: "https://www.credly.com/badges/2ef07c14-57e4-448c-ad1f-4ce69d2c9fa8/linked_in_profile"
        }
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Spring and Hibernate",
      subtitle:
        "Gained immense knowledge on Spring and Hibernate frameworks, and developed web applications using Spring Boot, Spring MVC, Spring Security, and Hibernate.",
      image: require("./assets/images/spring_cert.png"),
      imageAlt: "Spring Boot Certificate Logo",
      footerLink: [
        {
          name: "Spring Boot Certification",
          url: "https://www.linkedin.com/in/vijay-arun-doddi-08087277/overlay/1728883278149/single-media-viewer?type=IMAGE&profileId=ACoAABBS1OAB8h9-PNXZO1VhiQOAuQ_NDRvj82c&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnWRnGy9ASsKFkTkE3HiiyQ%3D%3D"
        }
      ]
    }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

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
  number: "+1-9373511097",
  email_address: "vadoddi1994@gmail.com"
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
