import { Nil } from './CommonTypes';

export const APP_TITLE = 'Pet-Shop';
export const APP_DESCRIPTION = `${APP_TITLE} is e-commerse web-site that represented goods for pets cheack out for more`;
// export const APP_REPOSITORY_URL = 'https://github.com/onderonur/next-shopper';

export const createMockArray = (length: number) => {
  return Array.from(Array(length).keys());
};

export const isNil = (val: unknown): val is Nil => {
  return val === null || val === undefined;
};
