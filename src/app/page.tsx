"use client"
import { InformationDialog } from "@/components/dialog/InformationDialog";
import { useState } from "react";

export default function Home() {
  const [isOpenInformationDialog, SetIsOpenInformationDialog] = useState(true)
  return (
    <div>
      Welcome
    </div>
  )
}
