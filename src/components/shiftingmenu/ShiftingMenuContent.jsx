import { motion } from "framer-motion";
import ShiftingMenuTopArrow from "./ShiftingMenuTopArrow";

const ShiftingMenuContent = ({ tabs, selected, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      id="overlay-content"
      className="absolute left-0 top-[calc(100%_+_32px)] h-auto rounded-md border min-w-80 border-slate-300 bg-white p-4"
    >
      {/* Empty bridge */}
      <div className="absolute bottom-[calc(100%_+_1px)] left-0 w-full h-[32px]" />

      <ShiftingMenuTopArrow selected={selected} />

      {tabs.map((tab) => {
        return (
          <div className="overflow-hidden" key={tab.id}>
            {selected === tab.id && tab.component && (
              <motion.div
                initial={{
                  opacity: 0,
                  x:
                    direction === "left"
                      ? 100
                      : direction === "right"
                      ? -100
                      : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {tab.component}
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

export default ShiftingMenuContent;
