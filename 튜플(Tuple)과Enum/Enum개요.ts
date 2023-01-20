/*
enum은 많은 언어에서 사용되면 자바스크립트에는 없고 타입스크립트에는 있습니다.
enum은 코드 전체에서 재사용할수있는 명명된 상수의 집합이다.
*/

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const Mystatus = OrderStatus.DELIVERED;

function isDelievered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelievered(OrderStatus.RETURNED);
