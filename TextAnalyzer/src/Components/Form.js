import React, {useState} from 'react'

export default function Form(props) {
    const clickUpper=()=>{
        if(text===""){
            props.showAlert("Text Box is empty!","warning");
        }
        else{
            console.log("Uppercase was clicked "+ text);
            let newText= text.toUpperCase();
            setText(newText);
            props.showAlert("Text converted to Uppercase","success");
        }
    }
    const clickLower=()=>{
        if(text===""){
            props.showAlert("Text Box is empty!","warning");
        }
        else{
            console.log("LowerCase was clicked "+text);
            let newText = text.toLowerCase() ;
            setText(newText);
            props.showAlert("Text converted to Lowercase","success");
        } 
    }
    const clickClear=()=>{
        if(text===""){
            props.showAlert("Text Box is already empty!","warning");
        }
        else{   
            console.log("Clear Text was clicked");
            setText("");
            props.showAlert("Text Box Cleared!","success");
        }
    }
    const clickCopy=()=>{
        if(text===""){
            props.showAlert("OOPS! Text Box is Empty!","warning");
        }
        else{
            navigator.clipboard.writeText(text);
            console.log("Text copied to clipboard "+text);
            props.showAlert("Copied to clipboard!","success");
        }
    }
    const handleOnchange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    //React Hooks
    const [text, setText] = useState("");  
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}} >
            <h4>{props.heading}</h4>
            <div className="mb-3">   
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#D3D3D3':'aliceblue'}} id="textArea" rows="10"></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-success mx-2" onClick={clickUpper} > Convert to Uppercase</button>
            <button type="button" className="btn btn-info mx-2"onClick={clickLower}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2"onClick={clickCopy}>Copy Text</button>
            <button type="button" className="btn btn-danger mx-2"onClick={clickClear}>Clear Text</button>
            </div>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h4>Text Summary</h4>
            <p>{text.trim() === "" ? "0 words" : `${text.trim().split(/\s+/).length} words`},{" "}
                {text.length === 0 ? "0 characters" : `${text.replace(/\s/g, "").length} characters`}</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Text Box is empty."}</p>
        </div>
        </>
    )
}

