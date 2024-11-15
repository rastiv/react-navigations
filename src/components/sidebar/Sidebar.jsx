import { useState } from "react";
import { motion } from "framer-motion";
import SidebarTitle from "./SidebarTitle";
import SidebarOption from "./SidebarOption";
import {
  FiHome,
  FiDollarSign,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiBarChart,
  FiUsers,
} from "react-icons/fi";
import SidebarToggleClose from "./SidebarToggleClose";

const Sidebar = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <SidebarTitle open={open} />
      <div className="space-y-1">
        <SidebarOption
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiDollarSign}
          title="Sales"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <SidebarOption
          Icon={FiMonitor}
          title="View Site"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={7}
        />
        <SidebarOption
          Icon={FiShoppingCart}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiTag}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiBarChart}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiUsers}
          title="Members"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={5}
        />
      </div>
      <SidebarToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
