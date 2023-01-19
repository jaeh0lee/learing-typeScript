// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "Jenkins" });

// 다른 방식의 객체 리터럴
let coordinate: { x: number; y: number } = { x: 32, y: 33 };

// 객체를 패턴에 따르는 형태로 반환한다.
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
