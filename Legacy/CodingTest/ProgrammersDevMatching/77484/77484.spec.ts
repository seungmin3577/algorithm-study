import { solution } from "./77484";

type TestCaseFormat = Array<[number[], number[], number[]]>;

const TEST_CASE: TestCaseFormat = [
  [
    [44, 1, 0, 0, 31, 25],
    [31, 10, 45, 1, 6, 19],
    [3, 5],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [38, 19, 20, 40, 15, 25],
    [1, 6],
  ],
  [
    [45, 4, 35, 20, 3, 9],
    [20, 9, 3, 45, 4, 35],
    [1, 1],
  ],
];

describe("2021 백엔드 데브 매칭 (상반기)", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [lottos, win_nums, answer] = TEST_CASE[i];
      const result = solution(lottos, win_nums);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
