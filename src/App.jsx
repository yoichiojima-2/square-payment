import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { SquareView } from "./components/SquareView";
import { RecordsUserView, RecordsTotalView } from "./components/RecordView";
import { AddRecord } from "./components/AddRecord";
import { Controls } from "./components/Controls";
import "./App.css";
import "./index.css";

const App = () => {
  const [records, setRecords] = useState([
    { name: "Alice", title: "Coffee", amount: 5 },
    { name: "Bob", title: "Wine", amount: 20 },
    { name: "Charles", title: "Crisp", amount: 10 },
  ]);

  const [viewMode, setViewMode] = useState("raw");

  return (
    <div className="App">
      <div className="AppContainer">
        <Logo />
        <AddRecord records={records} setRecords={setRecords} />
        {viewMode === "raw" && <RecordsTotalView records={records} />}
        {viewMode === "userView" && <RecordsUserView records={records} />}
        {viewMode === "square" && <SquareView records={records} />}
        <Controls setViewMode={setViewMode} />
      </div>
    </div>
  );
};

export default App;
