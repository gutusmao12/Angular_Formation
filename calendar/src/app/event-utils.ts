import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Payever Technical Assessment',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'La La Land',
    start: TODAY_STR
  },
];

export function createEventId() {
  return String(eventGuid++);
}