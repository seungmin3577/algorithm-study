import { solution } from "./number-card-game";

type TestCaseFormat = Array<[number, number, Array<number[]>, number]>;

const TEST_CASE: TestCaseFormat = [
  [
    3,
    3,
    [
      [3, 1, 2],
      [4, 1, 4],
      [2, 2, 2],
    ],
    2,
  ],
  [
    2,
    4,
    [
      [7, 3, 1, 8],
      [3, 3, 3, 4],
    ],
    3,
  ],
];

describe("숫자 카드 게임", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [n, m, list, answer] = TEST_CASE[i];
      const result = solution(n, m, list);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
