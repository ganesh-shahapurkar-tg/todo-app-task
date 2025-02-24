import { useTasks } from '../hooks/useTasks';
import { FilterType } from '../types';

const Filters = () => {
  const { state, dispatch } = useTasks();
  const taskCounts = {
    all: state.tasks.length,
    completed: state.tasks.filter(task => task.completed).length,
    pending: state.tasks.filter(task => !task.completed).length,
  };

  const filters: FilterType[] = ['all', 'pending', 'completed'];

  return (
    <div className="mb-6">
      <div className="flex gap-4 mb-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
            className={`px-4 py-2 rounded-lg capitalize ${
              state.filter === filter
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter} ({taskCounts[filter]})
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;