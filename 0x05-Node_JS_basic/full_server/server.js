import express from 'express';
import routes from './routes/index.js';

const PORT = 1245;
const app = express();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at -> http://localhost:${PORT}`);
});

export default app;
