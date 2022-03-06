import { solution } from "./mentoring";

type TestCaseFormat = Array<[number, number[][], number]>;

const TEST_CASE: TestCaseFormat = [
  [
    4,
    [
      [3, 4, 1, 2],
      [4, 3, 2, 1],
      [3, 1, 4, 2],
    ],
    3,
  ],
];

describe("뒤집은 소수", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [n, arr, answer] = TEST_CASE[i];
      const result = solution(n, arr);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
