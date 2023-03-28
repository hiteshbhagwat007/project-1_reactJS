
import React, {useState} from 'react'

export default function TextForm(props) {
    const UphandleUpClick = () => {
        console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowerhandleUpClick = () => {
        console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log('UphandleOnChange');
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
      let newText = '';
        setText(newText);
  }
    const [text, setText] = useState('Enter any text here . . . . . ');
  return (
    <>
    <div className='py-3'>
        <div className="mb-3 container px-lg-5">
        <label for="exampleFormControlTextarea1" className="form-label font-weight-bold">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <div className="d-flex container px-lg-5w-auto">
      <div className="mb-3 flex container px-lg-5">
      <input type="submit" value="UpperCase" onClick={UphandleUpClick} className='btn btn-outline-success mx-2'></input>
      <input type="submit" value="LowerCase" onClick={LowerhandleUpClick} className='btn btn-outline-primary mx-2'/>
      <input type="submit" value="Clear Text" onClick={handleClearClick} className='btn btn-danger mx-2'/>
      </div>
      </div>
    </div>  
    <div className="container my-3">
      <h1>Your text summrary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read complete content by any user</p>
      <h1>Preview content</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
