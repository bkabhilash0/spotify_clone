import React from "react";
import { VscLibrary } from "react-icons/vsc";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <nav className="bg-black w-72 h-screen fixed left-0 top-0">
      <ul className="p-6 py-14">
        <SidebarSection styles="mb-6">
          <SidebarItem Icon={HiOutlineHome} text="Home" />
          <SidebarItem Icon={HiOutlineSearch} text="Search" />
          <SidebarItem Icon={VscLibrary} text="Your Library" />
        </SidebarSection>
        <SidebarSection>
          <SidebarItem text="Create Playlist" />
          <SidebarItem text="Liked Songs" styles="mb-3" />
        </SidebarSection>
        <hr className="font-thin text-sm border-gray-700 py-1" />
        <SidebarSection styles="mb-6">
          <SidebarItem text="Malayalam Melodies" />
          <SidebarItem text="FTLOG" />
          <SidebarItem text="Your Top Songs 2021" />
        </SidebarSection>
      </ul>
    </nav>
  );
};

export default Sidebar;
