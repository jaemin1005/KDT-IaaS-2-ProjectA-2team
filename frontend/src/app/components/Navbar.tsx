"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { ROUTER_PATH } from "frontend/src/static/ROUTER_PATH";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const path = usePathname();
  const [isView, setIsView] = useState<boolean>();

  const userContext = useContext(UserContext);
  const { userInfo, setUserInfo } = userContext;

  useEffect(() => {
    if (path === "/") setIsView(false);
    else setIsView(true);
  }, [path]);

  return (
    <nav>
      <div className="w-screen fixed z-50 bg-white">
        <div className="flex justify-between h-16 px-10 shadow items-cente">
          <div className="flex items-center space-x-1">
            <h1 className="text-xl lg:text-2xl font-bold cursor-pointer mr-3">
              CyberFunc
            </h1>
            <div className="hidden lg:flex justify-around space-x-4 gap-10">
              <Link
                href={ROUTER_PATH.HOME}
                className="hover:text-indigo-600 text-gray-700 pl-10"
              >
                Home
              </Link>
              <Link
                href={ROUTER_PATH.ABOUT}
                className="hover:text-indigo-600 text-gray-700"
              >
                About
              </Link>
              <Link
                href={ROUTER_PATH.ADMIN}
                className="hover:text-indigo-600 text-gray-700"
              >
                ADMIN
              </Link>
            </div>
          </div>
          <div className="flex items-center">{isView && <SearchBar />}</div>
          <div className="flex space-x-4 items-center">
            {userInfo ? (
              <>
                <h3>{userInfo.id}</h3>
                <button
                  title="logout"
                  onClick={() => {setUserInfo(null)}}
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-800 text-sm">
                  LOGIN
                </Link>
                <Link
                  href="/signup"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  SIGNUP
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}