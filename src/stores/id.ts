import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type idStore = {
  detailId: number;
  setDetailId: (id: any) => void;
};
type UserPersist = (
  config: StateCreator<idStore>,
  options: PersistOptions<idStore>
) => StateCreator<idStore>;

export const idStore = create<idStore>(
  (persist as UserPersist)(
    (set) => ({
      detailId: 0, //상태
      setDetailId: (id) => set({ detailId: id }), //상태변경
    }),
    {
      name: 'Id-StoreName',
    }
  )
);
