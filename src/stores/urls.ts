import { create } from 'zustand';

interface store {
  urls: any;
  index: any;
  setUrls: (id: any) => void;
  setIndex: (id: number) => void;
}

export const urlsStore = create<store>((set) => ({
  urls: [], //상태
  index: 0,
  setUrls: (url) => set({ urls: url }), //상태변경
  setIndex: (num) => set({ index: num }), //상태변경
}));
