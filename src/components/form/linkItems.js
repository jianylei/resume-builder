function LinkItems({link, id, resume, setResume}) {
    function removeLinkHandler(e){
        setResume((prevState) => {
            const newList = resume.personalInfo.link.filter(link => {
                return (link.id !== id);
            })
            return {...prevState, personalInfo: {...resume.personalInfo, link: [...newList]}};
        });
    }
    return (
        <div className="link-item-container">
            <input type="text" name="linkTitle" placeholder="Title"></input>
            <input type="text" name="linkInput" placeholder="Url"></input>
            <button onClick={removeLinkHandler}>Delete</button>
        </div>
    );
}

export default LinkItems;