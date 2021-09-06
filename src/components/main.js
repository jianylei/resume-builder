import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import uniqid from "uniqid";
import Form from "./form/form";
import Preview from "./preview/preview";
import ButtonBar from "./buttonBar";

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
            id: uniqid(),
            title: "gfd",
            url: "hfghfg"
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

    const componentRef = useRef()
    const handlePrint = useReactToPrint({ 
          content: () => componentRef.current 
    })

    return (
        <>
        <div className="main-container">
            <Form resume={resume} setResume={setResume} />
            <Preview resume={resume} ref={componentRef}/>
        </div>
        <ButtonBar onClick={handlePrint} />
        </>
    );
}

export default Main;