import React, { useState } from "react";
import { groupByUser } from "./aggregate";

export const Records = ({ records, setRecords, sortByUser }) => {
  return (
    <div className="Records">
      <AddRecord records={records} setRecords={setRecords} />
      {sortByUser ? (
        <RecordsUserView records={records} />
      ) : (
        <RecordsTotalView records={records} />
      )}
    </div>
  );
};

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

export const RecordsTotalView = ({ records }) => {
  return (
    <div>
      <h2>record</h2>
      {records.map((record, index) => (
        <div key={index} className="HStack">
          <p className="RecordName">{record.name}</p>
          <p className="RecordTitle">{record.title}</p>
          <p className="RecordAmount">{record.amount}</p>
        </div>
      ))}
    </div>
  );
};

export const RecordsUserView = ({ records }) => {
  const recordByUser = groupByUser(records);

  return (
    <div>
      <h2>record by user</h2>
      {recordByUser.map((user) => (
        <div key={user.name} className="UserRecords">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h3>{user.totalAmount}</h3>
          </div>
          <p>tasks</p>
          {user.records.map((record, index) => (
            <div key={index} className="Record">
              <p>{record.title}</p>
              <p>{record.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
