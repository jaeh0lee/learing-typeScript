/*
 기능을 하는 타입이며 이 타입은 여러타입을 앰퍼샌드(&) 기호로 결합합니다.
 */

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; // 두개의 타입을 하나의 타입으로 묶음.

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numbLives: number;
};

type Dog = {
  bredd: string;
};

// 새로운 뭔가를 추가하고 싶으면 앰퍼샌트를 추가한뒤 새로운 타입을 작성해주면 된다.
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numbLives: 7,
  bredd: "Husky",
  age: 12,
};
