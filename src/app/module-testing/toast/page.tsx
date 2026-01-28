"use client"

import { useToast } from "@/components/context/ToastContext"

export default function DialogTestPage() {
    const {toast} = useToast();
    return (
        <div className="grid m-8 gap-4">
            <button className="w-full btn btn-info" onClick={() => {toast.info("Information")}}>Information</button>
            <button className="w-full btn btn-error" onClick={() => {toast.error("Error")}}>Error</button>
            <button className="w-full btn btn-success" onClick={() => {toast.success("Success")}}>Success</button>
            <button className="w-full btn btn-warning" onClick={() => {toast.warning("Warning")}}>Warning</button>
        </div>
    )
}