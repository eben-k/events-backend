import cors from 'cors';
import express from 'express';
import { eventController } from './controllers/event';

const app = express();

app.use(cors());
app.use(eventController);

export default app;
