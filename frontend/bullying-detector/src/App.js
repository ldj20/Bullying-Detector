import { useState } from 'react';
import axios from 'axios';

function App() {

  const [text, setText] = useState("");
  const [render, setRender] = useState("home");

  const predict = () => {
    if (text == "" || text == undefined || text == null) {
      return;
    }
    axios.post("https://bullying-detector.herokuapp.com", {text: text})
      .then(response => {
        console.log(response);
        setRender(response.data);
        setText("");
      })
      .catch(e => {
        console.log(e);
      })
  }

  const handleInput = event => {
    setText(event.target.value);
  }
  
  return (
    (render == "home") ? 
      <div>
        <header>
          <h1>Bullying Detector</h1>
          <p className="message">Welcome! If you ever think that someone may be cyberbullying you, you can
          copy messages or posts they made and paste them here. Please keep in mind that
          this app is not perfect. Whether it tells you that you are being bullied or not,
          your feelings are important. If you are worried that you are being bullied, the
          best thing to do is talk to a trusted adult about it. You are not alone.</p>

          <p>This app does not store any data you submit.</p>

          <p>If you want to learn how to handle bullies, click this button.</p>
          <button className="btn submit" onClick={() => setRender("info")}>Information</button>
        </header>
        <h3>Paste Text Here</h3>
        <textarea name="paragraph_text" cols="50" rows="13" onChange={handleInput}></textarea>
        <br/>
        <button className="btn submit" onClick={predict}>Submit</button>
      </div> : (render == "bullied") ?
        <div className="wrapper">
          <header>
            <h1>Content May Be Cyberbullying</h1>
            <p className="message">Based off the message(s) you pasted, you may be being bullied.
            Don't panic, you can handle this! Here's a list of links you can follow that
            can give you good information about handling bullies. However, the best thing you can 
            do is reach out to a trusted adult for help.</p>
            <div className="container">
                <div className="row">
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Use this to start off: </div>
                    <a href="https://www.connectsafely.org/tips-to-help-stop-cyberbullying/">ConnectSafely</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Here's an article you can read: </div>
                    <a href="https://kidshealth.org/en/kids/bullies.html">KidsHealth</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>This is another website with helpful information: </div>
                    <a href="https://www.kidscape.org.uk/advice/advice-for-young-people/dealing-with-bullying/">KidScape</a>
                  </div>
                </div>
                <div className="row">
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>And another: </div>
                    <a href="https://www.ncab.org.au/bullying-advice/bullying-for-kids/how-to-deal-with-bullies/">National Centre Against Bullying</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>This is an interactive website: </div>
                    <a href="https://www.childline.org.uk/">Childline</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Here are hotlines you can call: </div>
                    <a href="https://bullybust.org/resources">BullyBust</a>
                  </div>
                </div>
              </div>
          </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
        </div> : (render == "not_bullied") ?
          <div className="wrapper">
            <header>
              <h1>Content Is Probably Not Cyberbullying</h1>
              <p className="message">Based off the message(s) you pasted, you are not being bullied.
              If you think otherwise or have any doubts, that's completely understandable! Please
              reach out to a trusted adult if you think you may be being bullied, regardless of what
              this website tells you.</p>
            </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
          </div> :
          <div className="wrapper">
            <header>
              <h1>Resources</h1>
              <p>If you want to stand up to a bully or want to help a friend, these links can be helpful</p>
              <div className="container">
                <div className="row">
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Use this to start off: </div>
                    <a href="https://www.connectsafely.org/tips-to-help-stop-cyberbullying/">ConnectSafely</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Here's an article you can read: </div>
                    <a href="https://kidshealth.org/en/kids/bullies.html">KidsHealth</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>This is another website with helpful information: </div>
                    <a href="https://www.kidscape.org.uk/advice/advice-for-young-people/dealing-with-bullying/">KidScape</a>
                  </div>
                </div>
                <div className="row">
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>And another: </div>
                    <a href="https://www.ncab.org.au/bullying-advice/bullying-for-kids/how-to-deal-with-bullies/">National Centre Against Bullying</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>This is an interactive website: </div>
                    <a href="https://www.childline.org.uk/">Childline</a>
                  </div>
                  <div className="infoDiv col col-lg-4 col-12">
                    <div>Here are hotlines you can call: </div>
                    <a href="https://bullybust.org/resources">BullyBust</a>
                  </div>
                </div>
              </div>
            </header>
            <button className="btn submit" onClick={() => setRender("home")}>Back To Homepage</button>
          </div>
  );
}

export default App;
