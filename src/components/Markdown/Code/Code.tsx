import type { ReactElement } from "react";

export default function Code(...props: any): ReactElement {
    // Object.values(props[0].children.props).forEach((value) => {
    //     console.log(`${JSON.stringify(value)}`);
    // });
    // const codeLines = props[0].children.props.value.split("\n")
    const codeLines: string[] = props[0].children.props.value.split("\n")
    const newCodeLines: string[] = []
    codeLines.forEach((line, index) => {
        console.log(line)
        const newLine = line
            .replace('<pre class="astro-code Everforest Dark" style="background-color:#2d353b;overflow-x:auto" tabindex="0"><code>', '')
        newCodeLines.push(`<pre style="background-color:#2d353b" data-prefix="${index}">${newLine}</pre>`)
    })



    return (
        <div>
            <div tabIndex={0} className="not-prose mockup-code bg-[#2d353b] lg:w-fit lg:-ml-24 max-w-screen-lg">
                <p dangerouslySetInnerHTML={{ "__html": newCodeLines.join("\n") }} />
            </div>
            <br />
        </div>
    )
}