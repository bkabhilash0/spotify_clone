import { Poppins } from "next/font/google";
import React, { FC } from "react";
import Sidebar from "./Sidebar";
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Sidebar />
      <main className=" bg-zinc-900 h-screen  w-[calc(100%-18rem)] ml-auto p-9">
        {children}
      </main>
    </div>
  );
};

export default Layout;
