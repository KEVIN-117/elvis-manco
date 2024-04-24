import app from "./app.js";


import connect from './db/connect.js'

const port = 3000;

connect();

app.listen(port, () => {
  console.log(
    `\x1b[32mServer running on port \x1b[35m${port}\x1b[0m . The URL is\x1b[0m \x1b[34mhttp://localhost:${port}\x1b[0m`
  );
});

