import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';

import Form from "./form/form";
import Preview from "./preview/preview";
import ButtonBar from "./buttonBar";
import emptyResume from "./emptyResume"
import exampleResume from "./exampleResume";

function Main() {
    const[resume, setResume] = useState(emptyResume)

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