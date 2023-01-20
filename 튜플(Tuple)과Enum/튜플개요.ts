/*
튜플(Tuple)은 타입스크팁트의 고유한 타입입니다. 자바스크립트에는 없는 개념입니다.
개념은 본질적 배열타입이지만 고정된 길이를 갖는 배열이며 고정된 타입세트로 순서가 정렬됩니다.
튜플은 길이와 타입이 고정되어 있습니다.
*/

let myTuple: [number, string]; // 튜플은 먼저 숫자 -> 문자열 순으로 와야합니다 순서가 바뀌면 안됩니다.

const color: [number, number, number] = [123, 123, 1231]; // 숫자 3개만 올수있고 그 이상은 안됩니다.
