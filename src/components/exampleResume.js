import uniqid from "uniqid";
const exampleResume = {
    personalInfo:{
      firstName: "John",
      lastName: "Doe",
      title: "Web Developer",
      phone: "(123) 456-7890",
      email: "johndoe@mail.com",
      summary: "Dedicated web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail. MySQL, Python and Ruby on Rails.",
      link:[{
        id: uniqid(),
        title: "Github",
        url: "github.com/johndoe"
      },{
        id: uniqid(),
        title: "Portfolio",
        url: "johndoe.johndoe"
      }]
    },
    skills:[{
        id: uniqid(),
        skill: "Python (Django, Flask)"
    },{
        id: uniqid(),
        skill: "Javascript (NodeJS, ReactJS, Angular)"
    },{
        id: uniqid(),
        skill: "Database (MySQL, PostgreSQL, SQLite, MongoDB)"
    },{
        id: uniqid(),
        skill: "HTML/CSS"
    },{
        id: uniqid(),
        skill: "Unix, Git"
    }],
    experience:[{
      id: uniqid(),
      company: "Fake Amazon",
      position: "Junior Web Developer",
      city: "Toronto",
      start: "Jan 2019",
      end: "Dec 2021",
      description:[{
        id: uniqid(),
        text: "Did some fake work resulting in a 25% increase in user clicks and subsequently 33% in customer purchases"
        },{
          id: uniqid(),
          text: "Administer the full lifecycle of software developement of 12 fake critikal projects of the company with 100% on-time delivery"
      }]
    }],
    education:[{
      id: uniqid(),
      instituteName: "Fake Harvard",
      city: "Cambridge",
      degree: "B.S.",
      subject: "Computer Science",
      start: "Sep 2014",
      end: "Jun 2018"
    }]
  }

  export default exampleResume;