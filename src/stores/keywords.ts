import { create } from 'zustand';

interface store {
  keywords: any;
  setKeywords: (id: any) => void;
}

export const keywordsStore = create<store>((set) => ({
  keywords: '', //상태
  setKeywords: (keyword) => set({ keywords: keyword }), //상태변경
}));
