import { useState } from "react";
import { getUsersWithTasks, getAmountPerUser } from "./aggregate";
import { unit } from "./config";

export const SquareView = ({ records }) => {
  const users = getUsersWithTasks(records);
  const amountPerUser = getAmountPerUser(records);

  return (
    <div id="SquareView">
      <h2>square result</h2>
      <h3>per person: {amountPerUser}</h3>
      {users.map((user, index) => (
        <div key={`${user}${index}`} className="Card">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h3>
              {unit} {user.totalAmount}
            </h3>
          </div>
          <div className="Line" />
          <div>
            {user.tasks.map((task, index) => (
              <div key={`${task}${index}`} className="HStack">
                <CheckBox key={index} />
                <p>
                  {task.from} to {task.to}: {unit} {task.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const CheckBox = () => {
  const [completed, setCompleted] = useState(false);

  const getClassName = () => {
    return completed ? "CheckBox done" : "CheckBox undone";
  };

  return (
    <div className={getClassName()} onClick={() => setCompleted(!completed)} />
  );
};
