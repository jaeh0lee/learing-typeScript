function twoFer(person: string = "you"): string {
  // string뒤에 = "you" 는 기본값(default)으로 설정하는것이다.
  return `One for ${person},one for me`;
}
twoFer("Elton");
console.log(twoFer());
console.log(twoFer("Elton"));

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));

// tip : 콘솔로그 확인하는 방법 tsc 파일명 해서 js파일로 컴파일 한뒤 node 파일명.js를 확인하면 된다잉 하핫
