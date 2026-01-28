"use client";

import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo/logo.png";
import Icon from "@mdi/react";
import {
  mdiHome,
  mdiPackageVariantClosed,
  mdiFileChart,
  mdiChevronRight,
  mdiChevronLeft,
  mdiChevronDown,
  mdiChevronUp,
  mdiToaster,
  mdiLogout,
  mdiFolderOutline,
  mdiProgressClock,
  mdiElectronFramework,
  mdiThoughtBubble,
} from "@mdi/js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { label } from "framer-motion/client";

const menuItems = [
  { icon: mdiHome, label: "Dashboard", link: "/dashboard" },
  {
    icon: mdiPackageVariantClosed,
    label: "Module Testing",
    children: [
      { icon: mdiFileChart, label: "Dialog", link: "/module-testing/dialog" },
      { icon: mdiFolderOutline, label: "Expansion Panel", link: "/module-testing/expansion-panel" },
      { icon: mdiProgressClock, label: "Progress Bar", link: "/module-testing/progress-bar" },
      { icon: mdiToaster, label: "Toast", link: "/module-testing/toast" },
      { icon: mdiThoughtBubble, label:"Notification", link:"/module-testing/notification"}
    ],
  },
  {
    icon: mdiElectronFramework,
    label: "Design",
    children: [
      { icon: mdiFileChart, label: "Design 1", link: "/module-testing/dialog" },
    ],
  },
];


export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  const { user, logout } = useAuth();
  const path = usePathname();
  const router = useRouter();

  const [showText, setShowText] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (collapsed) {
      setShowText(false);
    } else {
      const timeout = setTimeout(() => setShowText(true), 200);
      return () => clearTimeout(timeout);
    }
  }, [collapsed]);

  const toggleDropdown = (label: any) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const goToPage = (link: string) => {
    router.push(link);
  };

  return (
    <div
      className={`fixed z-10 h-screen bg-white border-r-1 border-container  duration-300 ${collapsed ? "w-14" : "w-full md:w-64"
        } p-2`}
    >
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 h-10">
            {!collapsed && showText && (
              <span className="font-bold text-xl ml-2">
                <Image src={logo} alt="logo" width={100} height={32}></Image>
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className=" p-1 cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <Icon path={collapsed ? mdiChevronRight : mdiChevronLeft} size={1} />
            </button>
          </div>
          <div className="overflow-y-auto scrollbar-hide max-h-[800px]">
            <ul>
              {menuItems.map((item: any, idx) => (
                <li className="my-1 text-[#555555] text-sm font-semibold" key={idx}>
                  <div
                    onClick={() => {
                      item.children
                        ? toggleDropdown(item.label)
                        : goToPage(item.link);
                    }}
                    className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer ${path.startsWith(item.link)
                      ? "bg-gray-100 font-bold"
                      : "bg-white"
                      }`}
                  >
                    <div className="flex items-center">
                      <Icon path={item.icon} size={1} />
                      {!collapsed && showText && (
                        <span className="ml-3">{item.label}</span>
                      )}
                    </div>
                    {!collapsed && showText && item.children && (
                      <Icon
                        path={
                          openDropdown === item.label ? mdiChevronUp : mdiChevronDown
                        }
                        size={0.7}
                      />
                    )}
                  </div>

                  {item.children && (
                    <div
                      className={`overflow-hidden  duration-300 ease-in-out`}
                      style={{
                        maxHeight:
                          !collapsed && showText && openDropdown === item.label
                            ? `${item.children.length * 40}px`
                            : "0px",
                      }}
                    >
                      <ul className="ml-8">
                        {item.children.map((child: any, childIdx: any) => (
                          <li
                            onClick={() => {
                              goToPage(child.link);
                            }}
                            key={childIdx}
                            className={` my-1 flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer ${path.startsWith(child.link)
                              ? "bg-gray-100 font-bold"
                              : "bg-white"
                              }`}
                          >
                            <Icon path={child.icon} size={0.7} />
                            <span className="ml-2">{child.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-2">
          <hr className="border-container">
          </hr>
          <ul>
            <li className="my-1 text-[#555555] text-sm font-semibold">
              <div
                onClick={logout}
                className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer bg-white`}
              >
                <div className="flex items-center">
                  <Icon path={mdiLogout} size={1} />
                  {!collapsed && showText && (
                    <span className="ml-3">Logout</span>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
