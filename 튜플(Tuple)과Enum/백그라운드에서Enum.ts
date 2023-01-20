/*
모든 요소들은 컴파일된 자바스크립트 코드에서 제거가 됩니다, 하지만 Enum은 실제로 자바스크립트에 영향을 미치며
추가적인 코드로 표시됩니다.
*/

// enum OrderStatus { // 앞에 const 를 붙이면 컴파일된 js 상에는
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }

// const order = {
//     orderNumber: 213123123,
//     status: OrderStatus.PENDING,
//   };

const enum OrderStatus { // 앞에 const 를 붙이면 컴파일된 js 상에는
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// 이처럼 OrderStatus 존재 자체를 모두 삭제해 버리고 참조된 모든값을 지정된 값으로 대채한다.
// 변수를 선언할때 사용하는 const랑 완전 다른것이다.

const order = {
  orderNumber: 213123123,
  status: 0 /* OrderStatus.PENDING */,
};
