"use client"

import { useToast } from "@/components/context/ToastContext"

export default function DialogTestPage() {
    const { toast } = useToast();

    const sendNotification = async () => {
        toast.info("Notification will be sent after 10 seconds")
        if (Notification.permission !== 'granted') {
            await Notification.requestPermission()
        }

        setTimeout(() => {
            new Notification('Hello', {
                body: 'Membara Portoku'
            })
        }, 10000)
    }

    return (
        <div className="grid grid-cols-4 m-8 gap-4">
            <button className="btn btn-info" onClick={() => sendNotification()}>Push Notification</button>
        </div >
    )
}