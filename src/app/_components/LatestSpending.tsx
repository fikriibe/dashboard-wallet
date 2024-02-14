import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import ButtonOption from "@/components/molecules/ButtonOption";
import { Fragment } from "react";
import { PiArrowRightLight } from "react-icons/pi";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Online Store",
    date: "May 30 2023 at 08.00am",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pay the hospital",
    date: "May 30 2023 at 08.00am",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ticket",
    date: "May 30 2023 at 08.00am",
  },
];

const LatestSpending = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Typography variant="header" size="md">
          Latest Spending
        </Typography>
        <ButtonOption />
      </div>
      {data.map(({ title, date, image }, index) => (
        <Fragment key={title}>
          {!!index && <hr />}
          <div className="flex items-center gap-4 py-1">
            <Avatar src={image} size={48} />
            <div className="flex-1">
              <Typography variant="header" size="sm">
                {title}
              </Typography>
              <Typography size="sm">{date}</Typography>
            </div>
          </div>
        </Fragment>
      ))}
      <Button variant="link" size="md" className="w-full">
        View all <PiArrowRightLight size={20} />
      </Button>
    </div>
  );
};

export default LatestSpending;
