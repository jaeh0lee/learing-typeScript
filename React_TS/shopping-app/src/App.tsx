import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingItemForm from "./components/ShoppingItemForm";
import { v4 as getId } from "uuid";

function App() {
  // 상태는 최상단 컴포넌트에서 이루어 지는게 좋다.

  // useState을 사용할때 제네릭 타입을 제공하고 시작값을 넣어주면 항상 상태를 지니는 동일한 배열을 반환합니다.

  const [items, setItems] = useState<Item[]>([]);

  const AddItem = (name: string, age: number) => {
    setItems([...items, { id: getId(), name, age }]);
  };

  // const items = [
  //   { id: 1, name: "Jane", age: 24 },
  //   { id: 2, name: "Park", age: 21 },
  //   { id: 3, name: "Kim", age: 20 },
  //   { id: 4, name: "Lee", age: 23 },
  // ];

  return (
    <>
      <ShoppingList items={items} />
      <ShoppingItemForm onAddItem={AddItem} />
    </>
  );
}

export default App;
