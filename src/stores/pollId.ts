import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type PollStore = {
  pollId: number;
  setPollId: (id: number) => void;
};

type PollPersist = (
  config: StateCreator<PollStore>,
  options: PersistOptions<PollStore>
) => StateCreator<PollStore>;

export const usePollIdStore = create<PollStore>(
  (persist as PollPersist)(
    (set) => ({
      pollId: 0, //상태
      setPollId: (id: number) => set({ pollId: id }), //상태변경
    }),
    { name: 'poll_id' }
  )
);
