"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";

const mainNavItems = [
  {
    title: "Home",
    href: "/",
    description: "Discover everything Cerebro has to offer",
  },
  {
    title: "Talent",
    href: "/talent",
    subItems: [
      {
        title: "Talent",
        href: "/talent",
        description: "Unlock your full potential with our talent solutions",
      },
      {
        title: "Training",
        href: "/talent/training",
        description: "Enhance your skills with expert-led courses",
      },
      {
        title: "Mentorship",
        href: "/talent/mentorship",
        description: "Get guidance from industry professionals",
      },
      {
        title: "Work Center",
        href: "/talent/work-center",
        description: "Find opportunities and grow your career",
      },
    ],
  },
  {
    title: "Business",
    href: "/business",
    subItems: [
      {
        title: "Business",
        href: "/business",
        description: "Empower your business with tailored solutions",
      },
      {
        title: "Recruitment",
        href: "/business/recruitment",
        description: "Streamline your hiring process",
      },
      {
        title: "Consulting",
        href: "/business/consulting",
        description: "Expert advice to grow your business",
      },
      {
        title: "Build Shop",
        href: "/business/build-shop",
        description: "Turn your ideas into reality",
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    subItems: [
      {
        title: "Our Story",
        href: "/about/story",
        description: "Learn about our journey and mission",
      },
      {
        title: "Team",
        href: "/about/team",
        description: "Meet the people behind Cerebro",
      },
      {
        title: "Careers",
        href: "/about/careers",
        description: "Join our innovative team",
      },
    ],
  },
];

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container pr-4 pl-2 mx-auto flex h-16 items-center">
        <div className="mr-4 flex gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/cerebro_logo.png"
              alt="Cerebro Logo"
              className="h-10 w-auto"
            />
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-4">
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.subItems ? (
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  ) : (
                    <Link href={item.href}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                  {item.subItems && (
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            href={subItem.href}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="hidden md:inline-flex hover:text-sky-600"
            >
              Sign In
            </Button>
            <Button className="hidden md:inline-flex bg-sky-500 hover:bg-white hover:text-sky-600">
              Sign Up
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="sr-only">
                  <SheetTitle>Mobile menu</SheetTitle>
                  <SheetDescription>Mobile menu navigation</SheetDescription>
                </SheetHeader>
                <MobileNav items={mainNavItems} setIsOpen={setIsOpen} />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
