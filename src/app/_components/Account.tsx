import Typography from "@/components/atoms/Typography";
import Logo from "@/components/molecules/Logo";
import Image from "next/image";
import React from "react";

const Account = () => {
  return (
    <div
      className="overflow-hidden rounded-lg p-6 min-h-[250px] h-[100%] flex flex-col text-white gap-3 object-cover object-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Image
          src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1"
          alt=""
          width={50}
          height={20}
        />
      </div>
      <Typography className="mt-auto" size="lg">
        ****9839
      </Typography>
      <div className="flex items-center justify-between">
        <Typography>John Demon</Typography>
        <Typography>08/12</Typography>
      </div>
    </div>
  );
};

export default Account;
