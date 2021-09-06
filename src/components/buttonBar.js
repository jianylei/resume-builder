function ButtonBar({onClick}){
    return(
        <div className="bar-container">
            <button onClick={onClick}>Print</button>
        </div>
    )
}

export default ButtonBar;