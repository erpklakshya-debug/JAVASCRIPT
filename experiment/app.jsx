import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <h2>Balance: ₹{balance}</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (+income / -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addTransaction}>Add Transaction</button>
      </div>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>
              {transaction.text} : ₹{transaction.amount}
            </span>

            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;