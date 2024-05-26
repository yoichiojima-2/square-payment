import { useState } from "react";
import { Logo } from "./components/Logo";
import { SquareView } from "./components/SquareView";
import { RecordsUserView, RecordsTotalView } from "./components/RecordView";
import { Controls } from "./components/Controls";

import "./App.css";
import "./index.css";
import { AddRecord } from "./components/AddRecord";

const App = () => {
  const [records, setRecords] = useState([]);

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
          {viewMode === "raw" && <RecordsTotalView records={records} />}
          {viewMode === "userView" && <RecordsUserView records={records} />}
          {viewMode === "square" && <SquareView records={records} />}
        </div>
        <div className="Footer">
          <Controls setViewMode={setViewMode} setAddMode={setAddMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
