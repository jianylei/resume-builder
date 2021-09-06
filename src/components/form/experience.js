import uniqid from "uniqid";
import ExperienceItems from "./experienceItems";


function Experience({ resume, setResume }) {
    function addExperienceHandler() {
        setResume(prevState => ({
            ...prevState,
            experience: [...prevState.experience, {
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
            }]
        }))
    }

    const experienceItems = resume.experience.map((experience) => {
        return (
            <ExperienceItems key={experience.id} id={experience.id} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            {experienceItems}
            <button onClick={addExperienceHandler}>Add</button>
        </ >
    )
}

export default Experience;