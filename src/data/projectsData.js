import uthanCover from "../assets/uthanproject.jpg";
import namasteCover from "../assets/namaste-project.png";
import childCover from "../assets/chaild-project.jpg";

import uthan1 from "../assets/center-image.jpeg";
import uthan2 from "../assets/center-image2.jpeg";
import uthan3 from "../assets/center-image-4.jpeg";
import uthan4 from "../assets/center-image-6.jpeg";

import namaste1 from "../assets/center-image5.jpeg";
import namaste2 from "../assets/sceem-image.jpeg";
import namaste3 from "../assets/sceem-image2.jpeg";
import namaste4 from "../assets/suden.jpg";

import child1 from "../assets/studentA.png";
import child2 from "../assets/avtar.png";
import child3 from "../assets/avtar3.webp";
import child4 from "../assets/avtar6.webp";

const projectsData = [
  {
    id: 1,
    title: "Uttan Project",
    tag: "Community Development",
    tagColor: "green",
    image: uthanCover,
    gallery: [uthan1, uthan2, uthan3, uthan4],
    points: [
      "Worked on community development and social awareness activities",
      "Conducted field visits to identify local issues and connect with beneficiaries",
      "Supported awareness programs related to education, health, and livelihood improvement",
      "Coordinated with community members to ensure smooth project execution",
      "Collected field data and prepared reports for project monitoring and evaluation",
    ],
  },
  {
    id: 2,
    title: "Namaste Bharat Project",
    tag: "Social Outreach",
    tagColor: "orange",
    image: namasteCover,
    gallery: [namaste1, namaste2, namaste3, namaste4],
    points: [
      "Participated in social outreach and community engagement initiatives",
      "Assisted in organizing awareness camps and beneficiary registration activities",
      "Helped people access government schemes and social welfare benefits",
      "Maintained communication with local communities and stakeholders",
      "Ensured proper documentation and reporting of field activities",
    ],
  },
  {
    id: 3,
    title: "Child Marriage Awareness & Prevention",
    tag: "Child Rights",
    tagColor: "purple",
    image: childCover,
    gallery: [child1, child2, child3, child4],
    points: [
      "Spread awareness about prevention of child marriage in rural and local communities",
      "Conducted awareness sessions with families, youth, and community groups",
      "Supported campaigns focused on child rights, education, and women empowerment",
      "Coordinated with local authorities and community leaders for awareness drives",
      "Helped identify vulnerable cases and promoted legal awareness regarding child marriage laws",
    ],
  },
];

export default projectsData;

