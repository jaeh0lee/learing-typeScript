/*
아래의 예시를 보면 Dog를 두번 선언한걸로 볼수 있는데 이는 Dog를 생성하고 내용을 추가해 확장한것이다.
이는 인터페이스 고유기능이다.
*/

//  처음 interface
// interface Dog {
//   name: string;
//   age: number;
// }

//  내용 확장
// interface Dog {
//   breed: string;
//   bark(): string;
// }

//  2개의 Dog 인터페이스 선언이 조합된 상태이다.

// const elton: Dog = {
//   name: "Elton",
//   age: 0.5,
//   breed: "Australian Shepherd",
//   bark() {
//     return "WOOF WOOF";
//   },
// };
