/*
  튜플은 선택사항이지 필수는 아닙니다.
  실제로 튜플을 사용할 일은 많지 않습니다. 
  정리 : 튜플은 고정된 길이 타입의 배열이며 배열 순서의 상관이 있다, 튜플 타입을 생성하는 구문은 배열 대괄호 안에 원하는 타입을 순서대로 입력하는것이다.
  */

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// const goodRes: HTTPResponse = ["OK", 200]; // 순서가 뒤바뀌어 있어 오류를 발생시킨다.

goodRes.push("jaeho");
// 끝에 푸시하는경우 오류가 나타나지 않습니다, 숫자 뒤에 문자열이 오고 다른것은 없는 이 패턴을 따르지 않는다.
// 튜플은 백그라운드에서 실행되는 배열이고 그래서 배열이 생성된후 푸시를 해도 오류를 발생시키지 않는것입니다.
// 이는 백그라운드에서 튜플이 구현되는 방식뿐만 아니라 자바스크립트 배열 작동방식과도 연관이 있습니다. <튜플의 한계>
