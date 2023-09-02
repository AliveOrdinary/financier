import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

export const GetStarted = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center mx-auto py-32 gap-4 lg:gap-8 bg-[url('/60-lines.png')] bg-repeat">
      <h1 className="uppercase font-bold text-4xl lg:text-6xl text-cyan-800 dark:text-cyan-400">
        Get Started
      </h1>
      <p className="text-base  lg:text-2xl w-4/6 lg:w-3/6 text-center text-cyan-800 dark:text-cyan-400">
        Don’t let another moment slip away in financial confusion. Try Financier
        now and leap into a world of clarity and confidence. Join the money
        masters.
      </p>
      <Link
        href={"/sign-up"}
        className={buttonVariants({ variant: "default" })}
      >
        Sign Up
      </Link>
    </main>
  );
};
