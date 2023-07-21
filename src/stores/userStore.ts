import { create } from 'zustand';

interface userStore {
  userId: string;
  nickName: string;
  setUserId: (id: string) => void;
  setNickName: (name: string) => void;
}
export const userStore = create<userStore>((set) => ({
  userId: '',
  nickName: '',
  setUserId: (id) => set({ userId: id }),
  setNickName: (name) => set({ nickName: name }),
}));
