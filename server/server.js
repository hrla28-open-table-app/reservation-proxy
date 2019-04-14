const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./router');
// const proxy = require('http-proxy-middleware');

const server = express();

server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use(cors());

server.use(express.static(path.join(__dirname, '/../public')));

server.use('/api', router);

// server.use('/api', proxy({
//     target: 'http://localhost:3000',
//     router: {
//         '/navbar/:id': 'http://localhost:3001',
//         '/reservation': 'http://localhost:3002',
//         '/description': 'http://localhost:3003',
//         '/reviews': 'http://localhost:3004',
//     },
//     changeOrigin: true,
// }));

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`### Server is listening to port: ${port} ###`));
