"use client";

import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import Typography from "@/components/atoms/Typography";
import ButtonOption from "@/components/molecules/ButtonOption";
import { useCallback, useMemo, useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const ListToBuy = () => {
  const [state, setState] = useState([
    { title: "macbook", isChecked: true },
    { title: "bicycle", isChecked: false },
    { title: "motorcycle", isChecked: true },
    { title: "iphone", isChecked: false },
  ]);

  const renderItem = useCallback(
    (item: (typeof state)[0], index: number) => (
      <div key={item.title} className="flex items-center gap-2 bg-neutral-200 rounded-lg p-1 pl-3">
        <Checkbox
          checked={item.isChecked}
          onChange={(newChecked) =>
            setState((prev) =>
              prev.map((prevItem, i) => ({
                ...prevItem,
                isChecked: index == i ? newChecked : prevItem.isChecked,
              }))
            )
          }
        />
        <Typography className="flex-1" variant="header" size="sm">
          {item.title}
        </Typography>
        <ButtonOption />
      </div>
    ),
    []
  );

  const totalChecked = useMemo(
    () => state.filter(({ isChecked }) => isChecked).length,
    [state]
  );

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="header">List Items to buy</Typography>
      <div className="flex items-center gap-4">
        <div>
          <Typography variant="header" size="lg">
            02:00
          </Typography>
          <Typography className="text-neutral-400">Sat, August 12</Typography>
        </div>
        <Typography variant="header" size="xl" className="text-neutral-300">
          {">"}
        </Typography>
        <div>
          <Typography variant="header" size="lg">
            02:00
          </Typography>
          <Typography className="text-neutral-400">Sat, August 12</Typography>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>
          <Typography className="text-neutral-400 inline">
            {totalChecked} / {state.length}{" "}
          </Typography>
          <Typography className="inline">Shopping ist</Typography>
        </span>
        <Button variant="link" size="sm" className="text-neutral-600">
          <PiPlusBold size={12} />
          <Typography variant="header" size="sm">
            Add an items
          </Typography>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">{state.map(renderItem)}</div>
    </div>
  );
};

export default ListToBuy;
