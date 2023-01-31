/*
export 키워드를 사용하지 않으면 타입스크립트 모든 코드가 한 전역스코프에 있다고 간주합니다.
*/
export function add(x, y) {
    return x + y;
}
// 제너릭 함수
export function sample(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
