/*
제 3자 라이브러리 
Axios는 HTTP 요청을 만들떄 도움이 됩니다.
Axios 에는 get과 post 메소드가 존재합니다.
*/

import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {
    stree: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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

axios.get<User[]>("https://jsonplaceholder.typicode.com/users/").then((res) => {
  console.log("얏호 성공");
  res.data.forEach(jaeho);
});

function jaeho(user: User) {
  console.log(user.adress);
  console.log(user.company);
  console.log(user.id);
}
