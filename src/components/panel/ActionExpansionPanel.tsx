// components/ActionExpansionPanel.tsx
import BaseExpansionPanel from "./BaseExpansionPanel";

export default function ActionExpansionPanel({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <BaseExpansionPanel
      title={<h2 className="text-lg font-semibold">{title}</h2>}
      actions={actions}
    >
      {children}
    </BaseExpansionPanel>
  );
}
