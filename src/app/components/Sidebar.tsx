export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="h-screen w-[250px]">
      <nav className="h-full flex flex-col bg-white border-r shadown-sm">
        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode; // `icon` can be any valid React node (e.g., an element or text)
  text: string; // `text` is a string
  active?: boolean; // `active` is a boolean
  onClick?: () => void;
};

import React from "react";

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`
              relative flex items-center py-2 px-3 my-1
              font-medium rounded-md cursor-pointer
              transition-colors
              ${
                active
                  ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                  : "hover:bg-indigo-50 text-gray-600"
              }
              `}
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
    </li>
  );
};
