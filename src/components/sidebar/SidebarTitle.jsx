import { motion } from "framer-motion";
import SidebarLogo from "./SidebarLogo";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const SidebarTitle = ({ open }) => {
  const isFirstRender = useIsFirstRender();

  const INITIAL = {
    opacity: isFirstRender ? 1 : 0,
    y: isFirstRender ? 0 : 12,
  };
  const ANIMATE = {
    opacity: 1,
    y: 0,
  };
  const TRANSITION = { delay: 0.35 };

  return (
    <div className="mb-3 pb-3 border-b border-slate-300">
      <div className="flex items-center justify-between cursor-pointer rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <SidebarLogo />
          {open && (
            <motion.div
              layout
              initial={INITIAL}
              animate={ANIMATE}
              transition={TRANSITION}
            >
              <span className="block text-xs font-semibold uppercase">
                Raycho Ivanov
              </span>
              <span className="block text-xs text-slate-500">
                WEB Developer
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarTitle;
