import { solution } from "./42576";

type TestCaseFormat = Array<[string[], string[], string]>;

const TEST_CASE: TestCaseFormat = [
  [["leo", "kiki", "eden"], ["eden", "kiki"], "leo"],
  [
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"],
    "vinko",
  ],
  [
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"],
    "mislav",
  ],
];

describe("코딩테스트 연습 > 해시 > 완주하지 못한 선수", () => {
  beforeEach(() => {});

  for (let i = 0; i < TEST_CASE.length; i++) {
    it(`테스트 케이스 ${i + 1}`, () => {
      const [participant, completion, answer] = TEST_CASE[i];
      const result = solution(participant, completion);
      expect(result).toEqual(answer);
    });
  }
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
