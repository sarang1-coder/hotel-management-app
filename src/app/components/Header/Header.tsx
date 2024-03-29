"use client";
import { useContext } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import themeContext from "@/app/context/themeContext";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(themeContext);

  return (
    <header className="py-10 px-10 comtainer mx-auto text-xl flex flex-wrap md:flex-nowrap item-center justify-between">
      {/* left */}
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotels
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center ml-5 mr-5">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-5">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      {/* right */}
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
