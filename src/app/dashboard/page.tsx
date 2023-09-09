"use client";
import React from "react";
import { auth, db } from "@/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppContext } from "@/FinanceContext";
import { Cards } from "@/components/Cards";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

type TransactionValues = {
  name: string;
  amount: string;
  tag: string;
  date: Date;
  id?: string;
  type?: string;
};

const Dashboard = () => {
  const {
    income,
    expense,
    totalBalance,
    setIncome,
    setExpense,
    setTotalBalance,
  } = useAppContext();
  const [transactions, setTransactions] = React.useState<TransactionValues[]>(
    []
  );
  const [user] = useAuthState(auth);
  if (!user) {
    redirect("/sign-up");
  }
  const onFinish = (data: TransactionValues, type: string) => {
    const newTransaction = {
      ...data,
      type,
    };
    addTransaction(newTransaction, false);
  };

  const fetchTransactions = async () => {
    const transactions: TransactionValues[] = [];
    const querySnapshot = await getDocs(
      collection(db, `users/${user?.uid}/transactions`)
    );
    querySnapshot.forEach((doc) => {
      transactions.push({ ...doc.data(), id: doc.id } as TransactionValues);
    });
    setTransactions(transactions);
    console.log(transactions);
  };

  React.useEffect(() => {
    console.log(user);
    fetchTransactions();
  }, []);

  const addTransaction = async (data: TransactionValues, many: any) => {
    try {
      const docRef = await addDoc(
        collection(db, `users/${user?.uid}/transactions`),
        data
      );
      if (!many) toast({ title: "Transaction added successfully" });
      let newArr = transactions;
      newArr.push({ ...data, id: docRef.id });
      setTransactions(newArr);
    } catch (e) {}
  };

  const calculateBalance = () => {
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        income += parseInt(transaction.amount);
      } else {
        expense += parseInt(transaction.amount);
      }
    });
    setIncome(income);
    setExpense(expense);
    setTotalBalance(income - expense);
  };

  React.useEffect(() => {
    calculateBalance();
  }, [transactions]);

  return (
    <div className="flex justify-center items-center w-full py-6">
      <Cards onFinish={onFinish} />
    </div>
  );
};

export default Dashboard;
