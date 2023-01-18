/* 
never은 타입스크립트의 고유의 타입이다. 자바스크립트의 타입이 아니며 흔하게 사용되지 않는다.
never타입은 몇가지 시나리오에서 사용된다.
함수의 반환 타입으로 쓰이는 경우, 절대 반환되지 않아야 할 함수를 애너테이션 처리할때 쓰이는 경우
void와는 다르다 void는 아무것도 반환하지 않는 경우
never은 함수가 아무것도 반환하면 안된다는것을 나타내기 위해 쓰이며 일반적으로 예외를 발생시키는 함수이다.
어떤 루프에서 연속적으로 실행되는 함수이며 절대 끝나지 않는다.
*/

function makeError(msg: string): never {
  throw new Error(msg);
}

// 'string' 형식은 'never' 형식에 할당할 수 없습니다.

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING");
  }
}

// 정리 never타입을 사용하는 함수는 반환하는 값이 없어야 한다
