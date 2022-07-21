/**
 * 숫자 카드게임
 * 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임이다.
 * 단, 게임의 룰을 지키며 카드를 뽑아야 하고 룰은 다음과 같다.
 *
 * 1. 숫자가 쓰인 카드들이 N X M의 형태로 놓여있다. 이때 N은 행의 개수를 의미하며, M은 열의 개수를 의미한다.
 * 2. 먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
 * 3. 그다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
 * 4. 따라서 처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야 한다.
 *
 * ( 1 <= n,m <= 100)
 * n은 행의 개수
 * m은 열의 개수
 *
 */

export const solution = (n: number, m: number, list: Array<number[]>) => {
  const minList = [];

  for (let column of list) {
    const sortedColumn = column.sort();
    minList.push(sortedColumn[0]);
  }

  minList.sort();

  return minList[n - 1];
};
