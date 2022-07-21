import { solution } from "./reverse-decimal";

type TestCaseFormat = Array<[number[], number[]]>;

const TEST_CASE: TestCaseFormat = [
  [
    [32, 55, 62, 20, 250, 370, 200, 30, 100],
    [23, 2, 73, 2, 3],
  ],
];

describe("뒤집은 소수", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [n, answer] = TEST_CASE[i];
      const result = solution(n);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
