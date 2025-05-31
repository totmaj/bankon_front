import { useState, useRef, useEffect } from "react";

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleSelect = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-full border border-[var(--gray-color)] mb-4 rounded-md"
      ref={wrapperRef}
    >
      <button
        type="button"
        className="select w-full flex items-center justify-between text-[var(--light-gray-color)] rounded-md px-4 py-2 shadow-sm focus:border-[var(--primary-color)] transition duration-200"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>
          {value ? (
            options.find((o) => o.value === value)?.label
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 24 24"
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            !isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            stroke="var(--light-gray-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m6 15 6-6 6 6"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute mt-1 w-full bg-[var(--dark-color)] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto animate-fade-up animate-duration-200">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer text-white hover:bg-[var(--dark-gray-color)] transition-all duration-200 ${
                value === option.value
                  ? "bg-[var(--dark-gray-color)] font-medium"
                  : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
