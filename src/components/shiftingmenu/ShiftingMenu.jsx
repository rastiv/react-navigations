import { motion } from "framer-motion";
import ShiftingMenuTabs from "./ShiftingMenuTabs";

const ShiftingMenu = () => {
  return (
    <div className="invisible sticky top-0 flex justify-start border-b py-3.5 border-slate-300 bg-white md:justify-center md:visible">
      <motion.div layout>
        <ShiftingMenuTabs />
      </motion.div>
    </div>
  );
};

export default ShiftingMenu;
