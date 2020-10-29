function App() {
  return (
    <div>
      <h1>Bullying Detector</h1>
      <p class="message">Welcome! If you ever think that someone may be cyberbullying you, you can
      copy messages or posts they made and paste them here. Please keep in mind that
      this app is not perfect. Whether it tells you that you are being bullied or not,
      your feelings are important. If you are worried that you are being bullied, the
      best thing to do is talk to a trusted adult about it. You are not alone.</p>

      <br/>
      <h3>Paste Text Here</h3>
        <form>
        <textarea name="paragraph_text" cols="50" rows="13"></textarea>

        </form>
    </div>
  );
}

export default App;
