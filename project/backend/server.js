
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.connect.js';
import { logger } from './middleware/logger.js';
import recipesRouter from "./route/recipes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api/recipes',recipesRouter);  

// connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});