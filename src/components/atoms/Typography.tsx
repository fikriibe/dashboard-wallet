import { FC, ReactElement } from "react";

type TypographySize = "lg" | "md" | "sm";
type TypographyVariant = "header" | "paragraph";

type Props = {
  variant?: TypographyVariant;
  size?: TypographySize;
  children: ReactElement | string;
  className?: string;
};

const baseSize: Record<TypographyVariant, Record<TypographySize, string>> = {
  header: {
    lg: "text-lg",
    md: "text-md",
    sm: "text-sm",
  },
  paragraph: {
    lg: "text-md",
    md: "text-sm",
    sm: "text-xs",
  },
};

const Typography: FC<Props> = ({
  children,
  variant = "paragraph",
  size = "md",
}) => {
  return (
    <p
      className={`text-neutral-800 ${baseSize[variant][size]} ${
        variant === "header" ? "font-bold" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Typography;
