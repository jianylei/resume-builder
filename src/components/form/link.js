import LinkItem from "./linkItems";

function Link({resume}) {
    return (
        <div className="link-container">
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Url"></input>
            
        </div>
    );
}

export default Link;