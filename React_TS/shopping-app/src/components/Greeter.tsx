import React from "react";

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person}</h1>;
}

// 구식 문법
// const Greeter: React.FC = () => {
//   return <h1>hello world</h1>;
// };

export default Greeter;

// React에는 타입정의가 없는 TypeScript가 많습니다.
