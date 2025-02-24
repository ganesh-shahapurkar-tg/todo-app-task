import { useCallback } from "react";
import TaskItem from "./TaskItem";
import { useFilteredTasks } from "../hooks/useFilteredTasks";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { state, dispatch } = useTasks();
  const filteredTasks = useFilteredTasks();

  const moveTask = useCallback(
    (fromIndex: number, toIndex: number) => {
      const updatedTasks = [...state.tasks];
      const [movedTask] = updatedTasks.splice(fromIndex, 1);
      updatedTasks.splice(toIndex, 0, movedTask);

      dispatch({ type: "REORDER_TASKS", payload: updatedTasks });
    },
    [state.tasks, dispatch]
  );

  return (
    <div className="space-y-4">
      {filteredTasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} moveTask={moveTask} />
      ))}
    </div>
  );
};

export default TaskList;
