import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="grow mx-auto text-gray-800">{children}</main>
      <footer className="flex justify-center border py-4 font-medium text-gray-800">
        Designed & Built by Vasu Gupta - 2022
      </footer>
    </div>
  );
};

export default Layout;
