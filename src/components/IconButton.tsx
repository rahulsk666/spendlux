import { useRef, useState } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  text: string;
  color?: string;
  className?: string;
  spanClass?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  text,
  color,
  className = "",
  spanClass = "",
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex m-1 p-2 items-center align-middle rounded-full
        text-white 
        ${hovered ? "bg-appbar-blue" : color || "bg-appbar-secondary"}
        ${className}
      `}
      {...props}
    >
      {children}
      <div
        style={{
          width: hovered ? (ref.current?.offsetWidth || 0) + 29 : 0,
          height: "30px",
        }}
        className={`overflow-x-hidden transition-all duration-200 ease-linear bg-inherit ${
          hovered ? "bg-appbar-blue" : color || "bg-appbar-secondary"
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
