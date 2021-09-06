function ExperienceItems({ id, resume, setResume }) {
    function changeHandler(e){
        const { name, value} = e.target;
        setResume(prevState => {
            const newList = resume.experience.map((experience)=>{
                if(experience.id === id){
                    return { ...experience, [name]: value }
                }
                return experience
            })
            return {...prevState, experience: [...newList]};
        })
    }
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
            <input onChange={changeHandler} type="text" name="company" placeholder="Company"></input>
            <input onChange={changeHandler} type="text" name="position" placeholder="Position"></input>
            <input onChange={changeHandler} type="text" name="city" placeholder="City"></input>
            <input onChange={changeHandler} type="text" name="start" placeholder="Start Date"></input>
            <input onChange={changeHandler} type="text" name="end" placeholder="End Date"></input>
            <button onClick={removeExperienceHandler}>Delete</button>
        </>
    );
}

export default ExperienceItems;