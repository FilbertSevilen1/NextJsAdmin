"use client"

import { useToast } from "@/components/context/ToastContext"

export default function DialogTestPage() {
  const { toast } = useToast()

  const sendNotification = async () => {
    if (!("Notification" in window)) {
      toast.error("Notifications not supported")
      return
    }

    let permission = Notification.permission

    if (permission === "default") {
      permission = await Notification.requestPermission()
    }

    if (permission !== "granted") {
      toast.error("Permission denied")
      return
    }

    new Notification("Hello", { body: "Membara Portoku" })
    toast.success("Notification shown")
  }

  return (
    <div className="grid m-8 gap-4">
      <button className="btn btn-info w-full" onClick={sendNotification}>
        Push Notification
      </button>
    </div>
  )
}
