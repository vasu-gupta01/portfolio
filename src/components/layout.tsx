import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <main className="h-full">{children}</main>
      </div>
      <footer className="footer">Designed & Built by Vasu Gupta - 2022</footer>
    </>
  );
};

export default Layout;
