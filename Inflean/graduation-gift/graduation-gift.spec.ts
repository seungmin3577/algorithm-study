import { solution } from "./graduation-gift";

type TestCaseFormat = Array<[number, number[][], number]>;

const TEST_CASE: TestCaseFormat = [
  [
    28,
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    4,
  ],
];

describe("졸업 선물", () => {
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
