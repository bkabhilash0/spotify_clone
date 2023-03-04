import React, { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  Icon?: IconType;
  text: string;
  styles?: string;
}

const SidebarItem: FC<Props> = ({ Icon, text, styles = "" }) => {
  return (
    <li
      className={"text-gray-300 py-2 cursor-pointer font-medium flex gap-3 items-center hover:text-white ".concat(
        styles
      )}
    >
      {Icon && <Icon size={24} />}
      <p>{text}</p>
    </li>
  );
};

export default SidebarItem;
