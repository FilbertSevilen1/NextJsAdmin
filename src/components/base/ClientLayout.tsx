"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(true);
  const { user } = useAuth();

  const contentMargin = user
    ? collapsed
      ? "ml-14 pt-16"
      : "ml-64 pt-16"
    : "ml-0 pt-0";

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {user && (
        <>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Navbar collapsed={collapsed} />
        </>
      )}

      <div className={` duration-300 ${contentMargin}`}>
        {children}
      </div>
    </div>
  );
}
