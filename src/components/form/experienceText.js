function ExperienceText({id, parentId, resume, setResume}){
    function changeExperienceTextHandler(e) {
        const { name, value } = e.target;
        setResume((prevState) => {
            const newList = resume.experience.map((experience)=>{
                if(experience.id === parentId) {
                    const textList = experience.description.map((description)=>{
                        if(description.id === id){
                            return{...description, [name]:value}
                        }
                        return description
                    })
                    return{...experience, description:[...textList]}
                }
                return experience;
            })
            return{...prevState, experience:[...newList]}
        });
    }

    function removeExperienceTextHandler() {
        setResume((prevState) => {
            const newList = resume.experience.map((experience)=>{
                if(experience.id === parentId) {
                    const textList = experience.description.filter((description)=>{
                        return (description.id !== id)
                    })
                    return{...experience, description:[...textList]}
                }
                return experience;
            })
            return{...prevState, experience:[...newList]}
        });
    }

    return(
        <div className="experience-text">
            <textarea onChange={changeExperienceTextHandler} name="text" placeholder="Description"></textarea>
            <button onClick={removeExperienceTextHandler}>Delete</button>
        </div>
    )
}

export default ExperienceText;