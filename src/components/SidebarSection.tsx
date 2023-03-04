import React, { FC } from "react";
import { VscLibrary } from "react-icons/vsc";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import SidebarItem from "./SidebarItem";

interface Props {
  children: React.ReactNode;
  styles?: string;
}

const SidebarSection: FC<Props> = ({ children,styles="" }) => {
  return <div className={"flex flex-col ".concat(styles)}>{children}</div>;
};

export default SidebarSection;
