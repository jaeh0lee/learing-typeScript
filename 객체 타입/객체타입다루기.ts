/*
타입스크립트 객체 리터럴은 자바스크립와 같이 중괄호를 사용합니다.
객체는 여러 프로퍼티로 구성되어있고 각각의 프로퍼티는 다른 타입을 갖고 있습니다.
*/

// 자동으로 :(콜론) 뒤에 추론이 된다고 해고 에너테이션을 넣는게 좋다
// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "Jenkins" });
