import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { ITodoItem, TodoStatus } from '../interfaces.ts';
import { Button, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCallback, useMemo } from 'react';

export interface ITodoItemProps {
  item: ITodoItem;
  onSetCompleted: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export default function TodoItem({ item: { title, id, status }, onSetCompleted, onDeleteTodo }: ITodoItemProps) {
  const onCompleted = useCallback(() => {
    onSetCompleted(id);
  }, [id, onSetCompleted]);

  const onDelete = useCallback(() => {
    onDeleteTodo(id);
  }, [id, onDeleteTodo]);

  const isCompleted = useMemo(() => status === TodoStatus.Completed, [status]);

  return (
    <ListItem
      secondaryAction={
        <Stack direction={'row'} gap={1}>
          <Button
            size={'small'}
            startIcon={<CheckCircleIcon />}
            variant="contained"
            disabled={isCompleted}
            onClick={onCompleted}
          >
            Complete
          </Button>
          <Button size={'small'} startIcon={<CheckCircleIcon />} color={'error'} variant="contained" onClick={onDelete}>
            Delete
          </Button>
        </Stack>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox edge="start" checked={isCompleted} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText id={'labelId'} secondary={title} />
      </ListItemButton>
    </ListItem>
  );
}
