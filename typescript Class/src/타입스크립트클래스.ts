/*
타입스크립트에 알려주지 않고 프로퍼티와 생성자를 초기화 할수 없습니다.
*/

class Player {
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const hoho = new Player("lee", "jaeho");
