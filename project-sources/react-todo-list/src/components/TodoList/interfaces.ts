export enum TodoStatus {
  Completed = 'completed',
  Active = 'open',
}

export interface ITodoItem {
  id: string;
  title: string;
  status: TodoStatus;
}
