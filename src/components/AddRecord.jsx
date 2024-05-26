import { useState } from "react";

export const AddRecord = ({ records, setRecords }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!name || !title || !amount) {
      alert("Please fill in all fields");
      return;
    }
    const record = { name, title, amount: Number(amount) };
    setRecords([...records, record]);

    setName("");
    setTitle("");
    setAmount("");
  };
  return (
    <div>
      <h2>Add Record</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
};
