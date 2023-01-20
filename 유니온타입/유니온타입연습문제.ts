// 연습문제 1
let highScore: number | boolean;
highScore = 1;
highScore = false;

// 연습문제 2
const stuff: number[] | string[] = [];
// 연습문제 3
type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

//연습문제 4
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
//연습문제 5
type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  r: number;
  g: number;
  b: number;
};

const color: (RGB | HSL)[] = [];

//연습문제 6

const graet = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello, ${p}`);
    }
  }
};
