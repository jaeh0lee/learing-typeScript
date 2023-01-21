/*
타입스크립트에게 컴파일할 파일과 무시할 파일을 구분하는데 사용되는 두가지 옵션이 있습니다.
inclue를 사용해 광범위하게 전체디렉터리를 포함하도록 설정합니다.
exclude를 사용해서 전체디렉터리에서 컴파일을 제외할 파일을 설정하는것입니다.
쉽게 말해 해당폴더의 모든 항목을 포함한 다음 필요없는 X 또는 Y 파일을 제외합니다.
files 옵션이 적용되면 include 옵션은 아무일도 하지 않습니다.
*/

/*
1. include
src디렉터리만 포함하여 컴파일링 하라고 명령하는법은 tsconfig에서 "include"를 입력하고 해당 디렉터리(src)를 포함하라고 선업합니다. 그런뒤 tsc를 입력하면 src 폴더 안에 있는 타입스크립트 파일만 js로 컴파일링 된걸 볼수 있습니다.
*/

/*
2. exclude를 사용하면 무시할 파일을 지정할수 있습니다. src폴더에 무시할 파일을 하나 추가하고 tscoing에 exclude를 입력
그리고 (tsc 무시할 파일)을 작성한뒤 tsc를 입력하면 무시할 파일은 js로 컴파일링 되지 않습니다.
사용시 주의사항도 존재합니다 기본값이 큰 영향을 미칩니다 프로젝트의 node_modules 디렉터리가 있다면 그 안에 ts파일을 포함한 여러 의존성이 다운로드도리 가능성이 크기 때문에 타입스크립트가 자동으로 제외합니다.
exclude 옵션을 사용해 제외하고 싶은 항목을 지정했다면 node_modules이 있는 경우라면 꼭 추가해줘야 합니다.
*/

// 정리 : include 와 exclude은 쌍으로 작동합니다. 원하는 파일을 모두 포함한 다음 exclude를 통해 재와시킬 파일을 지정해줍니다.
// 처음 살펴본 files의 옵션은 독립적으로 사용할수 있는 옵션입니다.
