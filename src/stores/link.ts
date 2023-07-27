import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type linkStore = {
  link: string;
  setLink: (link: any) => void;
};
type UserPersist = (
  config: StateCreator<linkStore>,
  options: PersistOptions<linkStore>
) => StateCreator<linkStore>;

export const linkStore = create<linkStore>(
  (persist as UserPersist)(
    (set) => ({
      link: '', //상태
      setLink: (link) => set({ link: link }), //상태변경
    }),
    {
      name: 'Link-StoreName',
    }
  )
);
