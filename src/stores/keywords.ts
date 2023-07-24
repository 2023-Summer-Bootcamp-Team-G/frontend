import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type keywordsStore = {
  keywords: any;
  setKeywords: (id: any) => void;
};
type UserPersist = (
  config: StateCreator<keywordsStore>,
  options: PersistOptions<keywordsStore>
) => StateCreator<keywordsStore>;

export const keywordsStore = create<keywordsStore>(
  (persist as UserPersist)(
    (set) => ({
      keywords: [''], //상태
      setKeywords: (keyword) => set({ keywords: keyword }), //상태변경
    }),
    {
      name: 'Keyword-StoreName',
    }
  )
);
