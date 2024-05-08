import TodoItem, { ITodoItem, TodoStatus } from './components/TodoItem/TodoItem.tsx';
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm.tsx';

export default function TodoList() {

  const persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

  const [todos, setTodos] = useState<ITodoItem[]>(persistedTodos);

  const addTodo = (todo: ITodoItem) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completeTodo = (id: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: TodoStatus.Completed,
        };
      }
      return todo;
    }));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {
        todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} status={todo.status} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        ))
      }
    </div>
  );
}