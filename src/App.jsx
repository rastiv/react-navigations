import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import ShiftingMenu from "./components/shiftingmenu/ShiftingMenu";
import ClippyTabs from "./components/clippytabs/ClippyTabs";
import Hamburger from "./components/hamburger/Hamburger";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

const TABS = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "balance", label: "Balance", icon: <FiDollarSign /> },
  { id: "users", label: "Users", icon: <FiUsers /> },
  { id: "statistics", label: "Statistics", icon: <FiBarChart2 /> },
  { id: "settings", label: "Settings", icon: <FiSettings /> },
];

function App() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("users");
  const [activeTabAfter, setActiveTabAfter] = useState("users");

  return (
    <div className="flex bg-neutral-50">
      <Sidebar open={open} setOpen={setOpen} />

      <motion.div layout className="invisible h-[200vh] w-full md:visible">
        <ShiftingMenu />

        <div className="flex flex-col w-full justify-center items-center gap-12 mt-12">
          <motion.div layout>
            <ClippyTabs
              tabs={TABS}
              initialTab={activeTab}
              duration="1.5"
              onChange={setActiveTab}
              onChangeAfter={setActiveTabAfter}
            />
            <hr className="my-3" />
            <div className="grid grid-cols-[auto_1fr] gap-x-2 text-sm text-slate-500">
              <span>onChange:</span>
              <strong>{TABS.find((tab) => tab.id === activeTab)?.label}</strong>
              <span>onChangeAfter:</span>
              <strong>
                {TABS.find((tab) => tab.id === activeTabAfter)?.label}
              </strong>
            </div>
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
