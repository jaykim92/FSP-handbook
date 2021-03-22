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
    tag: "intro test program description",
    category: "introduction",
    href: "mission"
  }
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
