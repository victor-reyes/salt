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

app.use(express.json());

app.get('/api/developers', (_req, res) => {
  res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
  const dev = db.find(d => d.id === Number(req.params.id));

  return dev ? res.json(dev) : res.status(404).end();
});

app.post('/api/developers/', (req, res) => {
  const id = Math.max(0, ...db.map(dev => dev.id)) + 1;
  const { name, email } = req.body;
  const newDev = { id, name, email };
  db.push(newDev);
  res.status(201).set('location', `/api/developers/${id}`).json(newDev);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
