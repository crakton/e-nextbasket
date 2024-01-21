import { FC } from "react";
import { TMainLayout } from "@/types";
import { MainHeader } from "@/ui/main-header.ui";
import { MainFooter } from "@/ui/main-footer.ui";

const MainLayout: FC<TMainLayout> = ({ children }) => {
  return (
    <main className="w-screen overflow-hidden bg-white">
      {/* === Header UI section === */}
      <MainHeader />

      {/* === Main UI section === */}
      {children}

      {/* === Footer UI section === */}
      <MainFooter />
    </main>
  );
};

export default MainLayout;
