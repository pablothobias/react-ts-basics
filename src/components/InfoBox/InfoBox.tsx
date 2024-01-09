import { type ReactNode } from "react";

import { InfoBoxCss } from "./InfoBox.style";

type InfoBoxProps = {
    mode: "hint" | "warning";
    children: ReactNode;
};

const InfoBox = ({ mode, children }: InfoBoxProps) => {
    return (
        <InfoBoxCss mode={mode}>
            {mode === 'warning' ? (<p>Warning</p>) : null}
            {children}
        </InfoBoxCss>
    );
};

export default InfoBox;