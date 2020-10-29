import { useState } from 'react';

function App() {
  
  const [text, setText] = useState("");
  const [isHome, setIsHome] = useState(true)
  const [render, setRender] = useState("bullied")

  const handleInput = event => {
    setText(event.target.value);
  }

  const submit = () => {
    //api call with text
    return
  }
  
  return (
    isHome ? 
      <div>
        <h1>Bullying Detector</h1>
        <p className="message">Welcome! If you ever think that someone may be cyberbullying you, you can
        copy messages or posts they made and paste them here. Please keep in mind that
        this app is not perfect. Whether it tells you that you are being bullied or not,
        your feelings are important. If you are worried that you are being bullied, the
        best thing to do is talk to a trusted adult about it. You are not alone.</p>

        <p>If you want to learn how to handle getting bullyied, click this button.</p>
        <button className="btn submit" onClick={() => setIsHome(false)}>Click Me!</button>
        <br/>
        <h3>Paste Text Here</h3>
        <textarea name="paragraph_text" cols="50" rows="13" onChange={handleInput}></textarea>
        <br/>
        <button className="btn submit" onClick={submit}>Submit</button>
      </div> :
      render == "bullied" ?
        <div>
          <h1>Bullying Information</h1>
          <button className="btn submit" onClick={() => setIsHome(true)}>Back To Homepage</button>
        </div> :
        <div>
          <h1>Encouragement Tab</h1>
          <button className="btn submit" onClick={() => setIsHome(true)}>Back To Homepage</button>
        </div>
  );
}

export default App;
