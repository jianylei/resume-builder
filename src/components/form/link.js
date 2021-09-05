import uniqid from "uniqid";
import LinkItem from "./linkItems";

function Link({ resume, setResume }) {
    function addLinkHandler() {
        setResume(prevState => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                link: [...prevState.personalInfo.link, {
                    id: uniqid(),
                    title: "",
                    url: ""
                }]
            }
        }))
    }

    const linkItems = resume.personalInfo.link.map((links) => {
        return (
            <LinkItem key={links.id} id={links.id} resume={resume} setResume={setResume} />
        )
    })

    return (
        <>
            <div className="link-container">
                {linkItems}
            </div>
            <button onClick={addLinkHandler}>Add</button>
        </>
    );
}

export default Link;