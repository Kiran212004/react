import React, { useState } from 'react'

export default function About(props) {
    //const [mystyle,setstyle]=useState({
    //     color:"black",
    //    backgroundColor:"white"
   // })
    let mystyle={
        color:props.mode==='dark'?'white':'#104675',
        backgroundColor:props.mode==='dark'?'rgb(81 163 233)':'white',
        
    }   


        
        
  return (
<div className="container" style={{color:props.mode==='dark'?'white':'#104675   '}}>
    <h1 className="my-3">About Us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample">
         <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <strong>analyse your text</strong>
             </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body"  style={mystyle}>
                textutils gives you a way to analyze your text quickly and efficiently.be it word count,character count or anything
            </div>
        </div>
    </div>
    <div className="accordion-item"  style={mystyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <strong>free to use</strong>
        </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
        <div className="accordion-body"  style={mystyle}>
           textutils is a free character encounter tool that provides instant character count and word 
           count statistics for a given text.textutils report the number of words and characters.
           that it is suitable for writing text with word/character limit
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <strong>browser compatible</strong>
        </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
        <div className="accordion-body"  style={mystyle}>
           this word counter software works in any web browsers such as chrome,firefox,internet explorer,
           safari,opera.it suits to count characters in facebook,blog,excel document,pdf document,essays,
           etc.
        </div>
        </div>
    </div>
    </div>
    
</div>
  )
}
