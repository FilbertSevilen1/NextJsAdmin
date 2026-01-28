"use client"

import { useToast } from "@/components/context/ToastContext"

export default function DialogTestPage() {
  const { toast } = useToast()

  const sendNotification = async () => {
    const permission = await Notification.requestPermission()
    if (permission !== "granted") return

    new Notification("Hello", { body: "Membara Portoku" })
    toast.success("Notif Sent Successfully!!")
  }

  return (
    <div className="grid m-8 gap-4">
      <button className="btn btn-info w-full" onClick={sendNotification}>
        Push Notification
      </button>
    </div>
  )
}
