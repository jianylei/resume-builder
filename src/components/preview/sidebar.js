function SideBar({resume}){
    const linkItems = resume.personalInfo.link.map((link)=>{
        return(
            <div className="preview-link-contaienr">
                <div>{link.title}</div>
                <div>{link.url}</div>
            </div>
        )
    });
    const skillItems = resume.skills.map((skill)=>{
        return(
            <div className="preview-link-contaienr">
                <div>{skill.skill}</div>
            </div>
        )
    });

    return(
        <div className="side-container">
            <div className="personal-info">
                <div>{resume.personalInfo.phone}</div>
                <div>{resume.personalInfo.email}</div>
            </div>
            
            {linkItems}

            <legend>Skill</legend>
            {skillItems}
        </div>
    )
}

export default SideBar;