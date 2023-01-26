"use strict";

class Player {
  // 메서드 앞에 static을 쓰면 개별 인스턴스가 아니라 클래스 자체에 속한다는것을 자바스크립트에 알릴수 있다.
  // 주로 생성 메서드 혹은 새로운 인스턴스나 여러 인스턴스를 생성하는 헬퍼를 들수 있다.
  // static은 프로퍼티나 메서드가 클래스에만 있다고 알려주는것이다.
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("error");
    }
    this.#score = newScore;
  }

  getScore() {
    return this.#score;
  }

  // #을 붙힘으로써 프라이빗 필드로 생성이 가능하며 외부에서는 엑세스 할수 없습니다.
  setScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log("BOOYAH");
  }

  loseLife() {
    this.numLives -= 1;
  }

  #secret() {
    console.log("Secret");
  }
}

// 상속을 통해 Player 클래스를 참조합니다. 이는 모든 메서드에 엑세스 할수 있는것입니다.
class AdminPlayer extends Player {
  constructor(first, last, powers) {
    // super()는 슈퍼클래스에 있는 constructor() 함수를 참조합니다.
    super(first, last);
    this.powers = powers;
  }
  jaeho = true;
}
const admin = new AdminPlayer("kwon", "nakyong", ["lee", "jaeho"]);

// const player1 = new Player("lee", "jaeho");
// console.log(player1.numLives);
// player1.loseLife(); // console.log(player1.numLives);
// const player2 = new Player("kwon", "nakung");
// console.log(player1.getScore());
// console.log(player1.setScore(28));
// console.log(player1.getScore());
// console.log(player1.score);
// player1.score = 24;
// console.log(player1.score);
// console.log(player1.fullName);
// player1.fullName = "Amy Adams";
// console.log(player1.fullName);
