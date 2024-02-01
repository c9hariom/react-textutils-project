import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        setText(text.toUpperCase());
        props.showAlert("Success","Text has been converted into Uppercase")
    }

    const handleLowerClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Success","Text has been converted into Lowercase")
    }

    const handleClearText = ()=>{
        setText("");
        props.showAlert("Success","Text area is now empty")
    }

    const handleCopy = ()=> {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Success","Text has been copied to clipboard")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Success","Extra spaces has been removed")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("23");
    return (
        <>
            <div className='container' style={{color:props.mode === "dark"? "white" : "black"}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea style={{backgroundColor:props.mode === "dark"? "gray" : "white", color:props.mode ==="dark"?"white":"black"}} className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text}/>
                </div>
                <button id="button" className="btn btn-primary mx-1" onClick={handleUpClick}>To Uppercase</button>
                <button id="button" className="btn btn-primary mx-1" onClick={handleLowerClick}>To Lowercase</button>
                <button id="button" className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button id="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button id="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").length)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter text to preview here'}</p>
            </div>
        </>
    );
}
