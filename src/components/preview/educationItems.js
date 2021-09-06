function EducationItem({education}){
    return(
        <div className="education">
            <div className="education-flex">
                <div style={{fontWeight: "bold"}}>{education.instituteName}, {education.city}</div>
                <div style={{color:"rgb(83, 83, 83)"}}>{education.start} - {education.end}</div>
            </div>
            
            <div><i>{education.degree} in {education.subject}</i></div>
            <div></div>
        </div>
    )
}

export default EducationItem;