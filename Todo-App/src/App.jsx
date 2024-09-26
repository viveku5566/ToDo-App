import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./components/App.css";
import TodoItem from "./components/Todoitem";
import TodoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`Added new item is ${itemName} and Date is : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center>
      <div className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems >= 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
