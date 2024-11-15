import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <motion.div layout className="flex bg-neutral-50">
      <Sidebar open={open} setOpen={setOpen} />
      <motion.div layout className="h-[200vh] w-full">
        <div>CONTENT</div>
      </motion.div>
    </motion.div>
  );
}

export default App;
