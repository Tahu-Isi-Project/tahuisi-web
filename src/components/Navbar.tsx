import React, { useState } from "react";

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
      className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
      } space-y-2`}
    >
      {item.links?.map((link, idx) => (
        <li key={idx}>
          <a
            href={`${item.root}${link.link}`}
            className="block text-gray-300 hover:text-white transition-colors"
          >
            {link.title}
          </a>
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
      <div className="flex justify-between items-center cursor-pointer">
        <a
          href={item.root}
          onClick={handleRootClick}
          className="text-white text-lg hover:text-gray-300 transition-colors"
        >
          {item.title}
        </a>
        {item.links && <span className="text-white text-sm ml-2" />}
      </div>
      {item.links && subLinks(item, isExpanded)}
    </li>
  );
};

const Navbar: React.FC<{ items: NavbarItem[] }> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav>
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-700 text-white rounded-md shadow hover:bg-gray-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={hamburgerIconPath} />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-6 space-y-4">
          {items.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
