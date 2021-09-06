import uniqid from "uniqid";
import ExperienceText from "./experienceText";

function ExperienceItems({ id, experience, resume, setResume }) {
    function changeExperienceHandler(e) {
        const { name, value } = e.target;
        setResume(prevState => {
            const newList = resume.experience.map((experience) => {
                if (experience.id === id) {
                    return { ...experience, [name]: value }
                }
                return experience
            })
            return { ...prevState, experience: [...newList] };
        })
    }
    function removeExperienceHandler(e) {
        setResume((prevState) => {
            const newList = resume.experience.filter(experience => {
                return (experience.id !== id);
            })
            return { ...prevState, experience: [...newList] };
        });
    }
    function addDescriptionHandler() {
        setResume((prevState) => {
            const newList = resume.experience.map((experience) => {
                if (id === experience.id) {
                    return {
                        ...experience, description: [...experience.description, {
                            id: uniqid(),
                            text: ""
                        }]
                    }
                }
                return experience;
            })
            return { ...prevState, experience: [...newList] }
        })
    }

    const experienceItemText = resume.experience.map((experience) => {
        if (experience.id === id) {
            return (
                experience.description.map(description => {
                    return (
                        <ExperienceText key={description.id} parentId={id} id={description.id} description={description} resume={resume} setResume={setResume} />
                    )
                })
            )
        }
        return "";
    })

    return (
        <>
            <input onChange={changeExperienceHandler} value={experience.company} type="text" name="company" placeholder="Company"></input>
            <input onChange={changeExperienceHandler} value={experience.position} type="text" name="position" placeholder="Position"></input>
            <input onChange={changeExperienceHandler} value={experience.city} type="text" name="city" placeholder="City"></input>
            <input onChange={changeExperienceHandler} value={experience.start} type="text" name="start" placeholder="Start Date"></input>
            <input onChange={changeExperienceHandler} value={experience.end} type="text" name="end" placeholder="End Date"></input>
            <div>
                {experienceItemText}
                <button className="add-btn" onClick={addDescriptionHandler}>Add</button>
            </div>

            <button onClick={removeExperienceHandler}>Delete</button>
        </>
    );
}

export default ExperienceItems;