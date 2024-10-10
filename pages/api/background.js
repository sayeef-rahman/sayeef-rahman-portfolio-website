const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "BSc. in Computer Science & Engineering",
        institute: "Bangladesh University of Business & Technology",
        detail:
          "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
        year: "2016-2020",
      },
      {
        id: 1,
        title: "Higher Secondary Certificate - Science",
        institute: "Alamdanga Govt. Degree College",
        detail:
          "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
        year: "2015",
      },
      {
        id: 2,
        title: "Secondary School Certificate - Science",
        institute: "Alamdanga Govt. High School",
        detail:
          "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
        year: "2013",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        businessName: "Adventure Dhaka Limited",
        role: "Software Engineer",
        url: "https://jmm.ltd/",
        desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "Dec 2023 - Present  (Full-time, On-site)",
        location: "Dhaka, Bangladesh",
      },
      {
        id: 2,
        businessName: "Parallax Logic Infotech",
        role: "Junior Software Engineer",
        url: "https://parallaxlogic.com/",
        desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
        year: "Jul 2022 - Nov 2023 (Full-Time, On-site)",
        location: "Gulshan, Dhaka, Bangladesh",
      },
      {
        id: 3,
        businessName: "Digitarly",
        role: "Social Media Marketing Specialist",
        url: "https://www.digitarly.com/",
        desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
        year: "Nov 2020 - Jun 2022 (Full-Time, On-site)",
        location: "Mirpur, Dhaka, Bangladesh",
      },
      {
        id: 3,
        businessName: "Digitarly",
        role: "Social Media Marketing Executive",
        url: "https://www.digitarly.com/",
        desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
        year: "Nov 2019 - Oct 2020 (Part-Time, Hybrid)",
        location: "Mirpur, Dhaka, Bangladesh",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
