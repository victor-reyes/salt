import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));
app.use(express.static('static'));
app.get('/', (req, res) => {
  res.send('Hello fellow developer!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
