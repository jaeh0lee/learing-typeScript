/* 
readonly는 자바스크립트 키워드가 아닌  타입스크립트에서 사용하는 제어자로 객체 내 특정 프로퍼티를 표시하거나
또는 배열이나 클래스에 접근할때 사용한다 객체의 프로퍼티를 readonly로 표시하면 타입스크립트에서는 
우리가 프로퍼티에 쓰기를 해서 변경항때 경고를 해준다.
 */

// 숫자로 구성된 이 코드는 절대로 변경이 안된다고 가정해보자

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1234,
  username: "catrgirl",
};

console.log(user.id);
user.id = 12312; // 읽기 전용 속성이므로 'id'에 할당할 수 없습니다. 라는 에러 메세지를 띄어준다.
