import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar/Sidebar";
import ShiftingMenu from "./components/shiftingmenu/ShiftingMenu";
import ClippyTabs from "./components/clippytabs/ClippyTabs";
import HamburgerButton from "./components/hamburgerbutton/HamburgerButton";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiDollarSign,
  FiHeart,
} from "react-icons/fi";

const TABS = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "balance", label: "Balance", icon: <FiDollarSign /> },
  { id: "users", label: "Users", icon: <FiUsers /> },
  { id: "statistics", label: "Statistics", icon: <FiBarChart2 /> },
  { id: "your-wishlist", label: "Your Wishlist", icon: <FiHeart /> },
];

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState("users");
  const [activeTabAfter, setActiveTabAfter] = useState("users");
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="flex bg-neutral-50">
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      <motion.div layout className="invisible h-[200vh] w-full md:visible">
        <ShiftingMenu />

        <div className="flex flex-col w-full justify-center items-center gap-12 mt-12">
          <motion.div layout>
            <ClippyTabs
              tabs={TABS}
              initialTab={activeTab}
              duration="1.2"
              onChangeBefore={setActiveTab}
              onChangeAfter={setActiveTabAfter}
            />
            <hr className="my-3" />
            <div className="grid grid-cols-[auto_1fr] gap-x-2 text-sm text-slate-500">
              <span>onChangeBefore:</span>
              <strong>{TABS.find((tab) => tab.id === activeTab)?.label}</strong>
              <span>onChangeAfter:</span>
              <strong>
                {TABS.find((tab) => tab.id === activeTabAfter)?.label}
              </strong>
            </div>
          </motion.div>

          <motion.div layout className="flex gap-10 items-center">
            <HamburgerButton
              open={openHamburger}
              setOpen={setOpenHamburger}
              size="lg"
              rounded={true}
            />
            <HamburgerButton
              open={openHamburger}
              setOpen={setOpenHamburger}
              background="#fee2e2"
              color="#b91c1c"
            />
            <HamburgerButton
              open={openHamburger}
              setOpen={setOpenHamburger}
              size="sm"
              rounded={true}
              background="#dcfce7"
              color="#15803d"
            />
            <HamburgerButton
              open={openHamburger}
              setOpen={setOpenHamburger}
              size="xs"
              background="#dbeafe"
              color="#1d4ed8"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
