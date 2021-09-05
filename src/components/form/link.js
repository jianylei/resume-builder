import LinkItem from "./linkItems";

function Link({resume}) {
    return (
        <div className="link-container">
            <input type="text" name="linkTitle" placeholder="Title"></input>
            <input type="text" name="linkInput" placeholder="Url"></input>
            
        </div>
    );
}

export default Link;