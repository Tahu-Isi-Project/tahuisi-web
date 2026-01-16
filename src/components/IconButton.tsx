import { type TablerIcon } from "@tabler/icons-react";

interface IconButtonProps {
  icon: TablerIcon;
  onClick: () => void;
  className?: string;
  size?: number;
}

const IconButton = ({ icon: Icon, size = 24, className = "", onClick }: IconButtonProps) => (
  <button
    onClick={onClick}
    className={`p-2 bg-white border border-slate-300 rounded-full shadow hover:bg-slate-50 transition-colors ${className} cursor-pointer`}
  >
    <Icon size={size} />
  </button>
);

export default IconButton;