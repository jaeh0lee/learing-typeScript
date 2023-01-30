/*
타입 좁히기란 주로 명확하지 않은 타입이 있을때 사용하는것으로 
그런 타입을 유니온타입이라고 하며 이를 보다 명확하게 좁히는것이다.
그렇게 타입을 가장 좁히는 쉬운방법은 typeof라는 가드를 사용하는것입니다.
typeof는 문자열, 숫자, 불리언과 같은 원시값을 처리할때 유용하다.

*/

// function triple(value: string | number) {
//   if (typeof value == "string") {
//     return value.repeat(3);
//   }
//   return value * 3;
// }

// console.log(triple(123));

/*
타입 좁히기의 다른 방법 
Truthiness 가드를 사용해서 간단하고 명확하게 null, undefined, falsy값을 좁히거나 제거할수 있다.
*/
// const el = document.getElementById("#idk");
// if (!el) {
//   el;
// } else {
//   el;
// }

// const jaeho = (word?: string) => {
//   if (word) {
//     for (let char of word) {
//       console.log(char);
//     }
//   } else {
//     console.log("fuck");
//   }
// };

// console.log(jaeho(""));

// 비교연산자를 사용한 타입 좁히기
// function fuck(x: string | number, y: string | boolean) {
//   if (x === y) {
//     x.toUpperCase();
//   }
// }

// in 연산자를 사용해서 타입을 좁히기
// 대부분의 경우에는 인터페이스나 타입별칭을 사용해 객체로 작업을 하게된다.

// interface Movie {
//   title: string;
//   duration: number;
// }

// interface TVShow {
//   title: string;
//   numEpisodes: number;
//   episodeDuration: number;
// }

// function getRuntime(media: Movie | TVShow) {
//   if ("numEpisodes" in media) {
//     return media.numEpisodes * media.episodeDuration;
//   }
//   return media.duration;
// }

// console.log(getRuntime({ title: "jaeho", duration: 20 }));
// console.log(
//   getRuntime({ title: "hooho", numEpisodes: 300, episodeDuration: 100 })
// );

// // instanceOf 좁히기
// function getDate(date: string | Date) {
//   if (date instanceof Date) {
//     console.log(date.toUTCString);
//   } else {
//     console.log(new Date(date).toISOString());
//   }
// }

// class FuckingUser {
//   constructor(public username: string) {}
// }

// class Company {
//   constructor(public name: string) {}
// }

// function NameLee(singer: FuckingUser | Company) {
//   if (singer instanceof FuckingUser) {
//     singer;
//   } else {
//     singer;
// }

// // 타입 명제를 이용한 타입 좁히기

// interface Cat {
//   name: string;
//   lives: number;
// }

// interface Dog {
//   name: string;
//   breed: string;
// }

// function isCat(animal : Cat | Dog):  animal is Cat{
//   return (animal as Cat).lives ! == undefined
// }

// function getAnimal(animal: Cat | Dog): string{
// if(isCat(animal)){
//     return "fuck"
// } else{
//     animal
// }
// }

// 판별 유니온
// 타입 판별에 도움이 되는 패턴
// Kind 를 작성해줌으로서 구분을 지어줌

// interface Rooster {
//   name: string;
//   weight: number;
//   age: number;
//   kind: "rooster";
// }

// interface Cow {
//   name: string;
//   weigth: number;
//   age: number;
//   kind: "cow";
// }

// interface Pig {
//   name: string;
//   weigth: number;
//   age: number;
//   kind: "pig";
// }

// type FarmAnimal = Rooster | Pig | Cow;

// function getFarmAnimalSound(animal: FarmAnimal) {
//   switch (animal.kind) {
//     case "pig":
//       return "Oink!";
//     case "cow":
//       return "umme!";
//     case "rooster":
//       return "KOKO!";
//   }
// }

// const jaeho: Rooster = {
//   name: "jaeho",
//   weight: 2,
//   age: 15,
//   kind: "rooster",
// };

// console.log(getFarmAnimalSound(jaeho));

// 소진검사, never검사 | 타입

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weigth: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weigth: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Rooster | Pig | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "umme!";
    case "rooster":
      return "KOKO!";
    case "sheep":
      return "ME!!!";
    default:
      // 디폴트를 추가하면 절대로 여기까지 내려오지 않게 할수 있습니다. 모든 case가 올바르게 처리되면 여기까지 오지 않는다.
    //   const shouldNeverGetHere: never = animal;
      return shouldNeverGetHere;
    // never 타입은 어디든 할당 가능하지만 어떤 타입도 never에 할당할수 없습니다.
  }
}

const jaeho: Rooster = {
  name: "jaeho",
  weight: 2,
  age: 15,
  kind: "rooster",
};
