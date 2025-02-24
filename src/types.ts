export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
};

export type FilterType = "all" | "completed" | "pending";

export type TaskState = {
  tasks: Task[];
  filter: FilterType;
};

export type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "SET_FILTER"; payload: FilterType }
  | { type: "LOAD_TASKS"; payload: Task[] }
  | { type: "REORDER_TASKS"; payload: Task[] };

export type TaskItemProps = {
  task: Task;
  index: number;
  moveTask: (fromIndex: number, toIndex: number) => void;
};
