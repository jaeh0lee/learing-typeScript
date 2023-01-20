// 1. 두개의 인터페이스를 생성하였습니다.

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// 생성한 인터페이스를 Engineer 인터페이스에 상속하여

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

// 상수를 생성합니다.

const Toby: Engineer = {
  name: "jaeho",
  id: 12312,
  email: "woghfhgf@naver.com",
  level: "Hi",
  languages: ["korea", "English", "Germerny"],
};

// 정리 : 이렇게 작성된 로직이 바로 다중 상속의 예시입니다.
