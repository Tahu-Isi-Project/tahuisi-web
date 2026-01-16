import { IconCaretDownFilled, IconCaretLeftFilled, IconCaretRightFilled, IconCaretUpFilled, type TablerIcon } from "@tabler/icons-react";
import IconButton from "./IconButton";

interface ArrowButtonProps {
  direction: "Up" | "Down" | "Left" | "Right";
  size?: number;
  onClick: () => void;
}

const iconDirections: Record<string, TablerIcon> = {
  "Up": IconCaretUpFilled,
  "Down": IconCaretDownFilled,
  "Left": IconCaretLeftFilled,
  "Right": IconCaretRightFilled
};

const ArrowButton = ({ direction, size = 24, onClick }: ArrowButtonProps) => (
  <IconButton
    icon={iconDirections[direction]}
    size={size}
    onClick={onClick}
    className="p-2 bg-white border border-slate-300 rounded-full shadow hover:bg-slate-50 transition-colors"
  />
);

export default ArrowButton;