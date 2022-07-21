import { solution } from "./law-of-large-number";

type TestCaseFormat = Array<[number, number, number, number[], number]>;

const TEST_CASE: TestCaseFormat = [[5, 8, 3, [2, 4, 5, 4, 6], 46]];

describe("큰수의 법칙", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [n, m, k, l, answer] = TEST_CASE[i];
      const result = solution(n, m, k, l);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
