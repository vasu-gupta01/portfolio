import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full bg-[#00303D] subpixel-antialiased">
      <Navbar />
      <main className="grow mx-auto text-gray-100">{children}</main>
      <footer className="flex justify-center py-4 text-sm font-medium font-mono text-gray-200">
        Designed & Built by Vasu Gupta - 2022
      </footer>
    </div>
  );
};

export default Layout;
