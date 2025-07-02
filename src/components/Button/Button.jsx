export function Button(props) {
    console.log(props);
    
    return (
        <div>
            <button 
                disabled = {props.optionDisabled ? props.optionDisabled : false} 
                onClick = {props.onClick}
            >
            {props.content}
            </button>
        </div>

    )
}