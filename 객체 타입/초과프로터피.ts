/*
객체 리터럴은 알려진 프로퍼티만 지정할수 있다
직접 객체 리터럴을 전달하는 경우에는 오류를 띄우지만 사전의 별도의 변수로 정의하는 과정을 거치면 지정된 프로퍼티 외에는 그냥 무시하게 된다.
*/

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "nick", last: "ho" });

// 변수에 다른 타입의 값을 저장하고 함수를 호출하면 오류없이 잘 나온다.
const singer = { fist: "ho", last: "jawho", age: 22 };
// printName(singer);
