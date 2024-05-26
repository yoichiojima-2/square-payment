import { getUsersWithTasks, getAmountPerUser } from "./aggregate";

export const SquareView = ({ records }) => {
  const users = getUsersWithTasks(records);
  const amountPerUser = getAmountPerUser(records);

  return (
    <div id="SquareView">
      <h2>square result</h2>
      <h3>per person: {amountPerUser}</h3>
      {users.map((user, index) => (
        <div key={index} className="UserSquare">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h3>{user.totalAmount}</h3>
          </div>
          <h4>task</h4>
          <div>
            {user.tasks.map((task, index) => (
              <p key={index}>
                {task.from} to {task.to}: {task.amount}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
