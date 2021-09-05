import { useState } from "react";
import uniqid from "uniqid"
import Form from "./form/form"
import Preview from "./preview/preview"

function Main() {
    const[resume, setResume] = useState({
        personalInfo:{
          firstName: "John",
          lastName: "",
          title: "",
          phone: "",
          email: "",
          summary: "",
          link:[{
            title: "gfd",
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
        <div className="main-container">
            <Form resume={resume} setResume={setResume} />
            <Preview resume={resume} />
        </div>
    );
}

export default Main;