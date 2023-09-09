"use client";
import React, { useEffect } from "react";
import { ModeToggle } from "./ThemeToggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";
import { toast } from "./ui/use-toast";
import Image from "next/image";
import userImg from "../../public/user.svg";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  });

  const logOutFn = () => {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast({
            title: "Signed out successfully",
            variant: "default",
          });
          router.push("/");
        })
        .catch((error) => {
          // An error happened.
          toast({
            title: "Error signing out",
            variant: "destructive",
          });
        });
    } catch (e) {
      toast({
        title: "Error signing out",
        variant: "destructive",
      });
    }
  };
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <div className="py-3 px-8 w-full sticky top-0 left-0 flex justify-between items-center border-b border-blue-900 backdrop-blur-3xl bg-background">
      <Link
        href="/"
        className="dark:text-neutral-100 text-neutral-900 font-semibold text-xl tracking-wider"
      >
        Financier.
      </Link>
      <div className="flex items-center justify-center gap-4">
        {isHome ? (
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            Get Started
          </Link>
        ) : (
          user && (
            <div className="flex items-center gap-2 justify-center">
              <img
                src={user?.photoURL ? user?.photoURL : userImg}
                width={30}
                height={30}
                alt="user-icon"
                className="rounded-full"
              />
              <p
                className="cursor-pointer font-medium text-base text-white"
                onClick={logOutFn}
              >
                Logout
              </p>
            </div>
          )
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
