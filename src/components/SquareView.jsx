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
        <div key={index} className="Card">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h3>
              {unit} {user.totalAmount}
            </h3>
          </div>
          <h4>todos</h4>
          <div>
            {user.tasks.map((task, index) => (
              <div className="HStack">
                <label>
                  <input type="checkbox"/>
                </label>
                <p key={index}>
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
