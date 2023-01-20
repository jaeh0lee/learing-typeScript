/*
유니온 타입을 이용하면 여러 타입의 값을 가질수 있습니다.
 */

let age: string | number = 21;

age = 23;
age = "hello";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.23, long: 23.323 };
