import { useState } from 'react';
const axios = require('axios');
const {PredictionServiceClient} = require('@google-cloud/automl').v1;

function App() {

  const projectId = "bullying-detector";
  const location = "us-central1";
  const modelId = "TCN4022003638799958016";
  const scoreThreshold = "0.6";
  const params = {score_threshold: scoreThreshold};

  const client = new PredictionServiceClient();

  const [text, setText] = useState("");
  const [render, setRender] = useState("home");
  const [prediction, setPrediction] = useState(); 

  const predict = () => {
    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        textSnippet: {
          content: text,
          mimeType: 'text/plain',
        },
      },
    };
    const [response] = client.predict(request);
    setPrediction(response);
    console.log(response);
  }

  const handleInput = event => {
    setText(event.target.value);
  }
  
  return (
    (render == "home") ? 
      <div class="wrapper">
        <header>
          <h1>Bullying Detector</h1>
          <p className="message">Welcome! If you ever think that someone may be cyberbullying you, you can
          copy messages or posts they made and paste them here. Please keep in mind that
          this app is not perfect. Whether it tells you that you are being bullied or not,
          your feelings are important. If you are worried that you are being bullied, the
          best thing to do is talk to a trusted adult about it. You are not alone.</p>

          <p>If you want to learn how to handle bullies, click this button.</p>
          <button className="btn submit" onClick={() => setRender("bullied")}>Information</button>
        </header>
        <h3>Paste Text Here</h3>
        <textarea name="paragraph_text" cols="50" rows="13" onChange={handleInput}></textarea>
        <br/>
        <button className="btn submit" onClick={predict}>Submit</button>
      </div> : (render == "bullied") ?
        <div class="wrapper">
          <header>
            <h1>Bullied Tab</h1>
          </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
        </div> : (render == "not bullied") ?
          <div class="wrapper">
            <header>
              <h1>Not bullied tab</h1>
            </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
          </div> :
          <div class="wrapper">
            <header>
              <h1>Informational Tab</h1>
            </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
          </div>
  );
}

export default App;
