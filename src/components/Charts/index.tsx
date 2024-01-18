import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";

type TransactionValues = {
  name: string;
  amount: string;
  tag: string;
  date: Date;
  id?: string;
  type?: string;
  expenseAmount?: number;
  incomeAmount?: number;
};

interface ChartsProps {
  sortedTransactions: TransactionValues[];
}

const Charts: React.FC<ChartsProps> = ({ sortedTransactions }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#ff7029", "#ff2970"];
  const updatedTransactions = sortedTransactions.map((transaction) => {
    if (transaction.type === "expense") {
      return {
        ...transaction,
        expenseAmount: parseFloat(transaction.amount),
        incomeAmount: 0,
      };
    } else if (transaction.type === "income") {
      return {
        ...transaction,
        expenseAmount: 0,
        incomeAmount: parseFloat(transaction.amount),
      };
    } else {
      return transaction;
    }
  });

  const data = updatedTransactions.map((transaction) => ({
    date: transaction.date,
    expense: transaction.expenseAmount,
    income: transaction.incomeAmount,
    type: transaction.type,
  }));

  const calculateChartData = (transactions: TransactionValues[]) => {
    const tagFrequencies: { [key: string]: number } = {};

    transactions.forEach((transaction: TransactionValues) => {
      const { tag } = transaction;
      if (tagFrequencies[tag]) {
        tagFrequencies[tag]++;
      } else {
        tagFrequencies[tag] = 1;
      }
    });

    const chartData = Object.keys(tagFrequencies).map((tag) => ({
      name: tag,
      value: tagFrequencies[tag],
    }));

    return chartData;
  };

  const chartData = calculateChartData(sortedTransactions);

  return (
    <div className="flex justify-center items-center gap-20 py-10">
      <div>
        <LineChart width={700} height={400} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#3879e0" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="expense"
            name="Expenses"
            stroke="red"
          />
          <Line type="monotone" dataKey="income" name="Income" stroke="green" />
        </LineChart>
      </div>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
