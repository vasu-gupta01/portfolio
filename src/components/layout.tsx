import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="h-full grow pt-20">
        <div className="">{children}</div>
      </main>

      <footer className="flex justify-center border py-4">
        Designed & Built by Vasu Gupta - 2022
      </footer>
    </div>
  );
};

export default Layout;
