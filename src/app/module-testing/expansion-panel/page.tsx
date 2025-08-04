import ActionExpansionPanel from "@/components/panel/ActionExpansionPanel";
import ExpansionPanel from "@/components/panel/ExpansionPanel";
import { mdiCheckOutline, mdiFileEditOutline, mdiSquareOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function ExpansionPanelTestPage() {
    return (
        <div className="grid grid-cols-1 m-8 gap-4">
            <ExpansionPanel title="Expansion Panel">
                <div>
                    Test
                </div>
            </ExpansionPanel>
            <ActionExpansionPanel title="Action Expansion Panel" actions={
                <div className="flex items-center h-full">
                    <button className="hover:bg-neutral-100 active:scale-95">
                        <Icon path={mdiFileEditOutline} size={1}>

                        </Icon>
                    </button>
                </div>
            }>
                <div>
                    Action
                </div>
            </ActionExpansionPanel>
        </div>
    )
}