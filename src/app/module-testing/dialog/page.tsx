"use client"
import { ConfirmationDialog } from "@/components/dialog/ConfirmationDialog";
import ErrorDialog from "@/components/dialog/ErrorDialog";
import { InformationDialog } from "@/components/dialog/InformationDialog";
import { useState } from "react"

export default function DialogTestPage() {
    const [isOpenInformationDialog, SetIsOpenInformationDialog] = useState(false);
    const [isOpenErrorDialog, SetIsOpenErrorDialog] = useState(false);
    const [isOpenConfirmationDialog, SetIsOpenConfirmationDialog] = useState(false);
    return (
        <div className="grid m-8 gap-4">
            <button className="w-full btn btn-info" onClick={() => SetIsOpenInformationDialog(true)}>Information</button>
            <button className="w-full btn btn-error" onClick={() => SetIsOpenErrorDialog(true)}>Error</button>
            <button className="w-full btn btn-success" onClick={() => SetIsOpenConfirmationDialog(true)}>Confirmation</button>

            {
                isOpenInformationDialog &&
                <InformationDialog title="Information Dialog" message="Message Information Text" onClose={() => SetIsOpenInformationDialog(false)}>

                </InformationDialog>
            }
            {
                isOpenErrorDialog &&
                <ErrorDialog title="Error Dialog" message="Message Error Text" onClose={() => SetIsOpenErrorDialog(false)}>

                </ErrorDialog>
            }
            {
                isOpenConfirmationDialog &&
                <ConfirmationDialog title="Confirmation Dialog" message="Message Confirmation Text" onClose={() => SetIsOpenConfirmationDialog(false)} onSubmit={() => SetIsOpenConfirmationDialog(false)}>

                </ConfirmationDialog>
            }
        </div>
    )
}