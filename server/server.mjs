// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import md5 from "md5";

const app = express();
const port = 80;

app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '100mb' }));
app.use(cors({
  origin: 'https://freemanhwa.com',
}));
app.use('/uploads', express.static('uploads'));

app.post('/upload', (req, res) => {
  const { name, currentChunkIndex, totalChunks } = req.query;
  const firstChunk = parseInt(currentChunkIndex) === 0;
  const lastChunk = parseInt(currentChunkIndex) === parseInt(totalChunks) - 1;

  let buffer; // Move the buffer declaration to a higher scope
  const data = req.body?.toString()?.split(',')[1];

  if (data) {
    buffer = Buffer.from(data, 'base64');
    // Rest of your code here
  } else {
    // Handle the case where data is undefined or null
    res.status(400).json({ error: 'Invalid data' });
    return; // Add a return statement to exit the function
  }

  const tmpFilename = name;

  if (firstChunk && fs.existsSync('./uploads/' + tmpFilename)) {
    fs.unlinkSync('./uploads/' + tmpFilename);
  }

  fs.appendFileSync('./uploads/' + tmpFilename, buffer);

  if (lastChunk) {
    res.json({ finalFilename: tmpFilename });
  } else {
    res.json('ok');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
