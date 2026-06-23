import * as React from "react";

import { DemoItem } from "@/components/docs/demo";

type WithChildren = { children?: React.ReactNode };

/** Depth-first search for the first <DemoItem> in a demo tree. */
function findFirstDemoItem(
  node: React.ReactNode,
): React.ReactElement<WithChildren> | null {
  let found: React.ReactElement<WithChildren> | null = null;
  React.Children.forEach(node, (child) => {
    if (found || !React.isValidElement(child)) return;
    if (child.type === DemoItem) {
      found = child as React.ReactElement<WithChildren>;
      return;
    }
    const nested = findFirstDemoItem((child.props as WithChildren).children);
    if (nested) found = nested;
  });
  return found;
}

/**
 * The representative preview for a docs card. Multi-state showcases label their
 * examples with <DemoItem>; we render only the first one (the default state),
 * without its caption, so the thumbnail stays simple and centered. Plain,
 * single-example demos pass through untouched.
 */
export function defaultPreview(demo: React.ReactNode): React.ReactNode {
  const item = findFirstDemoItem(demo);
  return item ? (item.props as WithChildren).children : demo;
}
