/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */

import ErrorRepository from '../app';

test('error exists', () => {
  const rep = new ErrorRepository();
  expect(rep.translate(52)).toBe('Ошибка 52');
});

test('erorr doesnt exist', () => {
  const rep = new ErrorRepository();
  expect(rep.translate(100)).toBe('Unknown error');
});
