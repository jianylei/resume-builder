import uniqid from "uniqid";
import SkillsItems from "./skillsItems";


function Skills({ resume, setResume }) {
    function addSkillHandler() {
        setResume(prevState => ({
            ...prevState,
            skills: [...prevState.skills, {
                id: uniqid(),
                skill: ""
            }]
        }))
    }

    const skillsItems = resume.skills.map((skill) => {
        return (
            <SkillsItems key={skill.id} id={skill.id} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            {skillsItems}
            <button onClick={addSkillHandler}>Add</button>
        </ >
    )
}

export default Skills;