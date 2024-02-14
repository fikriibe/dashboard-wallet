import { PiDotsThreeVerticalBold } from "react-icons/pi";
import ButtonIcon from "../atoms/ButtonIcon";
import { FC } from "react";

type Props = {
  onClick?: () => void;
  size?: number;
};

const ButtonOption: FC<Props> = ({ onClick, size = 20 }) => {
  return (
    <ButtonIcon onClick={onClick}>
      <PiDotsThreeVerticalBold size={size} />
    </ButtonIcon>
  );
};

export default ButtonOption;
