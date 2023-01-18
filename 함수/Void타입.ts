/*
void는 변수가 아닌 함수에서 주로 사용됩니다. 아주 드물게 사용됨 ㅎㅎ 
아무것도 반환하지 않는 함수의 반환타입으로 사용한다.
*/

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
// 함수이름에 마우스를 가져다보면 타입스크립트가 반환값이나 반환 타입을 void로 추론하고 있다.
// 위 함수는 아무것도 반환하지 않는다.
// 함수의 반환타입을 void로 에너테이션 처리할때 사용한다., 아무것도 반환하지 않는 하나의 방법이다.

// quiz

function secondsInDay() {
  return 24 * 60 * 60;
}
// TypeScript는 이러한 경우 반환 타입을 추론할 수 있습니다.

function doNothing() {
  2 + 2;
}

// 함수가 값을 참조하지 않으면 , 타입스크립트는 해당 함수의 반환타입을 void로 추론한다.
