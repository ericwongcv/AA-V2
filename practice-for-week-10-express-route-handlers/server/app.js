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

app.get('/artists/:artistId/albums', (req, res) => {
  const albums = getAlbumsByArtistId(req.params.artistId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(albums);
});

app.post('/artists/:artistsId/albums', (req, res) => {
  const album = addAlbumByArtistId(req.params.artistsId, req.body);
  res.status(201);
  res.header('Content-Type', 'application/json');
  res.send(album);
});

app.get('/artists/:artistId/songs', (req, res) => {
  const songs = getSongsByArtistId(req.params.artistId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(songs);
});

app.get('/artists/:artistId', (req, res) => {
  const artist = getArtistByArtistId(req.params.artistId);
  res.status(200);
  res.send(artist);
});

app.patch('/artists/:artistId', (req, res) => {
  const artist = editArtistByArtistId(req.params.artistId, req.body);
  res.status(201);
  res.send(artist);
});

app.delete('/artists/:artistId', (req, res) => {
  deleteArtistByArtistId(req.params.artistId);
  res.status(200);
  res.header("Content-Type", "application/json");
  res.send("Successfully deleted");
});

app.get('/artists/latest/albums', (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res.send(latestArtistAlbums);
});

app.get('/artists/latest', (req, res) => {
  const latestArtist = getLatestArtist();
  res.send(latestArtist);
});

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.send(artists);
});

app.post('/artists', (req, res) => {
  const newArtist = addArtist(req.body);
  res.status(201);
  res.send(newArtist);
});

app.get('/albums/:albumId/songs', (req, res) => {
  const songs = getSongsByAlbumId(req.params.albumId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(songs);
});

app.post('/albums/:albumId/songs', (req, res) => {
  const song = addSongByAlbumId(req.params.albumId, req.body);
  res.status(201);
  res.header('Content-Type', 'application/json');
  res.send(song);
});

app.get('/albums/:albumId', (req, res) => {
  const album = getAlbumByAlbumId(req.params.albumId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(album);
});

app.patch('/albums/:albumId', (req, res) => {
  const album = editAlbumByAlbumId(req.params.albumId, req.body);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(album);
});

app.delete('/albums/:albumId', (req, res) => {
  deleteAlbumByAlbumId(req.params.albumId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send("Successfully deleted");
});

app.get('/albums', (req, res) => {
  const albums = getFilteredAlbums(req.query.startsWith);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(albums);
});

app.get('/songs/:songId', (req, res) => {
  const song = getSongBySongId(req.params.songId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(song);
});

app.patch('/songs/:songId', (req, res) => {
  const song = editSongBySongId(req.params.songId, req.body);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send(song);
});

app.delete('/songs/:songId', (req, res) => {
  deleteSongBySongId(req.params.songId);
  res.status(200);
  res.header('Content-Type', 'application/json');
  res.send("Successfully deleted");
});


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
