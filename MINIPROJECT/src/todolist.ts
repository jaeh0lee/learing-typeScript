/*
  todolist를 만들면서 익숙해지기
  로컬스토리지란 브라우저 기반 스토리지이다. [텍스트나 문자열만을 저장할수 있는 배열  ]
 */

// 인터페이스 객체를 이용해서 해당 객체를 배열에 담아 로컬 스토리지에 쉽게 저장하기
interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")! as HTMLFormElement;
const list = document.getElementById("todolist")!;

// 배열에 Todo 타입 지정
const todos: Todo[] = readTodos();

// 로컬스토리지에 저장되있는 값을 초기페이지에 불러오기
todos.forEach(createTodo);

// 로컬스토리지에 저장되어 있는 값을 가져오기
function readTodos(): Todo[] {
  const todosJson = localStorage.getItem("todos");
  if (todosJson === null) return [];
  return JSON.parse(todosJson);
}

//check박스를 클릭하면 로컬스토리지에 리스트 저장하기
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

/* 
 함수로 만들기
 함수로 만든뒤에 파라미터에 event를 입력하면 암묵적으로 any타입이라고 타입스크립트가 생각을 합니다.
 타입스크립트에 어떻게 함수가 호출되고 e가 무엇인지를 알려주어야 합니다.
 그러기 위해서 SubmitEvent라는 타입을 e에게 알려줍니다 
 정리하자면 함수 정의가 분리되고 참조만 전달하면 타입스크립트가 추론을 못하기때문에 SubmitEvent 타입의 변수라고 해줘야 타입 추론이 가능한것입니다.
*/

// 이벤트리스너 함수
function hanldeSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  // 로컬스토리지에 값 추가
  createTodo(newTodo);
  todos.push(newTodo);
  saveTodos();
  input.value = "";
}

// 리스트 함수 따로 생성
function createTodo(todo: Todo) {
  const newLI = document.createElement("li")!;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", hanldeSubmit);
