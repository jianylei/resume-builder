import Link from "./link"
import Experience from "./experience";

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
        console.log(resume.personalInfo.firstName);
    }

    return (
        <div className="form-container">
            <legend>Peronal Information</legend>
            <input onChange={changeInfoHandler} type="text" name="firstName" placeholder="First Name"></input>
            <input onChange={changeInfoHandler} type="text" name="lastName" placeholder="Last Name"></input>
            <input onChange={changeInfoHandler} type="text" name="title" placeholder="Title"></input>
            <input onChange={changeInfoHandler} type="text" name="phone" placeholder="Phone Number"></input>
            <input onChange={changeInfoHandler} type="email" name="email" placeholder="Email"></input>
            <textarea onChange={changeInfoHandler} name="summary" placeholder="Summary"></textarea>

            <legend>Links</legend>
            <Link  resume={resume}  setResume={setResume} />

            <legend>Experience</legend>
            <Experience resume={resume}  setResume={setResume} />
        </div>
    );
}

export default Form;