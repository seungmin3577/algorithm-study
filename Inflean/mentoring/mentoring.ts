/**
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다. 멘토링은 메토와 멘티가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 성생님은 M번의 수학 테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇가지 인지 출력하는 프로그램을 작성 하세요.
 *
 * # 입력 설명
 * 첫 번째 줄에 반 학생 수 N(1 <= N <= 20)이 주어진다.
 * 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생 번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
 * 만약 한 줄에 N = 4이고, 테스트 결과가 3 4 1 2 로 입력되었다면 3번 학생이 1등, 4번학생이 2등, 1번학생이 3등, 2번 학생이 4등을 의미한다.
 *
 * # 출력 설명
 * 첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력한다.
 */

export const solution = (n: number, arr: number[][]): number => {
  let answer: number = 0;

  const testCount = arr.length;

  const testCase = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      testCase.push([i, j]);
    }
  }

  for (let [x, y] of testCase) {
    let count = 0;

    for (let i = 0; i < testCount; i++) {
      if (arr[i].indexOf(x) < arr[i].indexOf(y)) count++;
    }
    if (testCount === count) answer++;
  }

  return answer;
};
