"use client";

import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import Typography from "@/components/atoms/Typography";
import { useCallback, useRef, useState } from "react";
import { PiPaperclip, PiSmiley } from "react-icons/pi";

const Chat = () => {
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([
    { content: "Are you ready?", isMe: true },
    { content: "i have prepared everything", isMe: false },
  ]);

  const onSendChat = useCallback(() => {
    let content = "";
    setInput((prevInput) => {
      content = prevInput;
      return "";
    });
    setChats((prev) => [...prev, { content, isMe: true }]);
  }, []);

  const renderChat = useCallback((item: (typeof chats)[0], index: number) => {
    const className = item.isMe
      ? "bg-blue-500 text-white rounded-br-none"
      : "bg-neutral-200 rounded-bl-none";
    return (
      <div
        className={`flex gap-2 ${item.isMe ? "justify-end" : "justify-start"}`}
        key={index}
      >
        {!item.isMe && <Avatar src="/profile.jpeg" size={40} />}
        <div className={`rounded-lg p-2 ${className}`}>
          <Typography>{item.content}</Typography>
        </div>
        {item.isMe && <Avatar src="/profile.jpeg" size={40} />}
      </div>
    );
  }, []);

  return (
    <div className="flex flex-col">
      <Typography size="lg" variant="header">
        Easther Howard
      </Typography>
      <div className="flex flex-col gap-3 flex-1 overflow-auto max-h-[200px]">
        {chats.map(renderChat)}
      </div>
      <div className="bg-neutral-100 rounded-md py-2 px-3 mt-2">
        <input
          type="text"
          className="bg-transparent w-full outline-none"
          placeholder="type your message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="flex items-center ">
          <ButtonIcon>
            <PiSmiley size={24} />
          </ButtonIcon>
          <ButtonIcon>
            <PiPaperclip size={24} />
          </ButtonIcon>
          <Button
            variant="contained"
            size="md"
            className="ml-auto"
            onClick={onSendChat}
          >
            Send now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
