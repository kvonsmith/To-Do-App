import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [TodoList, setTodos] = useState (initialState);
  const [editTodo, setEditTodo] = useState (null);
 
useEffect(() =>{
  localStorage.setItem("todos", JSON.stringify(TodoList));
}, [TodoList]);

  return (
    <div className="container">
      <div className="app-wrapper"> 
      <div>
      <Header />
      </div>
      <div>
        <Form
        input={input}
        setInput={setInput}
        todos={TodoList}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
      </div>
      <div><TodosList 
      todos={TodoList} 
      setTodos={setTodos}
      setEditTodo={setEditTodo}
      
      />
      </div>
      </div>
       </div>
  );
};

export default App;