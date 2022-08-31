import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const { systemTheme, theme, setTheme } = useTheme();

  const handleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="button"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setTheme("light")}
          className="w-8 h-8 text-yellow-500 transition-all hover:text-yellow-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-gray-900 transition-all hover:text-gray-500"
          role="button"
          onClick={() => setTheme("dark")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
    }
  };

  const handleShow = () => {
    const currentScrollY = window.scrollY;

    setShow(prevScrollY > currentScrollY || currentScrollY < 10);

    setPrevScrollY(currentScrollY);
  };

  const handleMouseDown = ({ target }: MouseEvent) => {
    if (!navRef.current?.contains(target as Node)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, [prevScrollY, handleShow, show]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown]);

  const handleClick = () => {
    setNavOpen(false);
  };

  return (
    <div
      className={`${"fixed mb-8 shadow-md w-full bg-gray-100/30 backdrop-blur-md dark:bg-[#00303D]/30 z-20 transition-all ease-in-out duration-150"} ${
        show ? "" : "-translate-y-20 opacity-0"
      }`}
    >
      <nav className="flex justify-between py-5 flex-wrap nav-text max-w-screen-2xl m-auto px-4 font-bold">
        <div className="relative z-20 place-items-start text-3xl my-auto dark:text-gray-50 tracking-tighter font-semibold md:flex hidden">
          <Link href="/">
            <a className="nav-title transition duration-150 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
              Vasu Gupta.
            </a>
          </Link>
        </div>
        <div className="mx-2 md:hidden flex">{handleTheme()}</div>
        <div
          className="flex flex-col md:hidden justify-between my-auto"
          ref={navRef}
        >
          <div
            className="space-y-2 mx-6 z-20"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div className="block h-1 w-8 rounded bg-gray-800 dark:bg-gray-100" />
            <div className="block h-1 w-8 rounded bg-gray-800  dark:bg-gray-100" />
            <div className="block h-1 w-8 rounded bg-gray-800 dark:bg-gray-100" />
          </div>

          <div
            className={`${"transition ease-in-out duration-300 fixed flex flex-col flex-wrap rounded-lg text-md tracking-wider font-medium divide-y w-full shadow-lg right-0 justify-between items-center px-4 bg-gray-50  dark:bg-[#00303D] dark:text-gray-100 pb-3"} ${
              navOpen ? "block translate-y-12" : "-translate-y-full opacity-0"
            }`}
          >
            <Link href="">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                About Me
              </a>
            </Link>
            <Link href="#projects-section">
              <a
                className="py-4 transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Projects
              </a>
            </Link>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                rel="noreferrer"
                className="py-4 text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
                onClick={handleClick}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>

        <div className="text-md md:flex flex-row font-medium items-center dark:text-gray-100 justify-between my-auto hidden tracking-widest">
          <div>
            <Link href="">
              <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
                About Me
              </a>
            </Link>
          </div>
          <div>
            <Link href="#projects-section">
              <a className="mx-6 nav-link transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]">
                Projects
              </a>
            </Link>
          </div>
          <div>
            <Link href="/PunarVasuGupta-Resume2022.pdf">
              <a
                target="_blank"
                rel="noreferrer"
                className="mx-6 nav-link dark:text-[#A4DF90] transition duration-300 ease-in-out hover:text-[#00607A] dark:hover:text-[#5FD3C6]"
              >
                Resume
              </a>
            </Link>
          </div>
          <div className="mx-6">{handleTheme()}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
