/*
중첩배열일때 타입을 작성하는법
배열안의 배열이 있을경우 열 앞에 배열을 두게 작성한다
*/

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// 3차열 배열일때 [][][]을 3번 작성하면 된다
const demo: number[][][] = [[[1]]];
