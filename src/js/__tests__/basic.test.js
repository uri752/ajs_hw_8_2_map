/*import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});*/

import ErrorRepository from "../app";

test('error exists', () => {
  const rep = new ErrorRepository();
  const code52 = 52;
  const text52 = 'Ошибка 52';
  rep.errors.set(code52, text52) 
  expect(rep.translate(code52)).toBe(text52);
});

test('erorr doesnt exist', () => {
  const rep = new ErrorRepository();
  const code52 = 52;
  const text52 = 'Ошибка 52';
  const code100 = 100;
  const textUnknownError = 'Unknown error';
  rep.errors.set(code52, text52) 
  expect(rep.translate(code100)).toBe(textUnknownError);
});