import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");
    const handleUpClick = () => {
        //console.log("upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleloClick=() => {
      let  newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase","success");
    }
    const handleOnChange = (event ) => {
        //console.log("on change");
        setText(event.target.value);
    }
    const handleclearclick = () => {
      let newText='';
      setText(newText)
      props.showAlert("cleared the textarea","success");
    }
    const handlecopy=() => {
    
      navigator.clipboard.writeText(text);
      props.showAlert("copied to clipboard","success");
    }
    
  return (<>
    <div className="container" style={{color:props.mode==='dark'?'white':'#104675'}}>
       <h1 className="mb-4">{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'rgb(81 163 233)':'white',
          color:props.mode==='dark'?'white':'#104675'}} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
       </div>
      <div className="mb-3">
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
      </div>
      
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#104675'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length }words and {text.length} characters</p>
      <p>{0.008*text.split("/\s+/ ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"nothing to preview"}</p>
      </div>
    </>
  )
}
