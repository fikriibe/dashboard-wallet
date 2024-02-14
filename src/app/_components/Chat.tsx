import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import Typography from "@/components/atoms/Typography";
import { PiPaperclip, PiSmiley } from "react-icons/pi";

const Chat = () => {
  return (
    <div className="flex flex-col">
      <Typography size="lg" variant="header">
        Easther Howard
      </Typography>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-end justify-end gap-2">
          <div className="bg-blue-500 text-white p-2 rounded-lg rounded-br-none">
            <Typography>Are you ready?</Typography>
          </div>
          <Avatar src="/profile.jpeg" size={40} />
        </div>
        <div className="flex items-end justify-start gap-2">
          <Avatar src="/profile.jpeg" size={40} />
          <div className="bg-neutral-200 p-2 rounded-lg rounded-bl-none">
            <Typography>i have prepared everything</Typography>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 rounded-md py-2 px-3">
        <input
          type="text"
          className="bg-transparent w-full outline-none"
          placeholder="type your message"
        />
        <div className="flex items-center ">
          <ButtonIcon>
            <PiSmiley size={24} />
          </ButtonIcon>
          <ButtonIcon>
            <PiPaperclip size={24} />
          </ButtonIcon>
          <Button variant="contained" size="md" className="ml-auto">
            Send now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
