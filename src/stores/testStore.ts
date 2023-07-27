import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type Props = {
  serData: any;
  setSerData: (data: any) => void;
};
type UserPersist = (
  config: StateCreator<Props>,
  options: PersistOptions<Props>
) => StateCreator<Props>;

export const TestStore = create<Props>(
  (persist as UserPersist)(
    (set) => ({
      serData: [],

      setSerData: (data: any[]) => set({ serData: data }),
    }),
    {
      name: 'user',
    }
  )
);
