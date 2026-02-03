"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { Todo } from "./types";
import { TodoItem } from "./TodoItem";
import { TodoFilter } from "./TodoFilter";

type FilterType = "all" | "active" | "completed";

 export default function TodoList({ initialTodos }: { initialTodos: Todo[] }){
     const [todos, setTodos] = useState<Todo[]>([]);
     const [isLoaded, setIsLoaded] = useState(false); //loading done???
     const [inputValue, setInputValue] = useState(""); //adding new elems
     const [filter, setFilter] = useState<FilterType>('all');
     useEffect(() =>{            //client side
         const saved = localStorage.getItem("todoList")
         console.log(typeof(saved));
         console.log(saved?.length);
         console.log(saved);
         if (saved && (saved?.length !== 2)){
            setTodos(JSON.parse(saved));
        }
        else{
            setTodos(initialTodos);
        }
        setIsLoaded(true);
    },[initialTodos]);
    useEffect(() => {
    if (isLoaded) {     
      localStorage.setItem('todoList', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);




    const doneToggle = (id: number | string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id == id){
                return {...todo, completed: !todo.completed};
            }
            return todo //return everything else
        });
        setTodos(updatedTodos)
    }

    
    const deleteTask = (id: number | string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos)
    }
//     const reloadPage = () => { //debuging
//   window.location.reload(); 
// };
    const addButton = (name: string) =>{
        if (!name.trim()) return
        const newTodo ={
            userId : 1,
            id: Date.now(), //using time because why not
            title: name,
            completed: false
        }
        setTodos([...todos, newTodo]);
    }
    const filteredTodos = todos.filter(todo => {
        if (filter == "active") return !todo.completed;
        if (filter == "completed") return todo.completed;
        return true;
    })

    const activeCount = todos.filter(t => !t.completed).length;


    
    return (<div className = {styles.container}>
                <TodoFilter currentFilter = {filter} setFilter={setFilter}></TodoFilter>
                <div className={styles.counter}>Осталось задач {activeCount}</div>
                <ul className = {styles.list}>
                    {filteredTodos.map((todo) => (<TodoItem key = {todo.id} todo={todo} doneToggle = {doneToggle} deleteTask = {deleteTask}/>))}
                </ul>
                <input type = "text" placeholder = "Введите новую задачу" value = {inputValue} onChange={(e) => setInputValue(e.target.value)} className = {styles.searchBar} /> 
                <button className = {styles.submitButton} onClick = {() =>{addButton(inputValue); setInputValue('');}} > Добавить</button>
            </div>
            )
 }
