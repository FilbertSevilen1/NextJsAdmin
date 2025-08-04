import { mdiInformation } from "@mdi/js";
import BaseDialog from "./BaseDialog";

export function InformationDialog({
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
      icon={mdiInformation}
      iconColor="text-blue-500"
      onClose={onClose}
    >
      <button className="btn-action btn-white" onClick={onClose}>Close</button>
    </BaseDialog>
  );
}