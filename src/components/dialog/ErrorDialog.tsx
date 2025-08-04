import { mdiAlertCircleOutline } from "@mdi/js";
import BaseDialog from "./BaseDialog";

export default function ErrorDialog({
  title,
  message,
  onClose
}: {
  title: string;
  message: string;
  onClose: () => void;
}) {
  return (
    <BaseDialog
      title={title}
      message={message}
      icon={mdiAlertCircleOutline}
      iconColor="text-red-500"
      onClose={onClose}
    >
      <button className="btn-action btn-white" onClick={onClose}>Close</button>
    </BaseDialog>
  );
}