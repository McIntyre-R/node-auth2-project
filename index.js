const server = require('./api/server.js');

const { PORT } = require('./api/sercrets')

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});