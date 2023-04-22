/* // TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2])); */

export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
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
