import useTaskForm from "../hooks/useTaskForm";

const getInputClasses = (error?: string) =>
  `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? "border-red-500" : "border-black"
  }`;

const TaskForm = () => {
  const { title, setTitle, description, setDescription, errors, handleSubmit } =
    useTaskForm();

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className={getInputClasses(errors.title)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description (optional, max 200 chars)"
          className={getInputClasses(errors.description)}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!!errors.title || !!errors.description || !title.trim()}
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          !!errors.title || !!errors.description || !title.trim()
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
