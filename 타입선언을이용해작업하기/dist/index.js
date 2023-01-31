"use strict";
/*
제 3자 라이브러리
Axios는 HTTP 요청을 만들떄 도움이 됩니다.
Axios 에는 get과 post 메소드가 존재합니다.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("안녕!");
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log("Error!");
//   });
// axios
//   .get<User[]>("https://jsonplaceholder.typicode.com/users/")
//   .then((res) => {
//     console.log("안녕!");
//     res.data.forEach(printUser);
//   })
//   .catch((e) => {
//     console.log("Error!");
//   });
// function printUser(user: User) {
//   console.log(user.name);
//   console.log(user.email);
//   console.log(user.phone);
// }
axios_1.default.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
    console.log("얏호 성공");
    res.data.forEach(jaeho);
});
function jaeho(user) {
    console.log(user.adress);
    console.log(user.company);
    console.log(user.id);
}
