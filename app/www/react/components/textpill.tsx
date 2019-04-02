import * as React from "react";

interface PillProps { text: string, color: string, onClick?: () => void }

/** Functional component that renders a text pill with a specified background color **/
export const TextPill = (props: PillProps) => {
    return <p className={`text-pill ${props.color} with-bg`} onClick={props.onClick}>{props.text}</p>
};
