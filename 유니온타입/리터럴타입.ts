/*
리터럴타입은 유니온 타입과 항상 같이 쓰는걸 볼수있다.

*/
// 변수 zero의 타입은 0이며 리터럴값인 0을 갖는다.
let zero: 0 = 0;

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

// custom type
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
