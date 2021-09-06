function ExperienceText({id, parentId, description, resume, setResume}){
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
            <textarea className="experience-textarea" value={description.text} onChange={changeExperienceTextHandler} name="text" placeholder="Description"></textarea>
            <button className="description-delete-btn" onClick={removeExperienceTextHandler}>Delete</button>
        </div>
    )
}

export default ExperienceText;