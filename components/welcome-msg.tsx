"use client";

import { useUser } from "@clerk/nextjs";
import { getText } from "@/lib/translations";
import "./style.css";

type WelcomeMsgProps = {
  language: {
    code: string;
    flag: string;
  };
};

export const WelcomeMsg = ({ language }: WelcomeMsgProps) => {
  const { user, isLoaded } = useUser();

  const getTextWithClass = (key: string) => {
    const text = getText(language.code, key);
    return language.code === "KH" ? (
      <span className="khmer-font">{text}</span>
    ) : (
      text
    );
  };

  return (
    <div className="space-y-4 mb-12">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        {getTextWithClass("welcome")} {isLoaded ? ", " : " "}
        {user?.lastName} 👋🏼
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        {getTextWithClass("This")}
      </p>
    </div>
  );
};
