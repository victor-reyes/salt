import express from 'express';

const app = express();

const futureDev = { id: 1, name: 'Víctor Reyes', email: 'victor.reyes@salt.dev' };
app.get('/', (req, res) => {
  res.status(201).set('location', '/api/developers/1').json(futureDev);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
