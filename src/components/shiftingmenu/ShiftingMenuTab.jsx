import { FiChevronDown } from "react-icons/fi";

const ShiftingMenuTab = ({ tab, selected, onSelect }) => {
  return (
    <button
      id={`dd-tab-${tab.id}`}
      onMouseEnter={onSelect}
      onClick={onSelect}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 font-medium text-sm text-slate-500 transition-colors ${
        selected === tab.id ? "bg-slate-100" : "bg-transparent"
      }`}
    >
      <span>{tab.title}</span>
      {tab.component && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab.id ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

export default ShiftingMenuTab;
