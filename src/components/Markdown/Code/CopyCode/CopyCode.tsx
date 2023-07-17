import { ReactElement, useState } from "react";

export default function CopyCode(...props: any): ReactElement {
    console.log(props)
    const text = props.text
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 10000);
    };

    return (
        <button disabled={isCopied} onClick={copy}>
            {isCopied ? "Copied!" : "Copy"}
        </button>
    );
};
