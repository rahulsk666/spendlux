"use client";

import { useRef, useEffect, useState } from "react";

type NavId = "home" | "create" | "analytics" | "list";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconName: NavId;
  text: string;
  color?: string;
  className?: string;
  spanClass?: string;
  activeNav?: NavId;
  handleNav: (setActiveNav: NavId) => void;
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
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (activeNav === iconName && ref.current) {
      setWidth(ref.current.offsetWidth + 30);
    } else {
      setWidth(0);
    }
  }, [activeNav, iconName]);

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
          width,
          height: "30px",
          minWidth: "0px",
          opacity: width > 0 ? 1 : 0,
        }}
        className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out bg-appbar-blue`}
      >
        <span ref={ref} className={`px-0.5 ${spanClass} inline-block`}>
          {text}
        </span>
      </div>
    </button>
  );
};

export default IconButton;
