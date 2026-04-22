import { IconCaretDownFilled, IconCaretLeftFilled, IconCaretRightFilled, IconCaretUpFilled, type TablerIcon } from "@tabler/icons-react";
import IconButton from "./IconButton";

declare global {
  interface Window {
    moveHeadlines: (direction: "Left" | "Right", thumbnailWidth: number) => void;
  }
}

interface ArrowButtonProps {
  direction: "Left" | "Right";
  size?: number;
  thumbnailWidth: number;
}

const iconDirections: Record<string, TablerIcon> = {
  "Up": IconCaretUpFilled,
  "Down": IconCaretDownFilled,
  "Left": IconCaretLeftFilled,
  "Right": IconCaretRightFilled
};

const ArrowButton = ({ direction, size = 24, thumbnailWidth }: ArrowButtonProps) => (
  <IconButton
    icon={iconDirections[direction]}
    size={size}
    onClick={() => window.moveHeadlines?.(direction, thumbnailWidth)}
    className="p-2 bg-white border border-slate-300 rounded-full shadow hover:bg-slate-50 transition-colors"
  />
);

export default ArrowButton;