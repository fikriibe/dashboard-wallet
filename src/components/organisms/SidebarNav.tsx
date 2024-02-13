"use client";

import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import {
  PiBell,
  PiClock,
  PiHouse,
  PiNut,
  PiUsers,
  PiWallet,
} from "react-icons/pi";
import ButtonIcon from "../atoms/ButtonIcon";

const SidebarNav = () => {
  const [active, setActive] = useState(0);
  const menus = [PiHouse, PiBell, PiClock, PiUsers, PiWallet, PiNut];

  const renderItem = useCallback(
    (Icon: IconType, index: number) => {
      const isActive = active === index;
      return (
        <ButtonIcon
          key={index}
          onClick={() => setActive(index)}
          className={
            isActive
              ? "bg-blue-700 text-white"
              : "bg-neutral-100 text-neutral-700"
          }
        >
          <Icon size={20} />
        </ButtonIcon>
      );
    },
    [active]
  );

  return (
    <div className="bg-neutral-100 rounded-[20px] flex flex-col gap-2 my-auto">
      {menus.map(renderItem)}
    </div>
  );
};

export default SidebarNav;
