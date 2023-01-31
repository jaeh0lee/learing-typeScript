/*
모듈이란 파일간 코드를 공유하는 다양한 방법이다.
네임스페이스란 타입스크립트에서 코드를 구성하는 오래된 방식이다.
*/

/*
모듈없이 작업하기.
타입스크립트는 ES 모듈 구무느 즉 ES6 모듈을 지원하며 import/export 키워드를 사용합니다.
해당 키워드를 통해 파일간 코드를 공유합니다. 

*/

/*
일반적으로 자바스크립트 파일에서 파일별로 스크립트가 달라서 파일에서 다른 항목에 엑세스 하려면 올바른 순서로 포함시켜야 합니다.
 */

/*
ES 모듈, 가져오기와 내보내기는 최신브라우저에서만 사용할수 있어서 다른 오류가 발생할수 있다.
*/

/*
export default는 파일이나 모듈마나 하나만 만들수 있습니다.
*/
import { sample, add } from "./utils.js";
import User, { userHelper } from "./User.js";

console.log(sample([12, 3, 34]));
console.log(add(1, 2));

const user = new User("jaeho", "woghfghf@naver.com");
console.log(user.email);
console.log(user.logout());
