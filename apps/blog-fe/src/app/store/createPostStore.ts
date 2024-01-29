import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
  modal: {
    isOpen: boolean;
  };
};

type Action = {
  setModal: (value: boolean) => void;
};

export const useCreatePostStore = create<State & Action>()(
  immer((set) => ({
    modal: {
      isOpen: false,
    },
    setModal: (val) =>
      set((state) => {
        state.modal.isOpen = val;
      }),
  }))
);
