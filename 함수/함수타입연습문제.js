function twoFer(person) {
    if (person === void 0) { person = "you"; }
    // string뒤에 = "you" 는 기본값(default)으로 설정하는것이다.
    return "One for".concat(person, ",one for me");
}
twoFer("Elton");
console.log(twoFer());
console.log(twoFer("Elton"));
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
