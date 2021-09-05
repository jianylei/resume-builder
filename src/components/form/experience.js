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
                end: ""
            }]
        }))
    }

    const linkItems = resume.experience.map((experience) => {
        return (
            <ExperienceItems key={experience.id} id={experience.id} experience={experience} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            {linkItems}
            <button onClick={addExperienceHandler}>Add</button>
        </ >
    )
}

export default Experience;