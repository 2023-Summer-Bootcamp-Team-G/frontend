import { create } from 'zustand';

interface store {
  pollId: number;
  setPollId: (id: number) => void;
}

export const usePollIdStore = create<store>((set) => ({
  pollId: 0, //상태
  setPollId: (id) => set({ pollId: id }), //상태변경
}));
