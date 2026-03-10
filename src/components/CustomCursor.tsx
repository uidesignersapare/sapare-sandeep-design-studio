import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const [hoverType, setHoverType] = useState<"default" | "link" | "view">("default");
  const dotRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]");
      if (cursorAttr) {
        setHoverType(cursorAttr.getAttribute("data-cursor") as "view" | "link");
        return;
      }
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        setHoverType("link");
        return;
      }
      setHoverType("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "";
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  const outerSize = hoverType === "view" ? 80 : hoverType === "link" ? 48 : 32;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ width: 8, height: 8 }}
      >
        <div className="w-full h-full rounded-full bg-primary" />
      </div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          width: outerSize,
          height: outerSize,
        }}
        animate={{
          width: outerSize,
          height: outerSize,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className="w-full h-full rounded-full border transition-all duration-200"
          style={{
            borderColor: hoverType === "default"
              ? "hsl(var(--foreground) / 0.3)"
              : "hsl(var(--primary) / 0.6)",
            backgroundColor: hoverType === "view"
              ? "hsl(var(--primary) / 0.15)"
              : "transparent",
          }}
        />
        {hoverType === "view" && (
          <span className="absolute text-xs font-medium text-primary">View</span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
