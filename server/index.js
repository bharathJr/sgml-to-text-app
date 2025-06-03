
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const { parseSGML } = require('./parser');

const upload = multer({ dest: 'uploads/' });
const app = express();

app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
  const content = fs.readFileSync(req.file.path, 'utf8');
  const topics = parseSGML(content);
  res.json({ topics });
});

app.listen(3000, () => console.log('Server running on port 3000'));
