import Footer from "@/components/footer";
import { MainNav } from "@/components/layout/main-nav";
import { ReactNode } from "react";

const PublicRoutesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50">
      <MainNav />
      {children}
      <Footer />
    </div>
  );
};

export default PublicRoutesLayout;
