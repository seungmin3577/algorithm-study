import { solution } from "./42583";

type TestCaseFormat = Array<[number, number, number[], number]>;

const TEST_CASE: TestCaseFormat = [
  [2, 10, [7, 4, 5, 6], 8],
  [100, 100, [10], 101],
  [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 110],
];

describe("코딩테스트 연습 > 스택/큐 > 다리를 지나는 트럭", () => {
  beforeEach(() => {
    expect(solution).toBeDefined();
  });

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [bridge_length, weight, truck_weights, answer] = TEST_CASE[i];
      const result = solution(bridge_length, weight, truck_weights);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
