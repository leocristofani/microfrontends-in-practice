const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');

const PORT = 3000;

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
  res.json([
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Song 3' }
  ]);
});

app.get('*', (req, res) => {
  const template = path.resolve(__dirname, 'public/standalone/index.html');
  console.log(template);
  res.sendFile(template);
});

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});