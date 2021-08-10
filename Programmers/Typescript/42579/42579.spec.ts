import { solution } from "./42579";

type TestCaseFormat = Array<[string[], number[], number[]]>;

const TEST_CASE: TestCaseFormat = [
  [
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500],
    [4, 1, 3, 0],
  ],
];

describe("코딩테스트 연습 > 해시 > 베스트앨범", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [genres, plays, answer] = TEST_CASE[i];
      const result = solution(genres, plays);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
