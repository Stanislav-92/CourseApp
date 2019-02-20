const express = require('express');
const http = require('http');
const path = require('path');

const app = require('./routes');

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/project-app'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

const server = http.createServer(app);

server.listen(port,() => console.log('Running..'));
