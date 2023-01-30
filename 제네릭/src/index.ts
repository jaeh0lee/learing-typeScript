/*
타입스크립트에서 제네릭은 여러 타입에서 사용할수있는 재사용 함수나 재사용 클래스를 정의할수 있게 해주는 특수기능 또는 특수 구문이다.
*/

// const jaeho: Array<number> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.log(inputEl);
// inputEl.value = "fuck";

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
// console.log(btn);

// 제네릭 함수
// function numberIdnetity(item: number): number {
//   return item;
// }

// function stringIdnetity(item: string): string {
//   return item;
// }

// function booleanIdnetity(item: boolean): boolean {
//   return item;
// }

// function identity(item: any): any {
//   return item;
// }

// interface Cat {
//   name: string;
//   age: number;
// }

// function identity<T>(item: T): T {
//   return item;
// }

// identity<string>("jaeho");
// identity<number>(7);

// 다른 제네릭 함수 사용해보기
// function  getRandomElement<T>(list: T[]): T {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }

// console.log(getRandomElement<string>(["a", "b", "c"]));
// console.log(getRandomElement<number>([1, 2, 3]));
// console.log(getRandomElement<boolean>([true, false, true]));

/* 제네릭 함수에 타입을 선언할 필요가 없습니다, 
타입을 선언하지 않아도 타입스크립트는 파라미터 혹은 인수를 통해 문자열 배열이란걸 추론할수 있습니다.
하지만 모든 제네릭 함수에 적용되는건 아닙니다, 타입 파라미터를 전달해야 하는 경우도 많습니다.
querySelector, getElementById 같은 함수는 타입을 추론할수가 없습니다.
*/
// getRandomElement([1, 23, 123, 21424, 1]);

// 여러 타입을 가진 제네릭
// function merge<T, U>(object1: T, object2: U) {
//   return {
//     ...object1,
//     ...object2,
//   };
// }

// const comboObj = merge({ name: "colt" }, { pets: ["blue", "hoho"] });

// 타입제한 추가하기
// function merge<T extends object, U extends object>(object1: T, object2: U) {
//   return {
//     ...object1,
//     ...object2,
//   };
// }

// const comboObj = merge({ name: "colt" }, { pets: ["blue", "hoho"] });
// console.log(merge({ name: "Colt" }, { num: 9 }));

// interface Lengthy {
//   length: number;
// }

// function getLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }

// console.log(getLength("hello1"));

// 기본 타입 파라미터

function makeEmptyListArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyListArray();
const bools = makeEmptyListArray<boolean>();

// 제네릭 클래스 작성

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlayList {
  public videos: Video[] = [];
}

class SongPlayList {
  public songs: Song[] = [];
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();

const videos = new PlayList<Video>();
