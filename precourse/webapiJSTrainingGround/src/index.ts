import express from 'express';

const app = express();

let db = [
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
  const { name, email }: { name?: string; email?: string } = req.body;

  if (!name || !email) return res.status(400).end();

  const newDev = { id, name, email };
  db.push(newDev);
  return res.status(201).set('location', `/api/developers/${id}`).json(newDev);
});

app.delete('/api/developers/:id', ({ params: { id } }, res) => {
  const dev = db.find(d => d.id === Number(id));
  db = db.filter(d => d !== dev);
  res.status(dev ? 204 : 404).end();
});

app.patch('/api/developers/:id', (req, res) => {
  const { id } = req.params;
  const { name, email }: { name?: string; email?: string } = req.body;

  if (!name && !email) return res.status(400).end();

  const index = db.findIndex(dev => dev.id === Number(id));

  if (index === -1) return res.status(404).end();

  const updatedDev = {
    ...db[index],
    ...(name && { name }),
    ...(email && { email }),
  };

  db[index] = updatedDev;
  return res.status(200).set('location', `/api/developers/${id}`).json(updatedDev);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
