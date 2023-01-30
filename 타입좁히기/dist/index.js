"use strict";
/*
타입 좁히기란 주로 명확하지 않은 타입이 있을때 사용하는것으로
그런 타입을 유니온타입이라고 하며 이를 보다 명확하게 좁히는것이다.
그렇게 타입을 가장 좁히는 쉬운방법은 typeof라는 가드를 사용하는것입니다.
typeof는 문자열, 숫자, 불리언과 같은 원시값을 처리할때 유용하다.

*/
function getFarmAnimalSound(animal) {
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
            const shouldNeverGetHere = animal;
            return shouldNeverGetHere;
        // never 타입은 어디든 할당 가능하지만 어떤 타입도 never에 할당할수 없습니다.
    }
}
const jaeho = {
    name: "jaeho",
    weight: 2,
    age: 15,
    kind: "rooster",
};
