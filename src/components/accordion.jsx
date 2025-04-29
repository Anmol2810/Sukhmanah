import { createContext, useContext, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

// Define the context
const AccordianContext = createContext();

// Accordian Component
export default function Accordian({ children, value = [], onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const toggleItem = (itemValue) => {
    setSelected((prevSelected) =>
      prevSelected.includes(itemValue)
        ? prevSelected.filter((v) => v !== itemValue)
        : [...prevSelected, itemValue]
    );
  };

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, toggleItem }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

// AccordianItem Component
export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, toggleItem } = useContext(AccordianContext);

  const open = selected.includes(value);

  return (
    <li {...props}>
      <header
        role="button"
        onClick={() => toggleItem(value)}
        className="flex justify-between items-center p-4 font-bold"
      >
        {trigger}
        <FiChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </header>
      <div
        className="overflow-hidden transition-all"
        style={{ height: open ? "100%" : 0 }}
      >
        <div className="p-4 mb-5 max-w-[900px]">{children}</div>
      </div>
    </li>

  );
}
