"use client";

import { useMedia } from "react-use";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getText } from "@/lib/translations"; // Import the getText function
import "./style.css";
import { useState } from "react";

const routes = [
  {
    href: "/",
    labelKey: "overview",
  },
  {
    href: "/transactions",
    labelKey: "transactions",
  },
  {
    href: "/accounts",
    labelKey: "accounts",
  },
  {
    href: "/categories",
    labelKey: "categories",
  },
];

type NavigationProps = {
  language: {
    code: string;
    flag: string;
  };
};

export const Navigation = ({ language }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const getTextWithClass = (key: string) => {
    const text = getText(language.code, key);
    return language.code === "KH" ? (
      <span className="khmer-font">{text}</span>
    ) : (
      text
    );
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white text-xl focus:bg-white/30 transaction"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-x-6 gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {getTextWithClass(route.labelKey)}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className="hidden lg:flex items-center gap-x-4 overflow-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={getTextWithClass(route.labelKey)}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
