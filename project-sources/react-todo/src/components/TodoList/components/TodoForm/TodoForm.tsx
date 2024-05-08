import styles from './TodoForm.module.scss';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodoItem, TodoStatus } from '../TodoItem/TodoItem.tsx';

interface ITodoFormProps {
  addTodo: (todo: ITodoItem) => void;
}

export default function TodoForm({ addTodo }: ITodoFormProps) {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  }

  const isButtonDisabled = title === '' || description === '';

  const createTodo = () => {
    const todo: ITodoItem = {
      id: uuidv4(),
      title,
      description,
      status: TodoStatus.Active,
    };
    addTodo(todo);
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div className={styles["todo-form"]}>
      <div className={styles["fieldset"]}>
        <label>Title</label>
        <input name={"title"} value={title} type="text" onChange={onChange} />
      </div>
      <div className={styles["fieldset"]}>
        <label>Description</label>
        <textarea onChange={onChange} value={description}></textarea>
      </div>
      <button onClick={createTodo} disabled={isButtonDisabled}>Add</button>
    </div>
  );
}