/*
 */

function printAge(age: number | string) {
  console.log(`you are ${age} years old`);
}

printAge(23);
printAge("87");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
    price;
  }
  return price * tax;
}

// 타입 좁히기란 타입을 확인하는 단계를 추가하는것이다
// typeof < 이게 핵심인듯? 타입스크립트는 확인하고자 하는 조건문 논리를 추가했다는걸 if문 안에서 확인함
