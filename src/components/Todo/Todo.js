import React, { useState } from 'react';
import Card from '../../UI/Card';
import './Todo.css';

const Todo = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = todo => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        };

        // add the todo to the list
        setList([...list, newTodo]);


        setInput("");


    };

    const deleteTodo = id => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }

    return (
        <Card className='todo'>
            <h1 className='todo__title'>Todo List</h1>
            <input
                className='todo__input'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='todo__addTodo' onClick={() => addTodo(input)}>Add</button>
            <p className='todo__list-title'>Zadania do zrobienia</p>
            <ul>
                {list.map((todo) => {
                    return (
                        <li className='todo__list-li' key={todo.id}>
                            {todo.todo}
                            <button className='todo__list-removeButton' onClick={() => deleteTodo(todo.id)}>&times;</button>
                        </li>
                    )
                })}
            </ul>
        </Card>
    );
}

export default Todo