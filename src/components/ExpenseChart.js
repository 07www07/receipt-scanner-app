import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Receipt } from "../models";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function ExpenseChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const receipts = await DataStore.query(Receipt);
      const agg = {};
      receipts.forEach((r) => {
        const date = r.date.split("T")[0]; // YYYY-MM-DD
        agg[date] = (agg[date] || 0) + r.totalAmount;
      });
      setData(Object.entries(agg).map(([date, total]) => ({ date, total })));
    };
    fetchData();
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="total" fill="#8884d8" />
    </BarChart>
  );
}
