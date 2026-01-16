import React, { useState } from "react";
import HoverableLink from "@components/HoverableLink.tsx";

interface NavbarItem {
  title: string;
  root: string;
  links?: {
    title: string;
    link: string;
  }[];
}

interface NavItemProps {
  item: NavbarItem;
}

const hamburgerIconPath = "/hamburger_menu.svg";

const subLinks = (item: NavbarItem, isExpanded: boolean) => {
  return (
    <ul
      className={`text-2xl ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "max-h-max opacity-100 mt-2" : "max-h-0 opacity-0"
      } space-y-2`}
    >
      {item.links?.map((link, idx) => (
        <li key={idx}>
          <HoverableLink href={`${item.root}${link.link}`} textColor="black" textSize={5}>
            {link.title}
          </HoverableLink>
        </li>
      ))}
    </ul>
  );
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRootClick = (e: React.MouseEvent) => {
    if (item.links && item.links.length > 0) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <li className="mb-2">
      <a
        href={item.root}
        onClick={handleRootClick}
        className="group text-black flex justify-end-safe items-center w-full px-5 py-3 hover:bg-[#ee6983] h-full transition-all duration-300 ease-in-out cursor-pointer"
      >
        <span className="text-6xl group-hover:text-white transition-all duration-300 ease-in-out my-2">
          {item.title}
        </span>
        {item.links && <span className="text-sm ml-2" />}
      </a>
      {item.links && subLinks(item, isExpanded)}
    </li>
  );
};

const Navbar: React.FC<{ items: NavbarItem[] }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div
        className={`fixed top-0 right-0 z-2 h-full w-[15vw] py-20 bg-white/60 text-white transform transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-10">
          {items.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </ul>
      </div>
      <button
        className="fixed top-2 right-2 z-2 p-2 m-5 bg-white text-white rounded-md shadow transition hover:bg-[#ee6983] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={hamburgerIconPath} className="scale-70" />
      </button>
    </nav>
  );
};

export default Navbar;
