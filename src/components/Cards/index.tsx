"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { auth, db } from "@/firebaseConfig";
import { useAppContext } from "@/FinanceContext";
import IncomeForm from "../IncomeForm";

type TransactionValues = {
  name: string;
  amount: string;
  tag: string;
  date: Date;
  id?: string;
  type?: string;
};

type CardsProps = {
  onFinish: (data: TransactionValues, type: string) => void;
};

export const Cards = ({ onFinish }: CardsProps) => {
  const [date, setDate] = React.useState<Date>();
  const {
    income,
    expense,
    totalBalance,
    setIncome,
    setExpense,
    setTotalBalance,
  } = useAppContext();

  return (
    <div className="flex justify-evenly items-center w-full lg:flex-row flex-col gap-10">
      <Card className="xl:min-w-[400px] lg:min-w-[300px] min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center uppercase">Income</CardTitle>
          <CardContent className="pt-6">
            <div className="font-semibold text-4xl">$ {income.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Add Income</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Income</DialogTitle>
                  <DialogDescription>Add recent income</DialogDescription>
                </DialogHeader>
                <IncomeForm onFinish={onFinish} type="Income" />
              </DialogContent>
            </Dialog>
          </CardFooter>
        </CardHeader>
      </Card>
      <Card className="xl:min-w-[400px] lg:min-w-[300px] min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center uppercase">Expense</CardTitle>
          <CardContent className="pt-6">
            <div className="font-semibold text-4xl">$ {expense.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Add Expense</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Expense</DialogTitle>
                  <DialogDescription>Add recent expenses</DialogDescription>
                </DialogHeader>
                <IncomeForm onFinish={onFinish} type="Expense" />
              </DialogContent>
            </Dialog>
          </CardFooter>
        </CardHeader>
      </Card>
      <Card className="xl:min-w-[400px] lg:min-w-[300px] min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center uppercase">Total Balance</CardTitle>
          <CardContent className="pt-6">
            <div className="font-semibold text-4xl">
              $ {totalBalance.toFixed(2)}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="w-full">Reset Balance</Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};
