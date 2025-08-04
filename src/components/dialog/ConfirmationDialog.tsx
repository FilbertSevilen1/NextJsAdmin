import { mdiHelpCircleOutline } from "@mdi/js";
import BaseDialog from "./BaseDialog";

export function ConfirmationDialog({
  title,
  message,
  onClose,
  onSubmit
}: {
  title: string;
  message: string;
  onClose: () => void;
  onSubmit: () => void;
}) {
  return (
    <BaseDialog
      title={title}
      message={message}
      icon={mdiHelpCircleOutline}
      iconColor="text-yellow-500"
      onClose={onClose}
    >
      <button className="btn-action btn-white" onClick={onClose}>Cancel</button>
      <button className="btn-action btn-success" onClick={onSubmit}>Submit</button>
    </BaseDialog>
  );
}
