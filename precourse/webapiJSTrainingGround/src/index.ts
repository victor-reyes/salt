import express from 'express';

const app = express();

const db = [
  {
    id: 1,
    name: 'Marcus Dev',
    email: 'marcus@salt.dev',
  },
  {
    id: 2,
    name: 'Víctor Reyes',
    email: 'victor.reyes@salt.dev',
  },
];

app.get('/api/developers', (_req, res) => {
  res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
  const dev = db.find(d => d.id === Number(req.params.id));

  return dev ? res.json(dev) : res.status(404).end();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
