import { visit } from "unist-util-visit";
import { Element, Parent } from "hast";

export default function rehypeHeadingOffset() {
  return (tree: Parent) => {
    visit(tree, "element", (node: Element, index?: number, parent?: Parent) => {
      if (
        node.tagName &&
        /^h[1-6]$/.test(node.tagName) &&
        node.properties &&
        typeof node.properties.id === "string" &&
        parent &&
        typeof index === "number"
      ) {
        const id = node.properties.id;

        delete node.properties.id;

        const spacer: Element = {
          type: "element",
          tagName: "div",
          properties: {
            id,
            style: "position: relative; top: -20vh;",
          },
          children: [],
        };

        // Insert spacer before the heading node
        parent.children.splice(index, 0, spacer);
      }
    });
  };
}
