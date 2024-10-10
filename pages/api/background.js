const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "BSc. in Computer Science & Engineering",
        institute: "Bangladesh University of Business & Technology",
        detail:
          "Bachelor's Degree in Computer Science & Engineering from Bangladesh University of Business & Technology.",
        year: "2016-2020",
      },
      {
        id: 1,
        title: "Higher Secondary Certificate - Science",
        institute: "Alamdanga Govt. Degree College",
        detail: "Completed HSC from Alamdanga Govt. Degree College.",
        year: "2015",
      },
      {
        id: 2,
        title: "Secondary School Certificate - Science",
        institute: "Alamdanga Govt. High School",
        detail:
          "Completed SSC in Science subjects from Alamdanga Govt. High School",
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
        url: "https://bd.adventurekk.com/",
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
        desc: "I work there as a SMMS, there I learned how to manage business with great KPI",
        year: "Nov 2020 - Jun 2022 (Full-Time, On-site)",
        location: "Mirpur, Dhaka, Bangladesh",
      },
      {
        id: 3,
        businessName: "Digitarly",
        role: "Social Media Marketing Executive",
        url: "https://www.digitarly.com/",
        desc: "I work there as a SMME, there I learned how the digital marketing system works",
        year: "Nov 2019 - Oct 2020 (Part-Time, Hybrid)",
        location: "Mirpur, Dhaka, Bangladesh",
      },
    ],
  },
  {
    certifications: [
      {
        id: 1,
        title: "Marketing on Instagram",
        platform: "Linkedin Learning ",
        credentialId: "AW37Pn6kC41rN17HXN_wukr8UXzw",
        year: "Jun 2021",
      },
      {
        id: 2,
        title: "Social Media Marketing Foundations",
        platform: "Linkedin Learning ",
        credentialId: "AZLEABIGBBQXaR18aPcnL9ivKuLy",
        year: "Jun 2021",
      },
      {
        id: 3,
        title: "Digital Marketing Foundations",
        platform: "Linkedin Learning ",
        credentialId: "Aa-ybE4tGzxFGrUQy60vBh5Wq1HS",
        year: "May 2021",
      },
      {
        id: 4,
        title: "Google Ads Display",
        platform: "Google Digital Academy",
        credentialId: "60476132",
        year: "Oct 2020",
      },
      {
        id: 5,
        title: "Fundamental of Digital Marketing",
        platform: "Google Ads",
        credentialId: "C79 ZKZ 4KY",
        year: "Nov 2019",
      },
      {
        id: 6,
        title: "Java Tutorial Course",
        platform: "Sololearn",
        credentialId: "1068-8237668",
        year: "May 2018",
      },
      {
        id: 7,
        title: "Marketing on Facebook",
        platform: "LinkedIn Learning ",
        credentialId: "AfjblnMvtlMeWDxHFs6evvfskFea",
        year: "April 2018",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
