/* // TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(42, 'Ошибка 42');
    this.errors.set(52, 'Ошибка 52');
    this.errors.set(62, 'Ошибка 62');
    // ключ - это код ошибки (число),
    // а значение - текстовое описание (человекочитаемое).
  }

  translate(code) {
    let text = this.errors.get(code);
    if (text === undefined) {
      text = 'Unknown error';
    }
    return text;
  }
}
