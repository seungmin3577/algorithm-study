/**
 *
 * 첫 줄에 자연수의 개수 N이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 * 각 자연수의 크기는 100,000를 넘지 않는다.
 *
 * 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
 */

const isPrime = (num: number): boolean => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

export const solution = (arr: number[]): number[] => {
  let answer: number[] = [];

  for (let num of arr) {
    let result = 0;
    while (num) {
      result = result * 10 + (num % 10);
      num = parseInt(num / 10 + "");
    }

    if (isPrime(result)) answer.push(result);
  }

  return answer;
};
