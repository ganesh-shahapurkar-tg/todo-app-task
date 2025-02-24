import { useTasks } from "./useTasks";

export const useFilteredTasks = () => {
  const { state } = useTasks();

  return state.tasks.filter((task) => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "pending") return !task.completed;
    return true;
  });
};
