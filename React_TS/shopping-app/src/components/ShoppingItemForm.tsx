import React, { useRef } from "react";

interface shoppingListFormProps {
  onAddItem: (item: string, age: number) => void;
}

function ShoppingItemForm({ onAddItem }: shoppingListFormProps): JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = textInputRef.current!.value;
    const Age = parseInt(ageInputRef.current!.value);
    onAddItem(newProduct, Age);
    textInputRef.current!.value = "";
    ageInputRef.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="form"></label>
      <input
        id="form"
        type="text"
        placeholder="Product Name"
        ref={textInputRef}
      />
      <input type="number" name="" id="" min={0} ref={ageInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingItemForm;

// UseRef 란 DOM에 있는 무언가에 대한 레퍼런스를 생성해서 코드에 엑세스 할수 있게 해주는것이다.
// current는 Ref에 있어서 아주 중요한 프로퍼티 입니다.
