interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string; // 선택적 프로퍼티
}

const thomas: Person = {
  first: "Lee",
  last: "jaeho",
  nickname: "HO",
  id: 1231,
};

thomas.id = 123; // 읽기전용이라 속성을 변경할수 없다
thomas.first = "kwon";
