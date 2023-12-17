import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"

export const MenuItems = {
  home: {
    title: "Home",
    path: "#",
    children: [
      {
        title: "Mission & Vision",
        path: "/about/mission",
        cName: "dropdown-link",
      },
      {
        title: "PEOs, POs & PSOs",
        path: "/about/details",
        cName: "dropdown-link",
      },
    ],
  },
  academics: {
    title: "Academics",
    path: "#",
    children: [
      {
        title: "BTech (CSE) Program",
        path: "https://www.iiitd.ac.in/academics/btech/cse",
        cName: "dropdown-link",
      },
      {
        title: "BTech (CSAI) Program",
        path: "https://www.iiitd.ac.in/academics/btech/csai",
        cName: "dropdown-link",
      },
      {
        title: "MTech Program",
        path: "https://www.iiitd.ac.in/academics/mtech/cse",
        cName: "dropdown-link",
      },
      {
        title: "PhD Program",
        path: "https://www.iiitd.ac.in/academics/phd",
        cName: "dropdown-link",
      },
      {
        title: "Course Catalog",
        path: "/academics/course-catalog",
        cName: "dropdown-link",
      },
      {
        title: "Guidelines",
        path: "https://www.iiitd.ac.in/academics/resources",
        cName: "dropdown-link",
      },
      {
        title: "Approved Online Courses",
        path: "/approved_online_courses",
        cName: "dropdown-link",
      },
    ],
  },
  research: {
    title: "Research",
    path: "#",
    children: [
      {
        title: "Labs",
        path: "/research/labs",
        cName: "dropdown-link",
      },
      {
        title: "Themes",
        path: "/research/themes",
        cName: "dropdown-link",
      },
      {
        title: "Publications",
        path: "/research/pubs2",
        cName: "dropdown-link",
      },
      {
        title: "Projects",
        path: "/research/projects",
        cName: "dropdown-link",
      },
      // {
      //   title: "Patents",
      //   path: "/research/patents",
      //   cName: "dropdown-link",
      // },
    ],
  },
  people: {
    title: "People",
    path: "#",
    children: [
      {
        title: "Faculty",
        path: "/people/faculty",
        cName: "dropdown-link",
      },
      {
        title: "Teaching Fellows",
        path: "/people/tf",
        cName: "dropdown-link",
      },
      {
        title: "Staff",
        path: "/people/staff",
        cName: "dropdown-link",
      },
      {
        title: "B.Tech. Students",
        path: "/people/btech2",
        cName: "dropdown-link",
      },
      {
        title: "M.Tech. Students",
        path: "/people/mtech",
        cName: "dropdown-link",
      },
      {
        title: "Ph.D. Students",
        path: "/people/phd",
        cName: "dropdown-link",
      },
      //        {
      //          title: "Alumni",
      //          path: "/people/alumni",
      //          cName: "dropdown-link",
      //        },
    ],
  },
  newsEvents: {
    title: "News & Events",
    path: "#",
    children: [
      {
        title: "Placements",
        path: "/placements",
        cName: "dropdown-link",
      },
      {
        title: "Media Coverage",
        path: "/news-and-events/media-coverage",
        cName: "dropdown-link",
      },
      {
        title: "Events",
        path: "/news-and-events/events",
        cName: "dropdown-link",
      },
      // {
      //   title: "Calendar",
      //   path: "/news-and-events/calendar",
      //   cName: "dropdown-link",
      // },
    ],
  },
  admissions: {
    title: "Admissions",
    path: "#",
    children: [
      {
        title: "B.Tech. Admissions",
        path: "https://www.iiitd.ac.in/admission/btech/2021",
        cName: "dropdown-link",
      },
      {
        title: "M.Tech. Admissions",
        path: "https://www.iiitd.ac.in/admission/mtech/2021",
        cName: "dropdown-link",
      },
      {
        title: "Ph.D. Admissions",
        path: "https://www.iiitd.ac.in/admission/phd",
        cName: "dropdown-link",
      },
    ],
  },
}

export const Socials = [
  {
    name: "twitter",
    href: "https://twitter.com/cseiiitd/",
    icon: FaTwitter,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/cseiiitd/",
    icon: FaInstagram,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/cseiiitd/",
    icon: FaLinkedin,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/cseiiitd/",
    icon: FaFacebook,
  },
]
