"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/store";

interface MobileNavProps {
  items: {
    title: string;
    href: string;
    subItems?: { title: string; href: string }[];
  }[];
  setIsOpen: (open: boolean) => void;
}

export function MobileNav({ items, setIsOpen }: MobileNavProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { openLoginModal, openSignupModal } = useModalStore();

  return (
    <ScrollArea className="h-[calc(100vh-8rem)] py-6">
      <div className="flex flex-col space-y-3">
        {items.map((item) => (
          <div key={item.title} className={cn("flex flex-col")}>
            {item.subItems ? (
              <button
                className="flex w-full items-center justify-between rounded-md p-2 text-left text-sm font-medium hover:bg-slate-100"
                onClick={() => {
                  if (openItems.includes(item.title)) {
                    setOpenItems(openItems.filter((i) => i !== item.title));
                  } else {
                    setOpenItems([...openItems, item.title]);
                  }
                }}
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    openItems.includes(item.title) ? "rotate-180" : ""
                  )}
                />
              </button>
            ) : (
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "w-full rounded-md p-2 text-sm font-medium hover:bg-slate-100",
                  "pathname" === item.href && "font-bold"
                )}
              >
                {item.title}
              </Link>
            )}
            {item.subItems && openItems.includes(item.title) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 mt-2 flex flex-col space-y-2"
              >
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-md p-2 text-sm hover:underline",
                      "pathname" === subItem.href && "font-medium"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <Button
          variant="outline"
          className="w-full hover:text-sky-600"
          onClick={() => {
            setIsOpen(false);
            openLoginModal();
          }}
        >
          Sign In
        </Button>
        <Button
          className="w-full bg-sky-500 hover:bg-white hover:text-sky-600"
          onClick={() => {
            setIsOpen(false);
            openSignupModal();
          }}
        >
          Sign Up
        </Button>
      </div>
    </ScrollArea>
  );
}
