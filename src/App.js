import React from "react";
import UploadReceipt from "./components/UploadReceipt";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseChart from "./components/ExpenseChart";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Receipt Scanner App</h1>
      <UploadReceipt />
      <h2>Expenses Table</h2>
      <ExpenseTable />
      <h2>Expenses Chart</h2>
      <ExpenseChart />
    </div>
  );
}
