import { type } from "os";

// 인터페이스(객체만 사용 가능 )
export interface Person {
  username: string;
  email: string;
}

// 유니온 타입
export type Color = "red" | "green" | "blue";
