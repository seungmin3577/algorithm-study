import { solution } from "./42586";

const TEST_CASE_1 = [
  [93, 30, 55],
  [1, 30, 5],
  [2, 1],
];
const TEST_CASE_2 = [
  [95, 90, 99, 99, 80, 99],
  [1, 1, 1, 1, 1, 1],
  [1, 3, 2],
];

describe("코딩테스트 연습 > 스택/큐 > 기능개발", () => {
  beforeEach(() => {});

  it("테스트 케이스 1", () => {
    const [processes, speeds, answer] = TEST_CASE_1;
    const result = solution(processes, speeds);
    expect(result).toEqual(answer);
  });

  it("테스트 케이스 2", () => {
    const [processes, speeds, answer] = TEST_CASE_2;
    const result = solution(processes, speeds);
    expect(result).toEqual(answer);
  });
});

// ⚠️ 주의: 테스트 케이스를 통과 하더라도 정답이 아닐 수 있음!
