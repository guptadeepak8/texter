import React,{useState} from "react";

export default function Textform(props) {
 const [text, setfirst] = useState()
 const handleupcase =()=>{
   let newtext = text.toUpperCase();
   setfirst(newtext)
 }
 const handlecase =(event)=>{
    setfirst(event.target.value)
 }
 



  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handlecase}
        ></textarea>
      </div>
      <button type="button"  onClick={handleupcase} className="btn btn-primary">To uppercase</button>
    </>
  );
}
