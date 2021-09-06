import uniqid from "uniqid";
import ProjectText from "./projectItemsText";

function ProjectItems({ id, resume, setResume }) {
    function changeProjectHandler(e) {
        const { name, value } = e.target;
        setResume(prevState => {
            const newList = resume.projects.map((projects) => {
                if (projects.id === id) {
                    return { ...projects, [name]: value }
                }
                return projects
            })
            return { ...prevState, projects: [...newList] };
        })
    }
    function removeProjectHandler(e) {
        setResume((prevState) => {
            const newList = resume.projects.filter(projects => {
                return (projects.id !== id);
            })
            return { ...prevState, projects: [...newList] };
        });
    }

    function addDescriptionHandler() {
        setResume((prevState) => {
            const newList = resume.projects.map((projects) => {
                if (id === projects.id) {
                    return {
                        ...projects, description: [...projects.description, {
                            id: uniqid(),
                            text: ""
                        }]
                    }
                }
                return projects;
            })
            return { ...prevState, projects: [...newList] }
        })
    }

    const projectsItemText = resume.projects.map((projects) => {
        if (projects.id === id) {
            return (
                projects.description.map(description => {
                    return (
                        <ProjectText key={description.id} parentId={id} id={description.id} resume={resume} setResume={setResume} />
                    )
                })
            )
        }
        return "";
    })

    return (
        <>
            <input onChange={changeProjectHandler} type="text" name="name" placeholder="Project Name"></input>
            <div className="experience-text-container">
                {projectsItemText}
                <button style={{float: "right"}} onClick={addDescriptionHandler}>Add</button>
            </div>

            <button onClick={removeProjectHandler}>Delete</button>
        </>
    );
}

export default ProjectItems;