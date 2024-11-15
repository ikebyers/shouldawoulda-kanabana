const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client dist directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(express.json());

app.use(routes);

// Wildcard route to serve index.html for all unmatched routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

// Sync database and start server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
