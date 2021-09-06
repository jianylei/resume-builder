import ExperienceItem from "./experienceItems";
import EducationItem from "./educationItems";

function PreviewMain({resume}){
    const experienceItems = resume.experience.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
    ));
    const educationItems = resume.education.map((education) => (
        <EducationItem key={education.id} education={education} />
    ));

    return(
        <div className="preview-content">
            <legend>Experience</legend>
                {experienceItems}

            <legend>Education</legend>
                {educationItems}
        </div>
    )
}

export default PreviewMain;