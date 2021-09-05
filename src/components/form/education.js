import uniqid from "uniqid";
import EducationItems from "./educationItems";


function Education({ resume, setResume }) {
    function addEducationHandler() {
        setResume(prevState => ({
            ...prevState,
            education: [...prevState.education, {
                id: uniqid(),
                instituteName: "",
                city: "",
                degree: "",
                subject: "",
                start: "",
                end: ""
            }]
        }))
    }

    const educationItems = resume.education.map((education) => {
        return (
            <EducationItems key={education.id} id={education.id} education={education} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            {educationItems}
            <button onClick={addEducationHandler}>Add</button>
        </ >
    )
}

export default Education;