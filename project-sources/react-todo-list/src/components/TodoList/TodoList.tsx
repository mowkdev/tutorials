import * as React from 'react';
import { useCallback, useMemo } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem/TodoItem.tsx';
import { ITodoItem, TodoStatus } from './interfaces.ts';
import { Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  const [inputValue, setInputValue] = React.useState<string | null>(null);

  const hasInputValue = useMemo(() => !!inputValue, [inputValue]);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [setInputValue],
  );

  const onAddTodo = useCallback(() => {
    if (hasInputValue) {
      const newTodo: ITodoItem = {
        id: uuidv4(),
        title: inputValue!,
        status: TodoStatus.Active,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }, [inputValue, todos, hasInputValue]);

  const onCompleteTodo = useCallback(
    (id: string) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              status: TodoStatus.Completed,
            };
          }
          return todo;
        }),
      );
    },
    [todos],
  );

  const onDeleteTodo = useCallback(
    (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <React.Fragment>
      <Stack gap={2} sx={{ mb: 2 }}>
        <TextField
          id="outlined-basic"
          value={inputValue}
          onChange={onInputChange}
          label="Todo title"
          variant="outlined"
        />
        <Button startIcon={<AddIcon />} variant="contained" disabled={!hasInputValue} onClick={onAddTodo}>
          Add todo
        </Button>
      </Stack>
      <List sx={{ width: 800, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          return <TodoItem item={todo} onSetCompleted={onCompleteTodo} onDeleteTodo={onDeleteTodo} />;
        })}
      </List>
    </React.Fragment>
  );
}
