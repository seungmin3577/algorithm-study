import { solution } from "./42578";

type TestCaseFormat = Array<[Array<string[]>, number]>;

const TEST_CASE: TestCaseFormat = [
  [
    [
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ],
    5,
  ],
  [
    [
      ["crowmask", "face"],
      ["bluesunglasses", "face"],
      ["smoky_makeup", "face"],
    ],
    3,
  ],
];

describe("코딩테스트 연습 > 해시 > 위장", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [clothes, answer] = TEST_CASE[i];
      const result = solution(clothes);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
