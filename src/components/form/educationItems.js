function EducationItems({ id, education, resume, setResume }) {
    function changeEducationHandler(e){
        const { name, value} = e.target;
        setResume(prevState => {
            const newList = resume.education.map((education)=>{
                if(education.id === id){
                    return { ...education, [name]: value }
                }
                return education
            })
            return {...prevState, education:[...newList]};
        })
    }
    
    function removeEducationHandler(e) {
        setResume((prevState) => {
            const newList = resume.education.filter(education => {
                return (education.id !== id);
            })
            return { ...prevState, education:[...newList]};
        });
    }
    return (
        <>
            <input onChange={changeEducationHandler} value={education.instituteName} type="text" name="instituteName" placeholder="Institution Name"></input>
            <input onChange={changeEducationHandler} value={education.city} type="text" name="city" placeholder="City"></input>
            <input onChange={changeEducationHandler} value={education.degree} type="text" name="degree" placeholder="Degree"></input>
            <input onChange={changeEducationHandler} value={education.subject} type="text" name="subject" placeholder="Subject"></input>
            <input onChange={changeEducationHandler} value={education.start} type="text" name="start" placeholder="Start Date"></input>
            <input onChange={changeEducationHandler} value={education.end} type="text" name="end" placeholder="End Date"></input>
            <button onClick={removeEducationHandler}>Delete</button>
        </>
    );
}

export default EducationItems;