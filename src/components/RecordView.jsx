import { groupByUser } from "./aggregate";
import { unit } from "./config";

export const RecordsTotalView = ({ records }) => {
  return (
    <div>
      <h2>record</h2>
      {records.map((record, index) => (
        <div key={index} className="HStack">
          <p>{record.name}</p>
          <p>{record.title}</p>
          <p>
            {unit} {record.amount}
          </p>
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
        <div key={user.name} className="Card">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h4>
              total - {unit} {user.totalAmount}
            </h4>
          </div>
          <div className="Line" />
          {user.records.map((record, index) => (
            <div key={index} className="HStack">
              <p>{record.title}</p>
              <p>
                {unit} {record.amount}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
