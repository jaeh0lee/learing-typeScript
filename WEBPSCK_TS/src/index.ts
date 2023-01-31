/*
웹팩이란 의존성을 가진 수십, 수백개의 파일로 구성된 복잡한 애플리케이션 처리를 돕습니다.
해당 파일들은 내보내기, 가져오기나 다른 파일로 나누기가 이루어지고 
제 3자 라이브러리를 갖습니다.
웹팩은 이 모든걸 모아서 번들을 만듭니다.
모두 합치고 압축해서 브라우저에 넣을수 있는 작은 번들로 만듭니다.

예를들면 백여개의 자바스크립트 파일이 하나로 합쳐져서 한 스크립트로 불러올수 있는 번들 파일이 됩니다.
*/

import User from "./User";
import { add, multiply, divide } from "./utils";
console.log("hi");
import Fuck from "./fuck";

const user = new User("jaeho", "woghfghf@naver.com");
console.log(user.jaeho());

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const fuck = new Fuck("na", "vi");
console.log(fuck);
