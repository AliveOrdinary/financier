"use client";
import React, { createContext, useState, useContext } from "react";

type Income = number;
type Expense = number;
type totalBalance = number;

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<{
  income: Income;
  expense: Expense;
  totalBalance: totalBalance;
  setIncome: React.Dispatch<React.SetStateAction<Income>>;
  setExpense: React.Dispatch<React.SetStateAction<Expense>>;
  setTotalBalance: React.Dispatch<React.SetStateAction<totalBalance>>;
}>({
  income: 0,
  expense: 0,
  totalBalance: 0,
  setIncome: () => {},
  setExpense: () => {},
  setTotalBalance: () => {},
});

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [income, setIncome] = useState<Income>(0);
  const [expense, setExpense] = useState<Expense>(0);
  const [totalBalance, setTotalBalance] = useState<totalBalance>(0);

  return (
    <AppContext.Provider
      value={{
        income,
        expense,
        totalBalance,
        setIncome,
        setExpense,
        setTotalBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
