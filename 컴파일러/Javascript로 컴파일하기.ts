/*
타입스크립트 컴파일러를 구성하는 방법
*/

// tsc -init tsconfing.json 파일이 생성되는 이 파일을 통해 설정을 변경할수 있다.
// 내용을 작성하고 tsc Javascript로 컴파일하기.ts 터미널에 입력합니다.
// 자바스크립트 파일로 컴파일되어서 생성된것을 볼수있습니다.

interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const junifer: Chicken = {
  breed: "silkie",
  eggsPerWeek: 4,
  name: "hoho",
  age: 12,
};
