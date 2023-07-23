import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type urlsStore = {
  urls: any;
  index: any;
  setUrls: (id: any) => void;
  setIndex: (id: number) => void;
};

type UserPersist = (
  config: StateCreator<urlsStore>,
  options: PersistOptions<urlsStore>
) => StateCreator<urlsStore>;

export const urlsStore = create<urlsStore>(
  (persist as UserPersist)(
    (set) => ({
      urls: [], //상태
      index: 0,
      setUrls: (url) => set({ urls: url }), //상태변경
      setIndex: (num) => set({ index: num }), //상태변경
    }),
    {
      name: 'urls-StoreName',
    }
  )
);
