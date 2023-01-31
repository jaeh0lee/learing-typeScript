// 자바스크립트에서 import type은 무조건 사라집니다.
// 해당 구문은 타입을 import 해올때 사용합니다.
// 함수나 클래스를 가져올떄는 적용할수 없습니다.
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} log out!!`);
    }
}
export function userHelper() {
    console.log("User help");
}
// 파일에서 내보내려는 항복이 해당 클래스뿐이거나 주요 항목이 이 클래스라면 export default를 사용하면 해당 항목을 가져올떄 중괄호{}를 작성하지 않고 단일로 파일경로를 작성하면 됩니다.
