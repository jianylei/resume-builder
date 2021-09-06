function ButtonBar({onPrint, onClear, onExample}){
    return(
        <div className="bar-container">
            <button onClick={onPrint}>Print</button>
            <button onClick={onClear}>Clear</button>
            <button onClick={onExample}>Example</button>
        </div>
    )
}

export default ButtonBar;