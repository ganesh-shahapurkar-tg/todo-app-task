import React, { useCallback, useState } from "react";
import { v4 as uuIdV4 } from "uuid";
import { useTasks } from "./useTasks";


const useTaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
    const { dispatch } = useTasks();
  
    const validateForm = useCallback(() => {
      const newErrors: { title?: string; description?: string } = {};
  
      if (!title.trim()) {
        newErrors.title = "Title is required.";
      } else if (title.length > 50) {
        newErrors.title = "Title cannot exceed 50 characters.";
      }
  
      if (description.length > 200) {
        newErrors.description = "Description cannot exceed 200 characters.";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }, [title, description]);
  
    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
  
        dispatch({ type: "ADD_TASK", payload: { id: uuIdV4(), title: title.trim(), description: description.trim(), completed: false } });
        dispatch({ type: "SET_FILTER", payload: "all" });
  
        setTitle("");
        setDescription("");
        setErrors({});
      },
      [title, description, validateForm, dispatch]
    );
  
    return { title, setTitle, description, setDescription, errors, setErrors, handleSubmit };
  };

  export default useTaskForm