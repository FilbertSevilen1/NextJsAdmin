// components/BaseExpansionPanel.tsx
"use client";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

interface BaseExpansionPanelProps {
    title: React.ReactNode;
    actions?: React.ReactNode;
    children: React.ReactNode;
}

export default function BaseExpansionPanel({
    title,
    actions,
    children,
}: BaseExpansionPanelProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl shadow-sm">
            <div
                className="flex items-center justify-between p-4 cursor-pointer select-none bg-neutral-50 rounded-xl shadow-sm"
            >
                <div className="w-full flex items-center gap-2" onClick={() => setOpen(!open)}>{title}</div>
                <div className="flex items-center gap-2">
                    <div className="">
                        {actions}
                    </div>
                    <button onClick={() => setOpen(!open)}>
                        <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} />
                    </button>

                </div>
            </div>
            {open && <div className="px-4 py-4">{children}</div>}
        </div>
    );
}
