import React, { FC, ReactElement } from "react";

type Props = {
  children: ReactElement;
  onClick?: () => void;
  className?: string;
};

const ButtonIcon: FC<Props> = ({ children, onClick, className }) => {
  return (
    <div
      className={` w-10 h-10 rounded-full overflow-hidden grid place-content-center hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonIcon;
