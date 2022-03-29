// server.js
// where your node app starts
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const router=express.Router();
import apiRuter from "./routers/api.js"

// init project
import express from 'express';
const app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
import cors from 'cors';
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.use("/api", apiRuter);



const PORT= 3000;

// listen for requests :)
const listener = app.listen(PORT, function () {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
