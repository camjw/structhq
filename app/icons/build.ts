import { transform } from "@svgr/core";
import dotenv from "dotenv";
import * as Figma from "figma-js";
import fs from "fs";

dotenv.config({ path: ".env.local" });

const FIGMA_CLIENT = Figma.Client({
  personalAccessToken: process.env.FIGMA_TOKEN,
});

const FIGMA_CHUNK_SIZE = 50; // Figma API limit

const ICON_REGEX = /^[^ ]+$/;

function doesIconExist(name: string, type: "outline" | "solid") {
  // Check if the icon file exists

  const dir = `./icons/${type}`;

  if (!fs.existsSync(dir)) {
    return false;
  }

  const files = fs.readdirSync(dir);

  return files.some((f) => f.startsWith(name));
}

function getAllIconComponents(page: Figma.Canvas) {
  // Depth-first search for all icon components
  const allIconComponents: Figma.Component[] = [];

  const stack = [...page.children];

  while (stack.length > 0) {
    const node = stack.pop()!;

    if (node.type === "COMPONENT" && ICON_REGEX.test(node.name)) {
      allIconComponents.push(node);
    } else if (
      node.type === "CANVAS" ||
      node.type === "FRAME" ||
      node.type === "GROUP"
    ) {
      stack.push(...node.children);
    }
  }

  return allIconComponents;
}

async function fetchFigmaSVGs(pageNodeId: string, type: "outline" | "solid") {
  const { data } = await FIGMA_CLIENT.file(ICONS_FILE_ID);

  const iconPage = data.document.children.find(
    (c) => c.id === pageNodeId,
  ) as Figma.Canvas;

  const allIconComponents = getAllIconComponents(iconPage);

  const iconComponents = allIconComponents.filter(
    (c) => !doesIconExist(c.name, type),
  );

  console.log(`Found ${iconComponents.length} new ${type} icons in Figma`);

  const iconComponentChunks = [];

  for (let i = 0; i < iconComponents.length; i += FIGMA_CHUNK_SIZE) {
    iconComponentChunks.push(
      iconComponents.slice(i, i + FIGMA_CHUNK_SIZE).map((c) => c.id),
    );
  }

  const output: { name: string; svg: string }[] = [];

  for (const chunk of iconComponentChunks) {
    const svgData = await FIGMA_CLIENT.fileImages(ICONS_FILE_ID, {
      format: "svg",
      ids: chunk,
    });

    const mapped = chunk.map(async (nodeId: string) => {
      const component = iconComponents.find((c) => c.id === nodeId)!;

      const svgUrl = svgData.data.images[nodeId];

      const svgResponse = await fetch(svgUrl);

      const svg = await svgResponse.text();

      return {
        name: component.name,
        svg,
      };
    });

    output.push(...(await Promise.all(mapped)));
  }

  return output;
}

async function transformFigmaSVGs(
  iconData: { name: string; svg: string }[],
  type: "outline" | "solid",
) {
  const outputDir = `./icons/${type}`;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const { name, svg } of iconData) {
    const componentName =
      name
        .split("-")
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join("") + "Icon";

    const svgOutput = await transform(
      svg,
      {
        replaceAttrValues: {
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: "1.5",
        },
        plugins: ["@svgr/plugin-jsx"],
        typescript: true,
        ref: true,
        template: (variables, { tpl }) => {
          return tpl`
${variables.imports};

${variables.interfaces};

function ${variables.componentName + "Inner"}(${variables.props}) {
  return (
    ${variables.jsx}
  );
}

const ${variables.componentName} = forwardRef(${
            variables.componentName + "Inner"
          });

export { ${variables.componentName} }
`;
        },
      },
      { componentName },
    );

    const code = svgOutput;

    fs.writeFileSync(
      `${outputDir}/${name}.tsx`,
      code
        .replace(/fill="(?!none")[^"]*"/g, 'fill="currentColor"')
        .replace(/stroke="(?!none")[^"]*"/g, 'stroke="currentColor"')
        .replace(
          /import \* as React from "react";/g,
          'import React from "react";',
        )
        // @ts-ignore
        .replace(/strokeWidth={1.5}/g, "strokeWidth={2.5}"),
    );
  }
}

async function prettierIcons() {
  // Run prettier from the command line
  const { exec } = await import("child_process");

  exec(`pnpm exec prettier --write ./icons`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

async function outputEnumFile() {
  // find all icons in the icons solid folder
  const solidIcons = fs.readdirSync("./icons/solid");
  const icons = solidIcons.sort();

  const iconsEnum = `export enum Icon {
${icons
  .map(
    (icon) =>
      `  "${icon.replace(".tsx", "")}" = "${icon.replace(".tsx", "")}",`,
  )
  .join("\n")}
}
export type IconName = keyof typeof Icon;
`;

  fs.writeFileSync("./icons/enum.ts", iconsEnum);
}

const ICONS_FILE_ID = "xRKcX5bvi2ObFFhUqTxyjE";

const OUTLINE_NODE_ID = "181:128951";
const SOLID_NODE_ID = "404:8259";

async function main() {
  const outlineIconData = await fetchFigmaSVGs(OUTLINE_NODE_ID, "outline");
  await transformFigmaSVGs(outlineIconData, "outline");

  const solidIconData = await fetchFigmaSVGs(SOLID_NODE_ID, "solid");
  await transformFigmaSVGs(solidIconData, "solid");

  await prettierIcons();

  await outputEnumFile();
}

main();
