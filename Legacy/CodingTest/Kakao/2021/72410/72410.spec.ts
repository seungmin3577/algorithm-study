import { solution } from "./72410";

type TestCaseFormat = Array<[string, string]>;

const TEST_CASE: TestCaseFormat = [
  ["...!@BaT#*..y.abcdefghijklm", "bat.y.abcdefghi"],
  ["z-+.^.", "z--"],
  ["=.=", "aaa"],
  ["123_.def", "123_.def"],
  ["abcdefghijklmn.p", "abcdefghijklmn"],
];

describe("2021 카카오 공채 (아이디 추천)", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [new_id, answer] = TEST_CASE[i];
      const result = solution(new_id);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
