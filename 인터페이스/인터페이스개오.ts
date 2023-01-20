/*
타입스크립트에서 가장 흔히 사용되는 기능입니다.
인터페이스는 오직 객체의 형태를 묘사하는데에만 사용됩니다

*/

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 123, y: 123 };

// 인터페이스로 만든객체
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 123 };
