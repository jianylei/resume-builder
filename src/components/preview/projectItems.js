function ProjectItem({project}){
    const newList = project.description.map((description)=>{
        return(
            <li key={description.id}>{description.text}</li>
        )
    })
    return(
        <div className="preview-projects">
                <div style={{fontWeight: "bold"}}>{project.name}</div>
            <ul className="preview-experience-text">{newList}</ul>
        </div>
    )
}

export default ProjectItem;