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
    
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/ ).filter((element)=>{return element.length !== 0}).length } words ans {text.length} chars</p>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length * 0.008} Minutes required to read </p>

                <h2>Preview</h2>
                <p>{text.length > 1 ? text : "Nothing to preview!!"}</p>
            </div>
        </>
    )
}
