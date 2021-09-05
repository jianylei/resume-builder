function Preview({resume}) {
    
            const list = resume.personalInfo.link.map((links)=>{
                return(<>{links.url}</>)
            })
        
    
    return (
        
        <div className="preview-container">
            {resume.personalInfo.firstName}
            {resume.personalInfo.lastName}
            {resume.personalInfo.title}
            {resume.personalInfo.phone}
            {resume.personalInfo.email}
            {resume.personalInfo.summary}
            {list}
        </div>
    );
}

export default Preview;