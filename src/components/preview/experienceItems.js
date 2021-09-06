function ExperienceItem({experience}){
    const newList = experience.description.map((description)=>{
        return(
            <li key={description.id}>{description.text}</li>
        )
    })
    return(
        <div className="experience">
            <div className="experience-flex">
                <div style={{fontWeight: "bold"}}>{experience.company}, {experience.city}</div>
                <div style={{color:"rgb(83, 83, 83)"}}>{experience.start} - {experience.end}</div>
            </div>
            <div><i>{experience.position}</i></div>
            <ul className="experience-text">{newList}</ul>
        </div>
    )
}

export default ExperienceItem;