import express from 'express';
import { PORT } from './config/serverConfig.js';
import cors from 'cors';

const app = express();  // Setting up express app

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/ping', (req, res) => {
  return res.json({'message': 'pong'});
})

// Routes
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



