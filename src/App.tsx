import { DndProvider } from "react-dnd";
import Filters from "./components/Filters";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskProvider>
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 bg-red">
              Todo List
            </h1>
            <TaskForm />
            <Filters />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </DndProvider>
  );
}

export default App;
