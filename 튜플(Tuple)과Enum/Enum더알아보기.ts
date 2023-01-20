/*
enum을 생성하고 값을 지정하지 않으면 타입스크트는 0으로 시작하는 숫자값을 할당한다. 이는 변경이 가능합니다.
enum으로 작업할때 대부분의 경우 0에서 1씩 증가하는 숫자를 사용하게 된다.
enum을 문자열로 지정하는것도 가능하다.
다양한 타입이 섞은 enum또한 사용이 가능합니다. 
정리 : 한 묶음의 이름을 enum에 지정하면 계속해서 참조가 가능합니다.
*/

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
}

ArrowKeys.LEFT;
ArrowKeys.ERROR;
