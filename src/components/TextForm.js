import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        setText(text.toUpperCase());
    }

    const handleLowerClick = ()=>{
        setText(text.toLowerCase());
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("23");
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text}/>
                </div>
                <button id="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button id="button" className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").length-1)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
