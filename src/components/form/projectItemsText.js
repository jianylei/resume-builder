function ProjectText({ id, parentId, description, resume, setResume }) {
    function changeProjectTextHandler(e) {
        const { name, value } = e.target;
        setResume((prevState) => {
            const newList = resume.projects.map((project) => {
                if (project.id === parentId) {
                    const textList = project.description.map((description) => {
                        if (description.id === id) {
                            return { ...description, [name]: value }
                        }
                        return description
                    })
                    return { ...project, description: [...textList] }
                }
                return project;
            })
            return { ...prevState, projects: [...newList] }
        });
    }

    function removeProjectTextHandler() {
        setResume((prevState) => {
            const newList = resume.projects.map((project) => {
                if (project.id === parentId) {
                    const textList = project.description.filter((description) => {
                        return (description.id !== id)
                    })
                    return { ...project, description: [...textList] }
                }
                return project;
            })
            return { ...prevState, projects: [...newList] }
        });
    }

    return (
        <div className="experience-text">
            <textarea className="experience-textarea" onChange={changeProjectTextHandler} value={description.text} name="text" placeholder="Description"></textarea>
            <button onClick={removeProjectTextHandler}>Delete</button>
        </div>
    )
}

export default ProjectText;