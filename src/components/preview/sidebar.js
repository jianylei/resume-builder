import EducationItem from "./educationItems";

function SideBar({resume}){
    const linkItems = resume.personalInfo.link.map((link)=>{
        return(
            <div key={link.id} className="preview-link-container">
                <div>{link.title}</div>
                <div style={{color:"rgb(83, 83, 83)"}}>{link.url}</div>
            </div>
        )
    });
    const skillItems = resume.skills.map((skill)=>{
        return(
            <div key={skill.id} className="preview-skills-container">
                <div style={{marginBottom:"5px", color:"rgb(83, 83, 83)"}}>{skill.skill}</div>
            </div>
        )
    });
    const educationItems = resume.education.map((education) => (
        <EducationItem key={education.id} education={education} />
    ));

    return(
        <div className="side-container">
            <div className="personal-info"><b>
                <div>{resume.personalInfo.phone}</div>
                <div>{resume.personalInfo.email}</div>
            </b></div>

            <legend>Socials</legend>
            {linkItems}

            <legend style={{marginTop:"40px"}}>Skills</legend>
            {skillItems}

            <legend style={{marginTop:"40px"}}>Education</legend>
            {educationItems}
        </div>
    )
}

export default SideBar;