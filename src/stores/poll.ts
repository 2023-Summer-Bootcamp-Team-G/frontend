import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type pollStore = {
  poll: string|number;
  setPoll: (id: any) => void;
};

type PollPersist = (
  config: StateCreator<pollStore>,
  options: PersistOptions<pollStore>
) => StateCreator<pollStore>;

export const pollStore = create<pollStore>(
  (persist as PollPersist)(
    (set) => ({
      poll: 0, //상태
      setPoll: (id: string|number) => set({ poll: id }), //상태변경
    }),
    { name: 'poll_id' }
  )
);
