export function Button(props) {
    console.log(props);
    
    return (
        <div>
            <button
                className={props.className}
                disabled = {props.optionDisabled ? props.optionDisabled : false} 
                onClick = {props.onClick}
            >
            {props.content}
            </button>
        </div>

    )
}