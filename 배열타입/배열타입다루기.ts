/*
타입스립트에서 배열 다루기 
숫자나 문자열 배열을 만들고 싶다면 문자열이나, 숫자열 , 불리언값 뒤에 [](배열)을 입력해주면 됩니다.
만약 이렇게 앞서 설명 드린 문자열 등등을 붙이지 않고 그냥 빈 배열만 추가하면 모든 타입이 가능한 배열이라 이해하고
어떤 타입도 될수 있습니다. 
*/

const activeUsers: string[] = ["hi"];
activeUsers.push("Tony");

const ageList: number[] = [45, 5];
ageList[0] = 99;
