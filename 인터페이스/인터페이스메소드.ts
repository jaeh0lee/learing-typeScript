/*
인터페이스 객체 안에서 메소드 선언에 대하여 설명합니다.
 */

interface lee {
  readonly id: number;
  fist: string;
  last: string;
  nickname: string;
  //   sayHi: () => string; // sayHi 라는 메서드
  sayHi(): string;
}

const hoho: lee = {
  id: 123123,
  fist: "jaeoh",
  last: "me",
  nickname: "ddorae",
  sayHi: () => {
    return "hello";
  },
};
