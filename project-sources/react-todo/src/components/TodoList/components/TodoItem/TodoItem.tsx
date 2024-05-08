import styles from './TodoItem.module.scss';

export enum TodoStatus {
  Active = 'Active',
  Completed = 'Completed',
}

export interface ITodoItem {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}

interface ITodoItemProps extends ITodoItem {
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

export default function TodoItem({ id, status, description, title, deleteTodo, completeTodo }: ITodoItemProps) {

  const onDelete = () => {
    deleteTodo(id);
  }

  const onComplete = () => {
    completeTodo(id);
  }

  return (
    <div className={styles["todo-item"]}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>Status: {status}</p>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onComplete}>Complete</button>
      </div>
    </div>
  );
}