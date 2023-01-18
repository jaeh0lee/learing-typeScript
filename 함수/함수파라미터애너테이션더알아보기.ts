// 여러개의 파일을 작업할때 아래와 같이 타입의 유형을 지정해주면 아주 유용하다.
// 여러개의 타입을 적을때 순서가 중요합니다, 문자열 -> 숫자 -> 불리언 순으로 적어주어야 합니다.

const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("chickenFace", 76, false);
// 3개의 인수가 필요한데 2개를 가져왔습니다.
