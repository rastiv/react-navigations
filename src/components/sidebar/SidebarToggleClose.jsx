import { FiChevronsRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const SidebarToggleClose = ({ open, setOpen }) => {
  const isFirstRender = useIsFirstRender();

  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 p-2 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-1/2">
        <motion.div
          layout
          className="grid size-10 place-content-center rounded-md"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            initial={{
              opacity: isFirstRender ? 1 : 0,
              y: isFirstRender ? 0 : 12,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-sm font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default SidebarToggleClose;
