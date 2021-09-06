function EducationItem({education}){
    return(
        <div className="education">
            <div>{education.instituteName}</div>
            <div><i>{education.degree} in {education.subject}</i></div>
            <div>{education.start} - {education.end}</div>
            <div>{education.city}</div>
        </div>
    )
}

export default EducationItem;