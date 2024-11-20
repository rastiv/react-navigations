import { useLayoutEffect } from "react";
import { useAnimate } from "framer-motion";

const getClipPath = (tabId) => {
  const tab = document.getElementById(`clippytab-${tabId}`);
  return tab
    ? `xywh(${Number(tab.offsetLeft)}px 0 ${Number(
        tab.offsetWidth
      )}px 100% round ${tab.offsetHeight / 2}px)`
    : "";
};

const ClippyTabs = ({
  tabs,
  initialTab = "",
  duration = 0.3,
  onChangeBefore = null,
  onChangeAfter = null,
}) => {
  const [container, animate] = useAnimate();

  const handleChange = async (id) => {
    if (onChangeBefore && typeof onChangeBefore === "function") {
      onChangeBefore(id);
    }
    const clipPath = getClipPath(id);
    await animate(container.current, { clipPath }, { duration });
    if (onChangeAfter && typeof onChangeAfter === "function") {
      onChangeAfter(id);
    }
  };

  useLayoutEffect(() => {
    if (container.current && tabs.length > 0) {
      const clipPath = getClipPath(initialTab || tabs[0]?.id);
      container.current.style.clipPath = clipPath;
    }
  }, []);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="relative flex flex-col">
      <ul className="flex gap-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              id={`clippytab-${tab.id}`}
              className="flex h-8 items-center gap-2 rounded-full p-4 font-medium text-sm text-slate-500 hover:text-slate-600 transition focus:text-slate-600 outline-none"
              onClick={() => handleChange(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div ref={container} className="absolute top-0">
        <ul className="flex gap-2 bg-indigo-500">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className="flex h-8 items-center gap-2 rounded-full p-4 font-medium text-sm text-white"
                tabIndex={-1}
              >
                {tab.icon}
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClippyTabs;
