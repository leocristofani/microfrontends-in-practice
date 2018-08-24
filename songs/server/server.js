const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');

const data = require('./data');

const PORT = 3003;

const app = express();

/**
 * When embedded as a micro-frontend the frontend will do cross origin requests.
 */
app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));

function getPathToEmbedAssets() {
  const filesPath = {};
  const embedPath = 'public/embed';
  fs.readdirSync(`${__dirname}/${embedPath}`)
    .forEach(fileName => {
      if (fileName.indexOf('.css') !== -1) {
        filesPath['css'] = `${embedPath}/${fileName}`;
      }
      if (fileName.indexOf('.js') !== -1) {
        filesPath['js'] = `${embedPath}/${fileName}`;
      }
    });

  return filesPath;
}

/**
 * Exposes paths to embed assets
 */
app.get('/api/embed-assets', (req, res) => {
  res.json(getPathToEmbedAssets());
});

app.get('/api/songs', (req, res) => {
  const { artist } = req.query;
  const foundData = data.songs.filter(song => song.artist === artist);
  if (foundData.length) {
    res.json(foundData[0].songs)
  } else {
    res.json([]);
  }
});

app.get('*', (req, res) => {
  const template = path.resolve(__dirname, 'public/index.html');
  res.sendFile(template);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});