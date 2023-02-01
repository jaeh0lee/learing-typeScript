import React from "react";
import Item from "../models/item";

interface propsShoppingList {
  items: Item[];
}

function ShoppingList({ items }: propsShoppingList) {
  return (
    <div>
      <h1>jaeho world</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} = {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
