const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook");

// content to seed with
const articleSeed = [
  {
    title: "Preface",
    content:
      "This handbook was written to archive standardized procedures that are often used in our program to guide your decision-making process. In this handbook you will see an overview of each person's role on our team and how these individual parts work together as a whole to provide high quality, culturally-competent services to program participants and their family members. While this handbook cannot teach you how to do your job, I hope it helps you to learn programmatic procedures and best practices. Throughout your employment at Project FOCUS, you will be consulting and working closely with your supervisors and colleagues to be the best service provider you can be.",
    category: "introduction",
    href: "intro"
  },
  {
    title: "Mission Statement",
    content:
      "Project “For Our Children’s Ultimate Success” (FOCUS) is an Asian and Pacific Islander Behavioral Health Collaborative (APIBHC) consisting of two agencies, Orange County Asian and Pacific Islander Community Alliance (OCAPICA) and Korean Community Services (KCS). As a result, the program has better geographical reach and a broader pool of resources. Project FOCUS was formed in 2007 to serve and empower the API communities of Orange County as well as to provide culturally competent, holistic, and strength-based approaches to promote recovery from mental illness. Over the years, we have worked with different organizations to provide whatever it takes to treat and rehabilitate community members from severe mental illness and emotional disturbance.",
    category: "introduction",
    href: "mission"
  },
  {
    title: "",
    content:
      "The target demographic for FOCUS is Asian and Pacific Islander youth in Orange County from the ages of 0-25 years old. In order to qualify to receive services from our program, the youth must be considered to be seriously emotionally disturbed (SED) or seriously mentally ill (SMI). Although Vietnamese, Korean, and Chinese clients make up the majority of participants, Project FOCUS specializes in providing services to youth and family members in over 25 different languages.",
    category: "introduction",
    href: "mission"
  },
  {
    title: "",
    content:
      "Project FOCUS is a Full Service Partnership/Wraparound (FSP/W) program, meaning we take a client-drive, “whatever it takes” approach to help our clients on their way to recovery and rehabilitation from SED and SMI. FSP services can be delivered in the office, in a home setting, over the phone, and other community locations. These services are available to clients 24/7. Since Project FOCUS also provides wraparound services, family members are welcomed and encouraged to participate in the youth’s treatment through collateral meetings. However, all services provided to a partner’s immediate social support network must be beneficial to the partner’s recovery.",
    category: "introduction",
    href: "mission"
  },
  {
    title: "Services Provided by Project FOCUS",
    content: "Since each client has a unique need due to their circumstances, experiences, and diagnoses, the treatment team at Project FOCUS creates an individualized care plan that outlines treatment goals and objectives. While the services we provide are tailored to each partner’s individual needs, they are generally designed to improve skill deficits through educating, coaching, and mentoring both individuals and family members. The treatment team will work with the clients in hopes of providing each of them with the necessary tools to live, work, learn, and participate within their communities.",
    category: "introduction",
    href:"services"
  },
  {
    title: "",
    content: "Project FOCUS uses a community and client-centered approach to reduce impairments stemming from mental illness and improve functioning in social, educational, and vocational life domains through providing individual & collateral therapy, case management, individual & collaborative rehabilative services, workshops, outings, and events.",
    category: "introduction",
    href: "services"
  },
  {
    tite: "",
    content: "Project FOCUS prides itself on being able to understand and use the nuances in our shared heritage to connect with families and facilitate rehabilitation for the whole family. There are many obstacles to treatment in our particular community such as cultural gaps, generational gaps, and linguistic barriers. Often, we find that participants who were raised here have a very different worldview and values as their family members who are often immigrants. As a result, the way that different generations interpret mental illness is different. It becomes difficult to communicate these differences especially when the majority of our participants speak primarily English and their family members are monolingual immigrants. These disconnects often exacerbate participants’ symptoms and behaviors. Project FOCUS serves to bridge these divides using both cultural and professional competence.",
    category: "introduction",
    href: "services"
  },
  {
    title: "Outcomes",
    content: "In the short and mid term, services and resources are provided to program participants with the goal of reducing the severity of mental illness and decreasing the number of psychiatric hospitalizations and incarcerations while increasing employment and education. In the long term, services and resources are provided to participants with the goal of meeting all treatment goals and reaching a successful discharge for our partners. Participants who graduate from the program will hopefully have improved mental health management skills, knowledge of mental health management, overall functioning, quality of life (for self and family members), as well as have increased self-sufficiency, independence, and integration in their community.",
    category: "introduction",
    href: "outcomes"
  },
  {
    title: "What to Expect",
    content: "In your first week, you should familiarize yourself with your surroundings. Now that you’ve officially been hired, ask for a tour around the office. It’s important to know where you can grab supplies, where to go in cases of emergency, and where you can find your lead and supervisor. You'll be taking a provider training, compliance training, cultural competency training, and harassment prevention training during your first week. These trainings get updated every year, so you will be repeating these trainings annually. You will also be required to obtain a National Provider Identifier (NPI) number and get a Live Scan fingerprint as a requirement for employment.",
    category: "introuduction",
    href: "expectations"
  },
  {
    title: "",
    content: "When you’ve finished all of your trainings, you can take some time to learn more about your role in the Project FOCUS team as well as your own responsibilities. This handbook will give you a good idea of how you fit into the team and how your skills will be helping the recipients of our program. Don't forget to lock your computers whenever you leave your work station to keep confidentiality of Protected Health Information (PHI).",
    category: "introduction",
    href: "expectations"
  },
  {
    title: "",
    content: "Over the next few weeks, you wil want to learn as much as you can from work that others have already done. If you are going to be providing services such as case management or therapy, ask around to see if you can read what others have documented in existing client charts. This will help you to see what documentations are required of you as well as the types of services that others in your position have provided in the past. If you are going to be in an administrative role, ask around to see what reports other staff members are currently working on. This will help you to see the different types and sources of data that is crucial to keep our program running.",
    category: "introduction",
    href: "expectations"
  },
  {
    title: "",
    content: "You will eventually receive a username and password for our electronic health records (EHR) system, but until then, explore the physical charts and reports that exist in the P: drive.",
    category: "introduction",
    href: "expectations"
  },
  {
    title: "",
    content: "It’s so easy to become oversaturated with information, especially when you first start your new job. Be sure to review as often as possible and commit as much as you can to memory. There will be many times that we implement new procedures to keep up with the always-changing requirements from the county and state. If you forget, you will always have this handbook to refer to and other staff members to rely on. Best of luck!",
    category: "introduction",
    href: "expectations"
  },
  {
    title: "",
    content: "",
    category: "",
    href: ""
  },
];

db.Article.remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
