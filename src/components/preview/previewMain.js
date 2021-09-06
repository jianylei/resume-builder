import ExperienceItem from "./experienceItems";
import ProjectItem from "./projectItems";

function PreviewMain({resume}){
    const experienceItems = resume.experience.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
    ));
    const projectItems = resume.projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
    ));

    return(
        <div className="preview-content">
            <div>
                <legend>Experience</legend>
                {experienceItems}
            </div>

            <legend>Projects</legend>
                {projectItems}
        </div>
    )
}

export default PreviewMain;