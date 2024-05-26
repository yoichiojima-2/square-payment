import { useState } from "react";
import "./AddRecord.css";

export const AddRecord = ({ show, setShow, records, setRecords }) => {
  return (
    <Modal show={show}>
      <AddRecordContent
        records={records}
        setRecords={setRecords}
        setShow={setShow}
      />
    </Modal>
  );
};

const Modal = ({ show, children }) => (
  <div className={`Modal ${show ? "show" : ""}`}>
    <div className="ModalContent">{children}</div>
  </div>
);

export const AddRecordContent = ({ records, setRecords, setShow }) => {
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
    <div className="AddRecord">
      <div className="VStack">
        <h2>Add Record</h2>
        <div className="VStack">
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
        </div>
        <button onClick={handleSubmit}>+</button>
        <button onClick={() => setShow(false)}>close</button>
      </div>
    </div>
  );
};
