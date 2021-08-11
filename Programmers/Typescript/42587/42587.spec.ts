import { solution } from "./42587";

type TestCaseFormat = Array<[number[], number, number]>;

const TEST_CASE: TestCaseFormat = [
  [[2, 1, 3, 2], 2, 1],
  [[1, 1, 9, 1, 1, 1], 0, 5],
  [[2, 1, 9, 1, 1, 1], 0, 2],
  [[2, 1, 9, 1, 2, 1], 0, 3],
  [[4, 2, 9, 2, 5, 1], 1, 4],
];

describe("코딩테스트 연습 > 스택/큐 > 프린터", () => {
  beforeEach(() => {
    expect(solution).toBeDefined();
  });

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [priorities, location, answer] = TEST_CASE[i];
      const result = solution(priorities, location);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
