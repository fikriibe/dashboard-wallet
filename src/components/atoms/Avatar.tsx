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
      className="rounded-full overflow-hidden relative"
    >
      <Image
        src={src}
        alt={alt}
        sizes={`${size}`}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
