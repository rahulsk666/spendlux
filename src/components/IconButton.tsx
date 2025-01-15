"use client";

import { useRef } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconName: string;
  text: string;
  color?: string;
  className?: string;
  spanClass?: string;
  activeNav?: string;
  handleNav: (setActiveNav: string) => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  iconName = "home",
  text,
  color,
  className,
  spanClass,
  handleNav,
  activeNav = "home",
  ...props
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isClient = typeof window !== "undefined";
  return (
    <button
      onClick={() => handleNav(iconName)}
      className={`
        flex m-1 p-2 items-center align-middle rounded-full text-white ${
          activeNav === iconName
            ? "bg-appbar-blue"
            : color || "bg-appbar-secondary"
        } ${className}
      `}
      {...props}
    >
      {children}
      <div
        style={{
          width:
            isClient && activeNav == iconName
              ? (ref.current?.offsetWidth || 0) + 30
              : 0,
          height: "30px",
        }}
        className={`overflow-x-hidden transition-all duration-200 delay-100 ease-linear bg-inherit ${
          activeNav == iconName
            ? "bg-appbar-blue"
            : color || "bg-appbar-secondary"
        }`}
      >
        <span ref={ref} className={`px-0.5 ${spanClass}`}>
          {text}
        </span>
      </div>
    </button>
  );
};

export default IconButton;
