"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { auth, db, doc, provider } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDoc, setDoc } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

const FormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is mandatory" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .nonempty({
      message: "Password is mandatory",
    })
    .min(8),
});

const SignIn = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast({
          variant: "default",
          title: "Success",
          description: "User Authenticated Successfully",
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        });
      });
  };

  const googleSignIn = () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;
          toast({
            variant: "default",
            title: "Success",
            description: "User Authenticated Successfully",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode, errorMessage, email, credential);
          toast({
            variant: "destructive",
            title: "Error",
            description: errorMessage,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-4/12 flex flex-col justify-center items-center px-10 py-8 border-2 rounded-lg gap-6">
      <h1 className="text-2xl font-semibold text-center ">
        Login to <span className="text-primary">Financier.</span>
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@abc.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <div className=" w-full flex justify-center items-center gap-10">
        <Button className="w-full" onClick={googleSignIn} variant="outline">
          Login with Google
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center  font-light text-neutral-500 dark:text-neutral-400 text-sm">
          Don&#39;t have an account?
          <span
            className="cursor-pointer text-neutral-800 dark:text-neutral-200"
            onClick={() => router.push("/sign-up")}
          >
            {" "}
            Click here!
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
