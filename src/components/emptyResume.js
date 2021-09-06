import uniqid from "uniqid";
const emptyResume = {
    personalInfo:{
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
      summary: "",
      link:[{
        id: uniqid(),
        title: "",
        url: ""
      }]
    },
    skills:[{
        id: uniqid(),
        skill: ""
    }],
    experience:[{
      id: uniqid(),
      company: "",
      position: "",
      city: "",
      start: "",
      end: ""
    }],
    education:[{
      id: uniqid(),
      instituteName: "",
      city: "",
      degree: "",
      subject: "",
      start: "",
      end: ""
    }]
  }

  export default emptyResume;