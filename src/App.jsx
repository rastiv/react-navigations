import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import ShiftingMenu from "./components/shiftingmenu/ShiftingMenu";
import AnimatedTabs from "./components/animatedtabs/AnimatedTabs";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex bg-neutral-50">
      <Sidebar open={open} setOpen={setOpen} />
      <motion.div layout className="h-[200vh] w-full">
        <ShiftingMenu />

        <div className="w-full flex justify-center py-10">
          <AnimatedTabs />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
