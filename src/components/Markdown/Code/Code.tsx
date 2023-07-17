import type { ReactElement } from "react";
import CopyCode from "./CopyCode/CopyCode";

export default function Code(...props: any): ReactElement {
    // Object.values(props[0].children.props).forEach((value) => {
    //     console.log(`${JSON.stringify(value)}`);
    // });
    // const codeLines = props[0].children.props.value.split("\n")
    const codeLines: string[] = props[0].children.props.value.split("\n")
    const newCodeLines: string[] = []
    codeLines.forEach((line, index) => {
        const newLine = line
            .replace('<pre class="astro-code Everforest Dark" style="background-color:#2d353b;overflow-x:auto" tabindex="0"><code>', '')
        newCodeLines.push(`<pre style="background-color:#2d353b" data-prefix="${index}">${newLine}</pre>`)
    })

    return (
        <div>
            <div tabIndex={0} className="not-prose rounded mockup-code bg-everforest-dark-background-soft-0 lg:w-fit lg:-ml-16 max-w-screen-lg text-sm">
                <div className="absolute w-full top-3 font-mono text-center">
                    {props[0].title || "Code"}
                </div>
                <div className="px-1">
                    <p dangerouslySetInnerHTML={{ "__html": newCodeLines.join("\n") }} />
                </div>
            </div>
            <br />
        </div>
    )
}