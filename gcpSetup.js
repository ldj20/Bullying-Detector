var fs = require('file-system');
fs.writeFile(process.env.GCP_KEY_FILE, process.env.GCP_CRED, (err) => {});