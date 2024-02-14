import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "link" | "contained";
  size: "sm" | "md" | "lg";
  className?: string;
};

const variants: Record<Props["variant"], string> = {
  contained: "bg-blue-500 text-white",
  link: "text-blue-500",
};

const sizes: Record<Props["size"], string> = {
  lg: "text-md py-3 px-5 rounded-lg",
  md: "text-sm py-2 px-3 rounded-md",
  sm: "text-xs py-1 px-1 rounded-sm",
};

const Button: FC<Props> = ({ children, variant, size, className }) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 hover:cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
