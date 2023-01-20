/*
인터페이스의 유용한 기능중 인터페이스 확장이 있다 즉 타 인터페이스로부터 상속 기능을 하는데 
객체 기반 프로그래밍에서 부모 클래스로부터 기능을 상속하는 클래스가 있는것과 유사한 개념이다.
인터페이스를 확장할때는 다수의 인터페이스를 확장할수도 있습니다.
*/

// 새로운 인터페이스를 만들고 Dog을 상속하였다
// 그럼 ServiceDog 에는 앞에서 작성했던 Dog의 속성들이 들어간다.

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "WOOF WOOF";
  },
};
