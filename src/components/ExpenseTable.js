import React, { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Receipt } from '../models';

export default function ExpenseTable() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    const items = await DataStore.query(Receipt);
    setReceipts(items);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Vendor</th>
          <th>Total</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {receipts.map(r => (
          <tr key={r.id}>
            <td>{r.date}</td>
            <td>{r.vendor}</td>
            <td>{r.totalAmount}</td>
            <td>{JSON.stringify(r.items)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
