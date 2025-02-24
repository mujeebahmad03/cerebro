import { create } from "zustand";

interface ModalState {
  isLoginModalOpen: boolean;
  isSignupModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openSignupModal: () => void;
  closeSignupModal: () => void;
  // Utility method to close all modals
  closeAllModals: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isLoginModalOpen: false,
  isSignupModalOpen: false,

  openLoginModal: () =>
    set({
      isLoginModalOpen: true,
      isSignupModalOpen: false, // Ensure only one modal is open at a time
    }),

  closeLoginModal: () =>
    set({
      isLoginModalOpen: false,
    }),

  openSignupModal: () =>
    set({
      isSignupModalOpen: true,
      isLoginModalOpen: false, // Ensure only one modal is open at a time
    }),

  closeSignupModal: () =>
    set({
      isSignupModalOpen: false,
    }),

  closeAllModals: () =>
    set({
      isLoginModalOpen: false,
      isSignupModalOpen: false,
    }),
}));
