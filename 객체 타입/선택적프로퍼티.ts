/* 
선택적 프로퍼티를 만드는 방법은 z뒤에 물음표를 넣어주면 된다. 
타입 에너테이션 전에는 필수가 아니라고 타입스크립트에 전달하는것이다
*/

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };
