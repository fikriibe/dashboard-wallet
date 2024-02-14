import { FC } from "react";
import Typography from "../atoms/Typography";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => (
  <Typography variant="header" size="lg" className={className}>
    S.
  </Typography>
);

export default Logo;
