import { getRepository } from 'typeorm';
import { EventEntity } from '../entities/event';
import { Query } from '../types';

const processQuery = (query: Query) => {
  return {
    skip: ((query.page ?? 1) - 1) * (query.limit ?? 20),
    take: query.limit ?? 20,
  };
};

export const getEvents = async (query: Query) => {
  const eventRepository = getRepository(EventEntity);
  const { skip, take } = processQuery(query);
  const builder = eventRepository
    .createQueryBuilder('event')
    .orderBy('event.timestamp', 'DESC');

  if (query.event_type) {
    builder.where('event.event_type = :type', { type: query.event_type });
  }

  if (query.recipient_id) {
    builder.andWhere('event.care_recipient_id = :recipient', {
      recipient: query.recipient_id,
    });
  }

  const total = await builder.getCount();

  builder.offset(skip).limit(take);

  const events = await builder.getMany();

  return { meta: { total, page: skip + 1, limit: take }, events };
};

export const getRecipients = async () => {
  const builder = getRepository(EventEntity).createQueryBuilder('event');
  const users = await builder
    .select('event.care_recipient_id', 'recipient_id')
    .addSelect('COUNT(event.care_recipient_id)', 'total_events')
    .groupBy('event.care_recipient_id')
    .getRawMany();

  return users;
};

export const getEventTypes = async () => {
  const builder = getRepository(EventEntity).createQueryBuilder('event');
  const events = await builder
    .select('event.event_type', 'event_type')
    .addSelect('COUNT(event.event_type)', 'total_events')
    .groupBy('event.event_type')
    .orderBy('event.event_type', 'ASC')
    .getRawMany();

  return events;
};
