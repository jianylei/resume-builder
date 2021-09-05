import { useState } from "react";
import uniqid from "uniqid"
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer"
import './App.css';

function App() {
  const[resume, setResume] = useState({
    personalInfo:{
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
      summary: "",
      link:[{
        title: "",
        url: ""
      }]
    },
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
  })

  return (
    <div>
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;

