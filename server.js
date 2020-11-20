const express = require('express')
const app = express();
const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const cors = require("cors");

app.use(cors());

app.post('/', (req, res) => {
    const projectId = process.env.PID;
    const location = process.env.LOCATION;
    const modelId = process.env.MODELID;
    const text = req.text;
    const client = new PredictionServiceClient();
    console.log(text);
    const request = {
      name: client.modelPath(projectId, location, modelId),
        payload: {
          textSnippet: {
            content: text,
            mimeType: 'text/plain',
          },
        },
    };
    console.log("here");
    client.predict(request)
      .then(response => {
        console.log(response);
        res.send(response);
      })
      .catch(e => {
        console.log(e);
      })
    console.log("here2");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server up and running`)
});