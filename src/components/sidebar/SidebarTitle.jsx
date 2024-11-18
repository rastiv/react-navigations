import { motion } from "framer-motion";
import SidebarLogo from "./SidebarLogo";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const SidebarTitle = ({ open }) => {
  const isFirstRender = useIsFirstRender();

  return (
    <div className="mb-3 pb-3 border-b border-slate-300">
      <div className="flex items-center justify-between cursor-pointer rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <SidebarLogo />
          {open && (
            <motion.div
              layout
              initial={{
                opacity: isFirstRender ? 1 : 0,
                y: isFirstRender ? 0 : 12,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
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
