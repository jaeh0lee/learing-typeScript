/*
대문자로 시작하는 Array에 따라오는 홑화살괄호(<>)안에 타입을 선언합니다.  
*/

// 두 구문이 의미하는 바는 같다
const bools: Array<boolean> = [];
// const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
