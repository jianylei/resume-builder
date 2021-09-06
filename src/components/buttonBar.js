function ButtonBar({onPrint, onClear, onExample}){
    return(
        <div className="bar-container">
            <button onClick={onPrint}>Print</button>
            <button onClick={onClear}>clear</button>
            <button onClick={onExample}>example</button>
        </div>
    )
}

export default ButtonBar;