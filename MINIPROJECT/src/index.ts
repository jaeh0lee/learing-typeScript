/*
타입스크립트는 문서 객체, 즉 DOM 요소 및 기타 요소의 타입을 인지합니다.
 */

/*
타입스크립트 접근 방법에 non-null 단언 연산자가 있다. !(느낌표이다.)
코드 줄 뒤에 느낌표를 붙임으로써 절대 null이 되지 않는다고 타입스크팁트에 약속하는것이다.
하지만 non-null 방식은 값이 확실하게 존재하고 null이 아닐때만 사용한다.
그런 이유로 불확실한 런타임에서 작업할때는 방법을 사용하지 않는다.
*/

// const button = document.getElementById("btn")!;

// button?.addEventListener("click", () => {
//   alert("click");
// });

/*
 타입 단언
 만약 타입스크립트에 내가 더 많이 알고 있고 분명히 문자열 타입이라고 단연하려면 타입 단언 구문을 사용하면 됩니다.
 as 키워드를 타입 앞에 사용하면 된다.

 */

// let mystery: unknown = 4;
// const numChars = (mystery as string).length;

/*
타입 단언 2
타입스크립트에 inputdl 제네릭 HTML 요소가 아니라 HTML input 요소라는것을 타입 단언을 사용해 말했다.
*/

// const input = document.getElementById("todoinput")! as HTMLInputElement;
// const btn = document.getElementById("btn")! as HTMLButtonElement;

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });

/*
타입 단어의 대체 구문 
as 부분을 지우고 홀화살괄호(<>)를 사용해서 타입을 엑세스하거나 추가하고 단언하려는 타입의 변수를 뒤에 입력합니다.
앞부분의 타입을 지우면 변수의 제네릭 HTML 요소로 추론됩니다.
해당 구문은 덜 일반적이고 jsx에 지원하지 않으며 일반적으로는 해당 타입을 잘 사용하지는 않습니다.
*/

// const input = document.getElementById("todoinput")!;
// const btn = document.getElementById("btn")! as HTMLButtonElement;

// <HTMLInputElement>input;
