import { solution } from "./72411";

type TestCaseFormat = Array<[string[], number[], string[]]>;

const TEST_CASE: TestCaseFormat = [
  [
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    [2, 3, 4],
    ["AC", "ACDE", "BCFG", "CDE"],
  ],
  [
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2, 3, 5],
    ["ACD", "AD", "ADE", "CD", "XYZ"],
  ],
  [
    ["XYZ", "XWY", "WXA"],
    [2, 3, 4],
    ["WX", "XY"],
  ],
];

describe("2021 카카오 공채 (메뉴 리뉴얼)", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [order, course, answer] = TEST_CASE[i];
      const result = solution(order, course);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
