/*
인터페이스 내에는 특정 메서드가 요구하는 파라미터와 타입 또한 지정을 할수 있다.
*/
var shoes = {
  name: "Blue sued Shoes",
  price: 100,
  applyDiscount: function (jaeho) {
    var newPrice = this.price * (1 - jaeho);
    this.price = newPrice;
    return this.price;
  },
};
console.log(shoes.applyDiscount(0.6));
