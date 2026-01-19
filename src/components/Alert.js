import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let smaller = word.toLowerCase();
        return smaller.charAt(0).toUpperCase() + smaller.slice(1);
    }
    return (
        <div style={{height:'60px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} :</strong>  {props.alert.msg}
        </div>}
        </div>
    )
}
