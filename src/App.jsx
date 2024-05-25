import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { SquareView } from "./components/SquareView";
import { Records } from "./components/Records";
import { Controls } from "./components/Controls";
import "./App.css";
import "./index.css";

const App = () => {
  const [records, setRecords] = useState([
    { name: "Alice", title: "Coffee", amount: 5 },
    { name: "Bob", title: "Wine", amount: 20 },
    { name: "Charles", title: "Crisp", amount: 10 },
  ]);

  const [sortByUser, setSortByUser] = useState(false);
  const [squareView, setSquareView] = useState(false);

  console.log("records", records);
  console.log("sortByUser", sortByUser);
  console.log("squareView", squareView);

  return (
    <div className="App">
      <div className="AppContainer">
        <Logo />
        {squareView ? (
          <SquareView records={records} />
        ) : (
          <Records
            records={records}
            setRecords={setRecords}
            sortByUser={sortByUser}
          />
        )}
        <Controls
          squareView={squareView}
          setSquareView={setSquareView}
          sortByUser={sortByUser}
          setSortByUser={setSortByUser}
        />
      </div>
    </div>
  );
};

export default App;
