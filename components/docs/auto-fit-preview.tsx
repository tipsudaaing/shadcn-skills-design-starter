"use client";

import * as React from "react";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/**
 * Card preview wrapper for components whose demo is larger than the thumbnail
 * frame (chart, sidebar, data-table, calendar, command, carousel, card, empty,
 * scroll-area…). It measures the demo's natural size and scales it down to fit
 * the frame — never up — so the whole component shows, uncropped and centered.
 */
export function AutoFitPreview({ children }: { children: React.ReactNode }) {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  useIsoLayoutEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;
    if (!box || !content) return;

    // offsetWidth/Height report the untransformed layout size, so reading them
    // after applying `scale` never feeds back into the measurement.
    const compute = () => {
      const cw = content.offsetWidth;
      const ch = content.offsetHeight;
      const fw = box.clientWidth;
      const fh = box.clientHeight;
      if (!cw || !ch || !fw || !fh) return;
      // 0.92 leaves a little breathing room inside the frame.
      setScale(Math.min(fw / cw, fh / ch, 1) * 0.92);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(box);
    ro.observe(content);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div
      ref={boxRef}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div
        ref={contentRef}
        aria-hidden
        className="inline-flex [&_*]:!animate-none"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      >
        {children}
      </div>
    </div>
  );
}
