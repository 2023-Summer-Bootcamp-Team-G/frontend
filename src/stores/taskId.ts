import { create } from 'zustand';

interface store {
  taskId: string;
  setTaskId: (id: string) => void;
}

export const taskIdStore = create<store>((set) => ({
  taskId: '', //상태
  setTaskId: (id) => set({ taskId: id }), //상태변경
}));
