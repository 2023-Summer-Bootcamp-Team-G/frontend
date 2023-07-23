import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type userStore = {
  userId: string;
  nickName: string;
  setUserId: (id: string) => void;
  setNickName: (name: string) => void;
};
type UserPersist = (
  config: StateCreator<userStore>,
  options: PersistOptions<userStore>
) => StateCreator<userStore>;

export const userStore = create<userStore>(
  (persist as UserPersist)(
    (set) => ({
      userId: '',
      nickName: '',
      setUserId: (id) => set({ userId: id }),
      setNickName: (name) => set({ nickName: name }),
    }),
    {
      name: 'user',
    }
  )
);
