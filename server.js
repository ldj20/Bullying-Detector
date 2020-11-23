const express = require('express')
const app = express();
const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const cors = require("cors");
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

app.use(cors());

async function asyncFetch (req, res, next) {
  const projectId = process.env.PID;
  const location = "us-central1";
  const modelId = process.env.MODELID;
  const client = new PredictionServiceClient();
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
  const [response] = await client.predict(request);
  req.data = response.payload;
  next();
}

app.post('/', jsonParser, asyncFetch, (req, res) => {
  const data = req.data[0];
  if (data.displayName == "bullying") {
    if (data.classification.score >= 0.6) {
      res.send("bullied");
    }
  } else {
    res.send("not_bullied")
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server up and running`)
});