const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(cors());

const port = 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})