import React from "react";
import Icon from "@mdi/react";
import {
  mdiClose,
} from "@mdi/js";
import BackgroundOverlay from "../base/BackgroundOverlay";

interface BaseDialogProps {
  title: string;
  message: string;
  icon: string;
  iconColor: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BaseDialog({ title, message, icon, iconColor, onClose, children }: BaseDialogProps) {
  return (
    <BackgroundOverlay>
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 md:mx-0 p-6 animate-fade">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Icon path={icon} size={1} className={iconColor} />
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <button onClick={onClose}>
            <Icon path={mdiClose} size={1} className="cursor-pointer text-gray-500 hover:text-black" />
          </button>
        </div>
        <div className="mt-4 text-gray-700 whitespace-pre-line">{message}</div>
        <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-end">
          {children}
        </div>
      </div>
    </BackgroundOverlay>
  );
}