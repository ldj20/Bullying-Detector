const express = require('express')
const app = express();
const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const cors = require("cors");
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const projectId = "bullying-detector";
const location = "us-central1";
const modelId = "TCN4022003638799958016";
const client = new PredictionServiceClient();

app.use(cors());

const ex = () => {}

async function asyncFetch (req, res, next) {
  const content = req.body.text;
  const request = {
    name: client.modelPath(projectId, location, modelId),
    payload: {
      textSnippet: {
        content: content,
        mimeType: 'text/plain', 
      },
    },
  };
  console.log(request);
  const [response] = await client.predict(request)
  req.data = response.json();
  next();
}

app.post('/', jsonParser, asyncFetch, (req, res) => {
  res.send(req.data);
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server up and running`)
});