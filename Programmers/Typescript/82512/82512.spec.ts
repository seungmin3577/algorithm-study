import { solution } from "./82512";

type TestCaseFormat = Array<[number, number, number, number]>;

const TEST_CASE: TestCaseFormat = [[3, 20, 4, 10]];

describe("위클리 챌린지 > 1주차_부족한 금액 계산하기", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [price, money, count, answer] = TEST_CASE[i];
      const result = solution({ price, money, count });
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
