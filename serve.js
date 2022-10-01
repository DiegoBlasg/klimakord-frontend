const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/nasa', (req, res) => {
  res.sendFile(path.join(__dirname + '/nasa.html'));
})

// rutas de las librerias
app.get('/leaflet/js', (req, res) => {
  res.sendFile(path.join(__dirname + '/leaflet/leaflet.js'));
})
app.get('/leaflet/css', (req, res) => {
  res.sendFile(path.join(__dirname + '/leaflet/leaflet.css'));
})
app.get('/bootstrap/js', (req, res) => {
  res.sendFile(path.join(__dirname + '/bootstrap/js/bootstrap.bundle.min.js'));
})
app.get('/bootstrap/css', (req, res) => {
  res.sendFile(path.join(__dirname + '/bootstrap/css/bootstrap.min.css'));
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})