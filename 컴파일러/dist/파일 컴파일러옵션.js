/*
tip : 감시 모드는 항상 켜두는게 좋습니다.
*/
/*
타입스크립트가 특정 하위 집합의 파일만 컴파일하도록 설정하는 방법(컴파일링이 필요없는 파일이 존재할수 있음)

첫번쨰 방법 : Files라는 옵션을 사용

files를 사용하면 프로그램에 포함할 파일의 허용 목록을 특정할수있습니다,

이는 compiler 옵션의 일부로 작동하지 않습니다.

tsconfig안에  compilerOptions 코드가 존재하는데 files 옵션을 이곳에 작성하는것 아니며 compilerOptions 밖에 코드를 작성해야 합니다. 설정 방법은 타입스크립트에 포함할 모든 파일을 나열하는것이며 이는 소규모 프로젝트에 적합합니다.
files안에 컴파일링을 무시한 파일을 작성하면 tsc를 입력해도 해당 폴더는 컴파일링 되지 않습니다.


 */
