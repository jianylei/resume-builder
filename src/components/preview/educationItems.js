function EducationItem({education}){
    return(
        <div className="education">
            <div style={{fontWeight: "bold", marginBottom:"2px"}}>{education.instituteName}</div>
            <div className="preview-education-wrapper">
                <i>{education.degree} in {education.subject}</i>
            </div>
            <div className="preview-education-wrapper" style={{color:"rgb(83, 83, 83)", fontSize:"13px", marginBottom:"10px"}}>
                <div style={{marginBottom: "5px"}}>{education.start} - {education.end}</div>

                <div>{education.city}</div>
            </div>
        </div>
    )
}

export default EducationItem;