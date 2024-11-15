import { motion } from "framer-motion";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

const SidebarOption = ({
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
}) => {
  const isFirstRender = useIsFirstRender();

  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-[40px] w-[40px] place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          className="text-sm font-medium text-start"
          initial={{
            opacity: isFirstRender ? 1 : 0,
            y: isFirstRender ? 0 : 12,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {title}
        </motion.span>
      )}
      {notifs && open && (
        <motion.span
          initial={{
            scale: isFirstRender ? 1 : 0,
            opacity: isFirstRender ? 1 : 0,
          }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="absolute right-2 size-4 rounded bg-indigo-500 text-xs text-white -translate-y-1/2"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

export default SidebarOption;
