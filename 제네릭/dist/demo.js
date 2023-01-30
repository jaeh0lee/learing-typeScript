"use strict";
// function getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }
// TSX파일로 작업하면서 제네릭 함수인 화살표 함수를 작성할땐 후행 쉼표를 붙이지 않으면 오류가 발생하게 됩니다.
const getRandomElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
