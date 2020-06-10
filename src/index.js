const express = require("express");
//const fs = require("fs");
//const https = require("https");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(3000);

// HTTPS Server
/*
https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/server.samuelresolve.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/server.samuelresolve.com/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/server.samuelresolve.com/chain.pem')
  },app).listen(443, () => {
    console.log('Listening...')
  })
*/
