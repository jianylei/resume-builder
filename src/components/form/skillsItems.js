function SkillsItems({ id, skill, resume, setResume }) {
    function changeSkillHandler(e) {
        const { name, value } = e.target;
        setResume(prevState => {
            const newList = resume.skills.map((skill) => {
                if (skill.id === id) {
                    return { ...skill, [name]: value }
                }
                return skill
            })
            return { ...prevState, skills: [...newList] };
        })
    }
    function removeSkillHandler(e) {
        setResume((prevState) => {
            const newList = resume.skills.filter(skill => {
                return (skill.id !== id);
            })
            return { ...prevState, skills: [...newList] };
        });
    }
    return (
        <>
            <input onChange={changeSkillHandler} value={skill.skill} type="text" name="skill" placeholder="Add Skill"></input>
            <button onClick={removeSkillHandler}>Delete</button>
        </>
    );
}

export default SkillsItems;