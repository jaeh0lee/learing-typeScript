/*
1. 타입스크립트에 알려주지 않고 프로퍼티와 생성자를 초기화 할수 없습니다.
2. 타입스크립트 class에서도 readonly 기능을 사용할수 있습니다.
3. 자바스크립트와 타입스크립트의 모든 클래스 및 프로퍼티, 메서드는 기본값이 public 입니다.
4. 자바스크립트의 접근제어자(#)과 private을 함께 사용하지 못한다.
5. 타입스크립트에는 단축구문이라는게 존재합니다, 파라미터 프로퍼티라고도 부른다 
6. 타입스크립트는 클래스에 get 과 set를 자바스크립트와 똑같이 사용할수 있습니다.
7. 타입스크립트 클래스에서 protected는 상속 작업을 할떄 사용됩니다. 외부에서 엑세스 하는건 불가능하지만 
   자식 클래스는 엑세스가 가능합니다.
8. private은 해당 클래스에서만 엑세스가 가능하며 상속이 불가능 합니다.
9. 클래스의 확장은 일반적으로 기능을 공유하는게 목적이다.
10. abstract 클래스는 자바스크립트에 존재하지 않는 클래스 입니다.
*/

// (단축전 원문)

/* class Player {
  // 미리 타입을 지정해줘야 한다.
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.Son();
  }

  Son() {
    console.log("korea soccer Player");
  }
}

const hoho = new Player("lee", "jaeho");
*/

//(단축구문)

class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {
    this.Son();
  }

  Son() {
    console.log("korea soccer Player");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("fuck you remove typing");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public MinJae: string = "top barrier";
  maxScore() {
    this._score = 1000;
  }
}

interface Tiger {
  color: string;
}

interface Printable {
  print(): void;
}

class Animal implements Tiger {
  constructor(public color: string) {}
}

class Girltiger implements Tiger, Printable {
  constructor(public male: string, public color: string) {}
  print() {
    console.log(`${this.male} ${this.color}`);
  }
}

/* 
abstract의 뜻은 첫번쨰 새 클래스를 만들수 없습니다. 
cat을 인스턴스화 하려고 하면 해당 클래스의 인스턴스는 만들수 없다고 뜹니다.
만들수 없는 클래스가 왜 필요하냐면 해당 클래스는 패턴을 정의하고 자식클래스에서 시행돼야하는 메서드를 정의하는데 사용됩니다.
*/

// abstract class Cat {}
// new Cat();  추상 클래스의 인스턴스를 만들 수 없습니다

// 해당 클래스를 확장하려면 getPay 메서드를 반드시 사용해야 합니다.
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("hello");
  }
}

class FullTImeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
  greet() {
    console.log("fuck");
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const jaeho = new FullTImeEmployee("lee", "jaeho", 300);
const hoit = new PartTimeEmployee("hi", "jae", 300, 1000);

console.log(jaeho.getPay(), jaeho.greet());
console.log(hoit.getPay());

const Tiger = new Animal("yellow");
const girltiger = new Girltiger("girl", "black");

const hoho = new Player("lee", "jaeho", 100);
const pipi = new SuperPlayer("kim", "minjae", 1000);

hoho.fullName;
hoho.score = 10;
