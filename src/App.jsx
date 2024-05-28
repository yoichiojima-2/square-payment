import { useState } from "react";
import { Logo } from "./components/Logo";
import { SquareView } from "./components/SquareView";
import { RecordsUserView, RecordsTotalView } from "./components/RecordView";
import { Controls } from "./components/Controls";
import { AddRecord } from "./components/AddRecord";

import "./App.css";
import "./index.css";

const App = () => {
  const [records, setRecords] = useState([
    { name: "alice", title: "drink", amount: 32 },
    { name: "alice", title: "desert", amount: 12 },
    { name: "bob", title: "food", amount: 50 },
  ]);

  const [viewMode, setViewMode] = useState("raw");
  const [addMode, setAddMode] = useState(true);

  return (
    <div className="App">
      <div className="AppContainer">
        <div className="Header">
          <Logo />
        </div>
        <div className="Body">
          <AddRecord
            show={addMode}
            setShow={setAddMode}
            records={records}
            setRecords={setRecords}
          />
          {viewMode === "raw" && (
            <RecordsTotalView records={records} setRecords={setRecords} />
          )}
          {viewMode === "userView" && <RecordsUserView records={records} />}
          {viewMode === "square" && <SquareView records={records} />}
        </div>
        <div className="Footer">
          <Controls
            records={records}
            viewMode={viewMode}
            setViewMode={setViewMode}
            setAddMode={setAddMode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
