import uniqid from "uniqid";
const exampleResume = {
    personalInfo:{
      firstName: "John",
      lastName: "Doe",
      title: "Web Developer",
      phone: "(123) 456-7890",
      email: "johndoe@mail.com",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin massa pretium sodales dignissim. Curabitur risus massa, commodo eget fringilla suscipit, congue dignissim sem. Phasellus vel libero maximus, porta ipsum at, aliquet lacus. Nulla odio libero, laoreet consectetur luctus vitae, posuere et urna. Donec ultricies erat mi. Morbi pellentesque nibh eleifend euismod sagittis. Duis ut urna sit amet ante vulputate elementum at eget justo. Morbi urna nulla, interdum non massa nec, ornare commodo nibh. Nam sed arcu iaculis, efficitur nisi at, consectetur nibh. Sed a nulla ex. Maecenas egestas elementum turpis eget lobortis. Etiam velit turpis, pellentesque ut lacinia a, rhoncus vel ante. Nunc consequat turpis vitae varius dapibus. Sed laoreet felis libero, ac sollicitudin orci faucibus nec. Phasellus imperdiet lacus ipsum, consectetur sodales odio interdum vitae.",
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
      end: "Dec 2021"
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