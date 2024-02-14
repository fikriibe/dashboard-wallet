import { FC, ReactNode } from "react";

type TypographySize = "xl" | "lg" | "md" | "sm";
type TypographyVariant = "header" | "paragraph";

type Props = {
  variant?: TypographyVariant;
  size?: TypographySize;
  children: ReactNode | string;
  className?: string;
};

const baseSize: Record<TypographyVariant, Record<TypographySize, string>> = {
  header: {
    xl: "text-xl",
    lg: "text-lg",
    md: "text-md",
    sm: "text-sm",
  },
  paragraph: {
    xl: "text-lg",
    lg: "text-md",
    md: "text-sm",
    sm: "text-xs",
  },
};

const Typography: FC<Props> = ({
  children,
  variant = "paragraph",
  size = "md",
  className,
}) => {
  return (
    <p
      className={`${className || ""} ${baseSize[variant][size]} ${
        variant === "header" ? "font-bold" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Typography;
