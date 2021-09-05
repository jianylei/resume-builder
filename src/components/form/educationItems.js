function EducationItems({ id, resume, setResume, changeHandler }) {
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
            <input type="text" name="institutionName" placeholder="Institution Name"></input>
            <input type="text" name="city" placeholder="City"></input>
            <input type="text" name="degree" placeholder="Degree"></input>
            <input type="text" name="subject" placeholder="Subject"></input>
            <input type="text" name="start" placeholder="Start Date"></input>
            <input type="text" name="end" placeholder="End Date"></input>
            <button onClick={removeEducationHandler}>Delete</button>
        </>
    );
}

export default EducationItems;