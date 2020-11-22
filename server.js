const express = require('express')
const app = express();
const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const cors = require("cors");
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(cors());

app.post('/', jsonParser, (req, res) => {
    const projectId = "bullying-detector";
    const location = "us-central1";
    const modelId = "TCN4022003638799958016";
    const text = req.body.text;
    const client = new PredictionServiceClient();
    const request = {
      name: client.modelPath(projectId, location, modelId),
        payload: {
          textSnippet: {
            content: text,
            mimeType: 'text/plain',
          },
        },
    };
    client.predict(request)
      .then(response => {
        console.log("here1");
        res.send(response);
      })
      .catch(e => {
        console.log(e);
      })
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server up and running`)
});