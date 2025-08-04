// components/ExpansionPanel.tsx
import BaseExpansionPanel from "./BaseExpansionPanel";

export default function ExpansionPanel({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return <BaseExpansionPanel title={<h2 className="text-lg font-semibold">{title}</h2>}>{children}</BaseExpansionPanel>;
}
