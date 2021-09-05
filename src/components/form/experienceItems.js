function ExperienceItems({ id, resume, setResume }) {
    function removeExperienceHandler(e) {
        setResume((prevState) => {
            const newList = resume.experience.filter(experience => {
                return (experience.id !== id);
            })
            return { ...prevState, experience:[...newList]};
        });
    }
    return (
        <>
            <input type="text" name="company" placeholder="Company"></input>
            <input type="text" name="position" placeholder="Position"></input>
            <input type="text" name="city" placeholder="City"></input>
            <input type="text" name="start" placeholder="Start Date"></input>
            <input type="text" name="end" placeholder="End Date"></input>
            <button onClick={removeExperienceHandler}>Delete</button>
        </>
    );
}

export default ExperienceItems;