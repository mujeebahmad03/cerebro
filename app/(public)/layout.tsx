"use client";

import type { ReactNode } from "react";

import { UserTypeModal } from "@/components/auth";
import Footer from "@/components/footer";
import { MainNav } from "@/components/layout";
import { useModalStore } from "@/store";

const PublicRoutesLayout = ({ children }: { children: ReactNode }) => {
  const {
    isLoginModalOpen,
    isSignupModalOpen,
    closeLoginModal,
    closeSignupModal,
  } = useModalStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50">
      <MainNav />
      {children}
      <Footer />
      <UserTypeModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        mode="login"
      />
      <UserTypeModal
        isOpen={isSignupModalOpen}
        onClose={closeSignupModal}
        mode="signup"
      />
    </div>
  );
};

export default PublicRoutesLayout;
