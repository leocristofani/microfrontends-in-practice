const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');

const PORT = 3002;

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

const genres = {
  blues: 'Blues',
  popRock: 'Pop/Rock',
  rap: 'Rap',
  rb: 'R&B',
  reggae: 'Reggae'
};

const artists = [
  {
    genre: 'Blues',
    name: 'B.B. King'
  },
  {
    genre: 'Blues',
    name: 'Etta James'
  },
  {
    genre: 'Blues',
    name: 'Robert Johnson'
  },
  {
    genre: 'Pop/Rock',
    name: 'Elvis Presley'
  },
  {
    genre: 'Pop/Rock',
    name: 'The Rolling Stones'
  },
  {
    genre: 'Pop/Rock',
    name: 'Nirvana'
  },
  {
    genre: 'Pop/Rock',
    name: 'U2'
  },
  {
    genre: 'R&B',
    name: 'Stevie Wonder'
  },
  {
    genre: 'R&B',
    name: 'Alicia Keys'
  },
  {
    genre: 'R&B',
    name: 'James Brown'
  },
  {
    genre: 'R&B',
    name: 'Marvin Gaye'
  },
  {
    genre: 'Rap',
    name: 'Eminem'
  },
  {
    genre: 'Rap',
    name: 'The Roots'
  },
  {
    genre: 'Rap',
    name: '2Pac'
  },
  {
    genre: 'Reggae',
    name: 'Bob Marley'
  },
  {
    genre: 'Reggae',
    name: 'UB40'
  },
];

/**
 * Exposes paths to embed assets
 */
app.get('/api/embed-assets', (req, res) => {
  res.json(getPathToEmbedAssets());
});

app.get('/api/genres', (req, res) => {
  res.json(genres);
});

app.get('/api/artists', (req, res) => {
  res.json(artists);
});

app.get('*', (req, res) => {
  const template = path.resolve(__dirname, 'public/standalone/index.html');
  res.sendFile(template);
});

app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});