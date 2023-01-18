const movies = ["Arrival", "The Thing", "Aliens"];

// 변수 타입을 애너테이션 처리하지 않고, 값을 초기 설정하지 않으면, 해당 변수의 타입은 "any"입니다
let foundMovie;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
