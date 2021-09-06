import uniqid from "uniqid";
import ProjectItems from "./projectItems";

function Project({ resume, setResume }) {
    function addProjectHandler() {
        setResume(prevState => ({
            ...prevState,
            projects: [...prevState.projects, {
                id: uniqid(),
                description:[{
                    id: uniqid(),
                    text: ""
                }]
            }]
        }))
    }

    const projectItems = resume.projects.map((project) => {
        return (
            <ProjectItems key={project.id} id={project.id} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            {projectItems}
            <button onClick={addProjectHandler}>Add</button>
        </ >
    )
}

export default Project;