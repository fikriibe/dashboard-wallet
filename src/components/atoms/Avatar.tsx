import Image from "next/image";
import { FC } from "react";

type Props = {
  src?: string;
  alt?: string;
  size?: number;
};

const Avatar: FC<Props> = ({ src = "", alt = "avatar", size }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden"
    >
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Avatar;
