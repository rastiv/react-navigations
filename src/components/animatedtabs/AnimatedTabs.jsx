import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
  { id: "blog", label: "Blog" },
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-slate-600"
          } relative rounded-full px-3 py-1.5 text-slate-500 text-sm outline-2 font-medium transition`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 border border-indigo-300"
              style={{ borderRadius: 9999 }}
            />
          )}

          <span className="relative z-20">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AnimatedTabs;
