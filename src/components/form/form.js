import Link from "./link"
function Form({resume}) {
    return (
        <div className="form-container">
            <legend>Peronal Information</legend>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Phone Number"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Summary"></textarea>

            <legend>Links</legend>
            <Link  resume={resume}/>
        </div>
    );
}

export default Form;