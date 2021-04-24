import * as express from 'express';
import { getEvents, getEventTypes, getRecipients } from '../services/event';
import { Query } from '../types';

export const eventController = express.Router();

eventController.get('/events', async (req, res, next) => {
  try {
    const result = await getEvents(req.query as Query);

    res.json(result);
  } catch (error) {
    next(error);
  }
});

eventController.get('/events/care-recipients', async (_, res, next) => {
  try {
    const recipients = await getRecipients();

    res.json({ recipients });
  } catch (error) {
    next(error);
  }
});

eventController.get('/events/types', async (_, res, next) => {
  try {
    const types = await getEventTypes();

    res.json({ event_types: types });
  } catch (error) {
    next(error);
  }
});
