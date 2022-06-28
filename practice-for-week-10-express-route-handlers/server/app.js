// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
// automatically convert req body from json string to object
app.use(express.json());

// Your code here

// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.send(artists);
});

app.post('/artists', (req, res) => {
  const newArtist = addArtist(req.body);
  res.statusCode = 201;
  res.send(newArtist);
});

app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist();
  res.send(latestArtist);
});

app.get('/artists/latest/albums', (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res.send(latestArtistAlbums);
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
