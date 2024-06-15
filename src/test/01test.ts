import { sum, mult, splitIntoWords } from './01';

test('sum should be correct', () => {
  // Данные
  let a = 1;
  let b = 2;

  // Действие
  const result = sum(a, b);

  // Ожидаемый результат
  expect(result).toBe(3);
});

test('mult should be correct', () => {
  // Данные
  let a = 2;
  let b = 3;

  // Действие
  const result = mult(a, b);

  // Ожидаемый результат
  expect(result).toBe(6);
});

test('splitIntoWords should split sentence into words', () => {
  // Данные
  const sentence = 'Hello my friends';

  // Действие
  const result = splitIntoWords(sentence);

  // Ожидаемый результат
  expect(result).toEqual(['Hello', 'my', 'friends']);
});

