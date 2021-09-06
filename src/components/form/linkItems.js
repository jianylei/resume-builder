function LinkItem({ id, link, resume, setResume}) {
    function changeLinkHandler(e){
        const { name, value} = e.target;
        setResume(prevState => {
            const newList = resume.personalInfo.link.map((link)=>{
                if(link.id === id){
                    return { ...link, [name]: value }
                }
                return link
            })
            return {...prevState, personalInfo: {...resume.personalInfo, link: [...newList]}};
        })
    }

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
            <input onChange={changeLinkHandler} value={link.title} type="text" name="title" placeholder="Title"></input>
            <input onChange={changeLinkHandler} value={link.url} type="text" name="url" placeholder="Url"></input>
            <button onClick={removeLinkHandler}>Delete</button>
        </div>
    );
}

export default LinkItem;