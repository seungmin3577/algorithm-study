import { solution } from "./until-it-becomes-one";

type TestCaseFormat = Array<[number, number, number]>;

const TEST_CASE: TestCaseFormat = [
  [25, 5, 2],
  [25, 3, 6],
  [27, 3, 3],
];

describe("1이 될 때까지", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [n, k, answer] = TEST_CASE[i];
      const result = solution(n, k);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
