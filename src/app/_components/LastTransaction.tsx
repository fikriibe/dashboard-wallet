import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import ButtonOption from "@/components/molecules/ButtonOption";
import { formatDate } from "@/utils/date";
import { formatAmountWithSymbol } from "@/utils/number";
import { Fragment, useCallback } from "react";
import { PiUserBold } from "react-icons/pi";

const data = [
  {
    title: "Bessie Cooper",
    timestamp: 1688270577000,
    total: -3000,
  },
  {
    title: "Bessie Cooper",
    timestamp: 1638270577000,
    total: 1970,
  },
  {
    title: "Bessie Cooper",
    timestamp: 1668270577000,
    total: -5000,
  },
];

const LastTransaction = () => {
  const renderItem = useCallback(
    (item: (typeof data)[0]) => (
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
        <Button variant="link" size="sm" className="text-neutral-600 underline">
          Newest
        </Button>
        <Button variant="link" size="sm" className="text-neutral-600 underline">
          Oldest
        </Button>
      </div>
      {data.map(renderItem)}
    </div>
  );
};

export default LastTransaction;
