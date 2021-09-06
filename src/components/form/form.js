import Link from "./link"
import Experience from "./experience";
import Education from "./education"
import Skills from "./skills"
import Project from "./projects";

function Form({resume, setResume}) {
    function changeInfoHandler(e){
        const { name, value} = e.target;
        setResume(prevState => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value
            }
        }))
        console.log(resume);
    }

    return (
        <div className="form-container">
            <legend>Peronal Information</legend>
            <input onChange={changeInfoHandler} value={resume.personalInfo.firstName} type="text" name="firstName" placeholder="First Name"></input>
            <input onChange={changeInfoHandler} value={resume.personalInfo.lastName} type="text" name="lastName" placeholder="Last Name"></input>
            <input onChange={changeInfoHandler} value={resume.personalInfo.title} type="text" name="title" placeholder="Title"></input>
            <input onChange={changeInfoHandler} value={resume.personalInfo.phone} type="text" name="phone" placeholder="Phone Number"></input>
            <input onChange={changeInfoHandler} value={resume.personalInfo.email} type="email" name="email" placeholder="Email"></input>
            <textarea onChange={changeInfoHandler} value={resume.personalInfo.summary} name="summary" placeholder="Summary"></textarea>

            <legend>Links</legend>
            <Link  resume={resume}  setResume={setResume}/>

            <legend>Experience</legend>
            <Experience resume={resume}  setResume={setResume} />

            <legend>Projects</legend>
            <Project resume={resume}  setResume={setResume} />

            <legend>Education</legend>
            <Education resume={resume}  setResume={setResume} />

            <legend>Skills</legend>
            <Skills  resume={resume}  setResume={setResume}/>
        </div>
    );
}

export default Form;