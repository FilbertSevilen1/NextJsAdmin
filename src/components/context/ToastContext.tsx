"use client";

import { mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "info" | "error" | "warning";

type ToastContextType = {
  toast: {
    success: (message: string) => void;
    info: (message: string) => void;
    error: (message: string) => void;
    warning: (message:string) => void;
  };
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("info");
  const [visible, setVisible] = useState(false);

  const triggerToast = (msg: string, type: ToastType) => {
    setMessage(msg);
    setType(type);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  const toast = {
    success: (msg: string) => triggerToast(msg, "success"),
    info: (msg: string) => triggerToast(msg, "info"),
    error: (msg: string) => triggerToast(msg, "error"),
    warning: (msg: string) => triggerToast(msg, "warning"),
  };

  const getToastColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {visible && (
        <div className={`flex items-center justify-center font-bold gap-2 fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white z-50 animate-fade-in-out ${getToastColor()}`}>
          <Icon path={mdiInformationOutline} size={1}/>
          <div>{message}</div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
