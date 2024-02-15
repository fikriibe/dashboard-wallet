"use client";

import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import ButtonOption from "@/components/molecules/ButtonOption";
import { formatDate } from "@/utils/date";
import { formatAmountWithSymbol } from "@/utils/number";
import { Fragment, useCallback, useState } from "react";
import { PiUserBold } from "react-icons/pi";

const LastTransaction = () => {
  const [state, setState] = useState([
    {
      title: "Bessie Cooper",
      timestamp: 1688270577000,
      total: -3000,
    },
    {
      title: "Guy Hawkins",
      timestamp: 1638270577000,
      total: 1970,
    },
    {
      title: "Floyd Miles",
      timestamp: 1668270577000,
      total: -5000,
    },
  ]);

  const onSort = useCallback(
    (order: "asc" | "desc") =>
      setState((prev) => {
        const newData = prev.sort((a, b) => {
          if (order == "asc") {
            return a.timestamp - b.timestamp;
          }
          return b.timestamp - a.timestamp;
        });
        return [...newData];
      }),
    []
  );

  const renderItem = useCallback(
    (item: (typeof state)[0]) => (
      <Fragment key={item.title}>
        <hr />
        <div className="flex gap-3 items-center">
          <PiUserBold size={24} />
          <div className="flex-1">
            <Typography variant="header">{item.title}</Typography>
            <Typography>
              {formatDate(item.timestamp, "DD MMMM YYYY")}
            </Typography>
          </div>
          <Typography variant="header">
            {formatAmountWithSymbol(item.total, "$")}
          </Typography>
          <ButtonOption />
        </div>
      </Fragment>
    ),
    []
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <Typography variant="header" className="flex-1">
          Latest transactions
        </Typography>
        <Button
          variant="link"
          size="sm"
          className="text-neutral-600 underline"
          onClick={() => onSort("desc")}
        >
          Newest
        </Button>
        <Button
          variant="link"
          size="sm"
          className="text-neutral-600 underline"
          onClick={() => onSort("asc")}
        >
          Oldest
        </Button>
      </div>
      {state.map(renderItem)}
    </div>
  );
};

export default LastTransaction;
