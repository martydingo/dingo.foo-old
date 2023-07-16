
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeMermaid from "rehype-mermaidjs"
import remarkRehype from "remark-rehype"

import everforest from "../../../../themes/everforest";

// import mermaid from "mermaid";

// export async function renderDiagram(markdown: string) {
//   mermaid.initialize({ startOnLoad: false });
//   // const diagram = await mermaid.render('div', markdown)
//   const diagram = markdown
//   console.log(diagram)
//   return diagram
// }

export async function renderMermaidDiagram(markdown: string, mode?: "img-svg" | "img-png" | "inline-svg", renderer?: "dagre" | "elk", darkMode=true) {
    let colorScheme = everforest.dark
    if(darkMode === false){
      colorScheme = everforest.light
    } 
    let imageMode = mode
    if(!mode){
      mode = "inline-svg"
    }
    let defaultRenderer = renderer
    if(!defaultRenderer){
      defaultRenderer = "dagre"
    }
    const newMarkdown = ['```mermaid', ...markdown.split('\n'), '```'].join("\n")
    const diagram = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .use(rehypeMermaid, {
          strategy: imageMode,
          css: 'http://localhost:3000/src/styles/mermaid.css',
          mermaidConfig: {
            "theme": "neutral",
            "themeVariables": {
              "darkMode": true,
              "fontSize": "24px",
              "fontFamily": ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
              "primaryColor": colorScheme.background.soft['2'],
              "secondaryColor": colorScheme.background.soft['6'],
              "tertiaryColor": colorScheme.background.soft['5'],
              "textColor": colorScheme.primary,
              "primaryTextColor": colorScheme.primary,
              "secondaryTextColor": colorScheme.primary,
              "tertiaryTextColor": colorScheme.primary,
              "noteTextColor": colorScheme.primary,
              "titleColor": colorScheme.primary,
              "defaultLinkColor": colorScheme.primary,
              "nodeTextColor": colorScheme.primary,
              "mainBkg": colorScheme.background.soft['4'],
              "clusterBkg": colorScheme.background.soft['5'],
              "edgeLabelBackground": colorScheme.background.soft['6'],
              "nodeBorder": colorScheme.background.soft['4'],
              "clusterBorder": colorScheme.background.soft['4'],
              "border2": colorScheme.background.soft['4'],
              "arrowheadColor": colorScheme.background.soft['6'],
              "lineColor": colorScheme.primary,
            },
            "flowchart": {
              "curve": "catmullRom",
              "defaultRenderer": defaultRenderer,
              "titleTopMargin": 64,
              "nodeSpacing": 64,
              "rankSpacing": 64,
              "padding": 32,
              "diagramPadding": 32,
              "wrappingWidth": 64,
              "htmlLabels": false,
              "useWidth": true,
              "useMaxWidth": true,
              "arrowMarkerAbsolute": true,
            }
          }
        })
        .process(newMarkdown);

    return diagram
}
