//연습문제 1
const ages: number[] = [];

//연습문제 2

const gameBoard: string[][] = [];

//연습문제 3
type Product = {
  name: string;
  price: number;
};

//연습문제 4
function getTotal(products: Product[]): number {
  let total = 0;
  {
  }
  for (let product of products) {
    total += product.price;
  }
  return total;
}
{
}
