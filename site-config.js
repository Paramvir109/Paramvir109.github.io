//const path = require('path');

module.exports = {
    name:"Portfolio",
    siteTitle: "Paramvir Singh", // Site title.
    siteLogo: `${__dirname}/src/static/images/icon-512x512.png`,
    siteUrl: "https://paramvir109.github.io/", // Domain of your website without pathPrefix.
    siteKeyword:"paramvir singh, reactjs developer, nodejs developer, graphql, jquery, lodash, typescript, software engineer, web developer, front-end developer, responsive web design",
    siteDescription: "I'm Paramvir Singh, Full stack developer, I'm a student of Delhi Technological University pursuing Computer Engineering", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "UA-141825301-1", // GA tracking ID.
    userName: "Paramvir Singh", // Username to display in the author segment.
    userTwitter: "_Paramvir_Singh", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "New Delhi, India", // User location to display in the author segment.
    userAvatar: "../static/images/param.jpg", // User avatar to display in the author segment.
    favicon32:`../static/images/param32.jpg`,
    favicon16:`../static/images/param16.jpg`,
    ogImage: `../static/images/param250.jpg`,
    userDescription: "I'm Paramvir Singh, Full stack developer, I'm a student of Delhi Technological University pursuing Computer Engineering",
    userPhone:"+91-8285553420",
    userEmail:"paramvir109@gmail.com",
    skills:[
        {
            name:"Javascript",
            rating: "8"
        },
        {
            name:"HTML",
            rating: "8"
        },
        {
            name:"ReactJs",
            rating: "6"
        },
        {
            name:"GraphQL",
            rating: "5"
        },
        {
            name:"NodeJs",
            rating: "8"
        },
        {
            name : "MongoDB",
            rating : "8"
        }
    ],
    langauges:[
        {
            name:"Punjabi",
            rating: 6
        },
        {
            name: "Hindi",
            rating: 10
        },
        {
            name: "English",
            rating: 8
        }
    ],
    experience:[
        {
            position:"Software Enginer",
            company: "Company Pvt. Ltd.",
            current:true,
            startDate: "March 2017",
            endDate: "current",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer ",
            company: "Company 2 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 3 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 4 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    education:[
        {
            college:"Some College of Engineering 1",
            degree:"Computer Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: true,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 2",
            degree:"Computer Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 3",
            degree:"Computer Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 4",
            degree:"Computer Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 5",
            degree:"Computer Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/Paramvir109",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/_Paramvir_Singh",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:paramvir109@gmail.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/paramvir109/",
        iconClassName: "fa fa-linkedin"
      }
    ],
    copyright: "Copyright © 2018. @mahipat", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };