/**
 *
 * 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다. 단, 두번째 연산은 n이 k  로 나누어떨어질 때만 선택할 수 있다.
 *
 * @param n (2 <= n <= 100000)
 * @param k (2 <= k <= 100000)
 */

export const solution = (n: number, k: number) => {
  let number = n;
  let counter = 0;

  while (number > 1) {
    if (number % k == 0) {
      number = number / k;
    } else {
      number--;
    }

    counter++;
  }

  return counter;
};
