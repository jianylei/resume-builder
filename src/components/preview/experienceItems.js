function ExperienceItem({experience}){
    return(
        <div className="experience">
            <div>{experience.start} - {experience.end}</div>
            <div>{experience.position}</div>
            <div className="company-city">{experience.company}, {experience.city}</div>
        </div>
    )
}

export default ExperienceItem;