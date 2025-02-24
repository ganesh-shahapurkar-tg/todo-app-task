export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
}

export type FilterType = 'all' | 'completed' | 'pending';