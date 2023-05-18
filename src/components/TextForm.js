import React,{useState} from 'react'



export default function TextForm(props) {
    
   


    const handleUpClick =()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClrClick =()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value)
        
    }

    const handelCopyText =(event)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handelExtraSpaces =(event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");

    const handleOnSpeakClick =(event)=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


  return (
    <>
    {/* below is for the dark mode only one line*/}
    <div className={`text-${props.mode==='light'?'dark':'light'} `} >

    <div className="mb-3 my-3  "  >
      <h1> Convert the Text as you wish</h1>
      <textarea className="form-control my-3" id="myBox" placeholder='Enter Text here' onChange={handleOnChange} rows="6" value = {text}></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handleUpClick}>Convert To Upper Case</button>
    <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handleLoClick}>Convert To Lower Case</button>
    <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handelCopyText}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-2 btn-sm" onClick={handelExtraSpaces}>Remove Extra Space</button>
    <button className="btn btn-danger mx-2 my-2 btn-sm" onClick={handleClrClick}>Clear Text Area</button>
    <button className="btn btn-success mx-2 my-2 btn-sm" onClick={handleOnSpeakClick}>Speak the words</button>
    
    

    <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>This have {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chatracters.</p>
        <p><b>This will take {0.008 * text.split(" ").length } to read the above words.</b></p>
    </div>

    
        <div className=" shadow p-3 mb-5 bg-white rounded card text-center">
        
        <div>
            <b>
            <p className=" card-text">I'm an eager and open-minded individual, excited to meet new people and explore new opportunities. With a can-do attitude and a passion for learning, I'm ready to take on any challenge and thrive in fast-paced environments.</p>
            </b>
            <a href="https://rohanprasadgupta.w3spaces.com/" className="btn btn-primary my-3 mx-4">Portfolio Website</a>
            <a href="https://drive.google.com/file/d/1Kg8daIUirvR58LlbUcOGLld55LH7Aj8Q/view?usp=share_link" className="btn btn-success my-3 mx-4" download>Download Resume</a>
        
        
        </div>
        </div>
    
    </div>

    </>
  )
}
