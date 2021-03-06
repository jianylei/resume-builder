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
      end: "",
      description:[{
        id: uniqid(),
        text: ""
      }]
    }],
    projects:[{
      id: uniqid(),
      name: "",
      description:[{
        id: uniqid(),
        text: ""
      }]
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