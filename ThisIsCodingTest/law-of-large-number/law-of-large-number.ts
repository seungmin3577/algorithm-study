/**
 *
 * n 은 숫자 리스트 개수 ( 2 <= n <= 1000)
 * m은 연산의 횟수 ( 1 <= m <= 10000)
 * k는 같은 인덱스를 연속으로 쓸수 있는 최대 수 ( 1 <= k <= 10000)
 * l 숫자 리스트
 *
 */

export const solution = (n: number, m: number, k: number, l: number[]) => {
  const list = l.sort().reverse();
  const maxNumber = list[0];
  const minNumber = list[1];

  const minNumberCount = Math.floor(m / (k + 1));
  const maxNumberCount = m - minNumberCount;

  return maxNumber * maxNumberCount + minNumber * minNumberCount;
};
