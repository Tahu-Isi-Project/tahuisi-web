import React, { type ReactNode } from "react";

interface HoverableLinkProps {
  children: ReactNode;
  href: string;
  textColor?: "white" | "black";
  textSize?: number;
  hoverBackgroundColor?: "pink" | "white" | "black";
}

const HoverableLink: React.FC<HoverableLinkProps> = ({
  href,
  children,
  textColor = "white",
  textSize = 3,
  hoverBackgroundColor = "pink",
}) => {
  const textColors = {
    white: "text-white",
    black: "text-black",
  };

  const bgColors = {
    pink: "hover:bg-[#ee6983]",
    black: "hover:bg-black",
    white: "hover:bg-white",
  };

  const textSizeStr = `text-${Math.floor(textSize).toString()}x1`;

  return (
    <a
      href={href}
      className={`
        group flex justify-end-safe ${textSizeStr} ease-in-out items-center 
        px-10 py-2 transform transition-all duration-200 
        ${textColors[textColor]} ${bgColors[hoverBackgroundColor]} 
        ${
          hoverBackgroundColor == "white"
            ? "hover:text-black"
            : "hover:text-white"
        }
    `}
    >
      {children}
    </a>
  );
};

export default HoverableLink;
