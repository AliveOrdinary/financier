import React from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="py-4 px-8 w-full sticky top-0 left-0 flex justify-between items-center border-b border-blue-900 backdrop-blur-3xl bg-background">
      <Link
        href="/"
        className="dark:text-neutral-100 text-neutral-900 font-semibold text-lg tracking-wider"
      >
        Financier.
      </Link>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/sign-up"
          className={buttonVariants({ variant: "default" })}
        >
          Get Started
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;