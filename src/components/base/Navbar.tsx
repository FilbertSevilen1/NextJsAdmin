"use client";

export default function Navbar({ collapsed }: { collapsed: boolean }) {

  return (
    <div
      className={`fixed left-0 top-0 z-5 flex items-center justify-between w-full h-16  duration-300 bg-[#FFFFFFEE] border-container border-b-1 ${
        collapsed ? "pl-14" : "pl-64"
      }`}
    >
      <div className="mx-8 text-lg font-bold">Dashboard</div>
    </div>
  );
}
