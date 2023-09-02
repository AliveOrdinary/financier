import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-4 py-10 md:py-20 lg:py-40 px-10">
      <div className="flex flex-col flex-1 justify-center items-center gap-2 md:gap-6 mx-auto">
        <div className="text-6xl md:text-8xl xl:text-9xl font-bold tracking-wider">
          Financier.
        </div>
        <div className="text-lg md:text-2xl lg:text-2xl  xl:text-4xl font-normal">
          The best way to manage your money.
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center w-5/6  lg:w-4/6 gap-4 ">
        <div className="flex justify-center items-center">
          <Image
            src={"/finance_hero.svg"}
            alt="hero"
            width={400}
            height={400}
          />
        </div>
        <div className="text-neutral-900 text-base md:text-3xl lg:text-2xl xl:text-4xl  font-bold uppercase dark:text-neutral-100">
          Track Your Own Way
        </div>
        <div className="text-neutral-900 dark:text-neutral-100 text-base md:text-xl lg:text-lg xl:text-xl font-normal text-center w-5/6 lg:w-4/6 py-3 lg:py-6">
          Step into the world of personal finance tracking with Financier. It’s
          time to conquer your finances like never before.
        </div>
        <div className="flex mb-6">
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </main>
  );
};
