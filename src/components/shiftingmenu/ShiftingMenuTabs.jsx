import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ShiftingMenuTab from "./ShiftingMenuTab";
import ShiftingMenuContent from "./ShiftingMenuContent";

const ShiftingMenuTabs = () => {
  const [selected, setSelected] = useState(null);
  const [direction, setDirection] = useState(null);

  const handleSelect = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDirection(selected > val ? "right" : "left");
    }
    if (val === null) {
      setDirection(null);
    }
    if (!TABS.find((tab) => tab.id === val)?.component) {
      setSelected(null);
      return;
    }
    setSelected(val);
  };

  return (
    <div
      className="relative flex h-fit gap-2"
      onMouseLeave={() => handleSelect(null)}
    >
      {TABS.map((tab) => (
        <ShiftingMenuTab
          key={tab.id}
          selected={selected}
          onSelect={() => handleSelect(tab.id)}
          tab={tab}
        />
      ))}

      <AnimatePresence>
        {selected && (
          <ShiftingMenuContent
            tabs={TABS}
            direction={direction}
            selected={selected}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const TabContentProducts = () => {
  return (
    <div>
      <h1 className="text-xl">Products</h1>
      <div className="mt-2 p-2 font-sans text-sm text-slate-600 bg-slate-50 w-[394px] h-[188px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

const TabContentSolutions = () => {
  return (
    <div>
      <h1 className="text-xl">Solutions</h1>
      <div className="mt-2 p-2 font-sans text-sm text-slate-600 bg-slate-50 w-[346px] h-[148px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

const TabContentResources = () => {
  return (
    <div>
      <h1 className="text-xl">Resources</h1>
      <div className="mt-2 p-2 font-sans text-sm text-slate-600 bg-slate-50 w-[448px] h-[224px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Products",
    component: <TabContentProducts />,
  },
  {
    title: "Solutions",
    component: <TabContentSolutions />,
  },
  {
    title: "Resources",
    component: <TabContentResources />,
  },
  {
    title: "Docs",
    component: null,
  },
  {
    title: "Pricing",
    component: null,
  },
].map((tab, index) => ({ ...tab, id: index + 1 }));

export default ShiftingMenuTabs;
