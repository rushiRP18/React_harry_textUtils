import React from 'react'
import { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleClearClick = () => {
        let newText ='';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</div>
                <div className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to LowerCase</div>
                <div className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</div>
                <div className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</div>
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length === 1 ? text.split(" ").length -1 : text.split(" ").length } words ans {text.length} chars</p>
                <p>{text.split(" ").length * 0.008}Minutes required to read </p>

                <h2>Preview</h2>
                <p>{text.length > 1 ? text : "Write Something to preview here...."}</p>
            </div>
        </>
    )
}
