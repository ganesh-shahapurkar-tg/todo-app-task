import { useRef, useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { TaskItemProps } from "../types";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useTasks } from "../hooks/useTasks";

const TaskItem = ({ task, index, moveTask }: TaskItemProps) => {
  const { dispatch } = useTasks();
  const ref = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const [, drop] = useDrop({
    accept: "TASK",
    hover: useCallback(
      (draggedItem: { index: number }) => {
        if (draggedItem.index !== index) {
          moveTask(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
      [index, moveTask]
    ),
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const handleToggle = useCallback(
    () => dispatch({ type: "TOGGLE_TASK", payload: task.id }),
    [task.id, dispatch]
  );
  const handleDelete = useCallback(() => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
    setShowConfirm(false);
  }, [task.id, dispatch]);

  return (
    <div
      ref={ref}
      className={`bg-white p-4 rounded-lg shadow-sm flex items-start justify-between relative ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggle}
          className={`w-5 h-5 border-2 rounded flex items-center justify-center mt-1 ${
            task.completed ? "bg-blue-500 border-blue-500" : "border-gray-300"
          }`}
        >
          {task.completed && <CheckIcon className="w-4 h-4 text-white" />}
        </button>
        <div>
          <h3
            className={`text-lg ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p
              className={`text-gray-600 ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.description}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={() => setShowConfirm(true)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <TrashIcon className="w-5 h-5" />
      </button>

      {showConfirm && (
        <DeleteConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default TaskItem;
