import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type TaskStore = {
  taskId: string;
  setTaskId: (id: string) => void;
};

type TaskPersist = (
  config: StateCreator<TaskStore>,
  options: PersistOptions<TaskStore>
) => StateCreator<TaskStore>;

export const taskIdStore = create<TaskStore>(
  (persist as TaskPersist)(
    (set) => ({
      taskId: '', //상태
      setTaskId: (id) => set({ taskId: id }), //상태변경
    }),
    { name: 'task_id' }
  )
);
