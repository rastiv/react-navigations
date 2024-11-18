import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ShiftingMenuTopArrow = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (selected) {
      const hoveredTab = document.getElementById(`dd-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const hoveredTabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter =
        hoveredTabRect.left + hoveredTabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  }, [selected]);

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
      animate={{ left: left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-slate-300 bg-white"
    />
  );
};

export default ShiftingMenuTopArrow;
