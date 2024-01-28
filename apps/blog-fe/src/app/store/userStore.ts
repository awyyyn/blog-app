import { User } from '@blog-app/shared';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  user: User;
};

type Actions = {
  removeUserInfo: () => void;
  setUserInfo: (payload: User) => void;
};

const initialState = {
  createdAt: '',
  email: '',
  firstname: '',
  lastname: '',
  updatedAt: '',
  username: '',
};

export const userStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      user: initialState,
      removeUserInfo: () =>
        set((state) => {
          state.user = initialState;
        }),
      setUserInfo: (payload) =>
        set((state) => {
          state.user = payload;
        }),
    })),
    {
      name: 'user',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
