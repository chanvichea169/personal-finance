"use client";

import { WelcomeMsg } from "./welcome-msg";
import {
  UserButton,
  ClerkLoading,
  ClerkLoaded,
  useUser,
  useAuth,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { Filters } from "@/components/filters";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { getText } from "@/lib/translations"; // Import the getText function
import Image from "next/image"; // Import the Image component
import "./style.css"; // Import the CSS file

export const Header = () => {
  const { isSignedIn } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState({
    code: "Eng",
    flag: "/images/uk.png",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string, flag: string) => {
    setLanguage({ code, flag });
    handleClose();
  };

  const getTextWithClass = (key: string) => {
    const text = getText(language.code, key);
    return language.code === "KH" ? (
      <span className="khmer-font">{text}</span>
    ) : (
      text
    );
  };

  return (
    <header className="bg-gradient-to-b from-blue-900 to-blue-500 px-6 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation language={language} />{" "}
            {/* Pass language state to Navigation */}
          </div>
          <ClerkLoaded>
            <div className="flex items-center gap-x-4">
              <Button
                onClick={handleClick}
                className="bg-transparent hover:bg-transparent text-white flex items-center text-lg" // Add text-lg for larger font size
              >
                <Image
                  src={language.flag}
                  alt={`${language.code} Flag`}
                  width={20}
                  height={20}
                  className="mr-2"
                />{" "}
                {getTextWithClass("language")}
              </Button>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => handleLanguageChange("Eng", "/images/uk.png")}
                  className="text-lg" // Add text-lg for larger font size
                >
                  <Image
                    src="/images/uk.png"
                    alt="USA Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />{" "}
                  Eng
                </MenuItem>
                <MenuItem
                  onClick={() => handleLanguageChange("KH", "/images/kh.png")}
                  className="text-lg" // Add text-lg for larger font size
                >
                  <Image
                    src="/images/kh.png"
                    alt="Cambodia Flag"
                    width={20}
                    height={20}
                    className="mr-2"
                  />{" "}
                  KH
                </MenuItem>
              </Menu>
              {isSignedIn ? (
                <>
                  <UserButton />
                </>
              ) : (
                <Link href={"/sign-in"}>
                  <Button className="w-full bg-blue-950 hover:bg-blue-90/70 text-lg">
                    {getTextWithClass("getStarted")}
                  </Button>
                </Link>
              )}
            </div>
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg language={language} />
        <Filters />
      </div>
    </header>
  );
};
