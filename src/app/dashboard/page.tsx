"use client";
import React from "react";
import { auth, db } from "@/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return <div>Dashboard</div>;
};

export default Dashboard;
