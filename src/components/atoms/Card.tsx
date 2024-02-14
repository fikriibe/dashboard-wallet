import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  withBorder?: boolean;
  withPadding?: boolean;
};
const Card: FC<Props> = ({ children, withBorder, withPadding }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md ${
        withBorder ? "border border-neutral-200" : ""
      } ${withPadding ? "p-4" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
