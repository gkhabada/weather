import type { City } from '~/types/index';

export const cities : City[] = [
  { id: 'makhachkala', name: 'Махачкала' },
  { id: 'moscow', name: 'Москва' },
  { id: 'kazan', name: 'Казань' },
  { id: 'ufa', name: 'Уфа' },
  { id: 'grozny', name: 'Грозный' },
  { id: 'omsk', name: 'Омск' },
];

export const daysOfWeek : string[] = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export default {
  cities,
  daysOfWeek,
};
