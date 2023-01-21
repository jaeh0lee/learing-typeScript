/*
여러개의 파일은 자바스크립트 파일로 컴파일하는법을 학습합니다.
각각 따로 tsc 파일명 을 입력해서 컴파일링 하는 방법도 있지만 제네릭 tsc 명령어를 사용하면 파일안에 있는 모든 파일이 
자바스크립트로 컴파일링 되며 감시도 가능합니다.
타입스크립트는 기본적으로 모든.ts 파일을 확인하지만 일부를 무시하거나 한곳만 확인하게 할수 있습니다.
한곳만 확인하는건 앞서 설명드린 tsc 파일명을 입력하면 해당 파일만 컴파일링 됩니다. 

*/
interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`);
};
