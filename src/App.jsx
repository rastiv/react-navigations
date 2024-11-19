import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import ShiftingMenu from "./components/shiftingmenu/ShiftingMenu";
import AnimatedTabs from "./components/animatedtabs/AnimatedTabs";
import Hamburger from "./components/hamburger/Hamburger";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex bg-neutral-50">
      <Sidebar open={open} setOpen={setOpen} />

      <motion.div layout className="invisible h-[200vh] w-full md:visible">
        <ShiftingMenu />

        <div className="flex flex-col w-full justify-center items-center gap-10 mt-10">
          <motion.div layout>
            <AnimatedTabs />
          </motion.div>

          <motion.div layout>
            <Hamburger />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
