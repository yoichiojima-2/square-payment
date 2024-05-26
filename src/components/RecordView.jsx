import { groupByUser } from "./aggregate";

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
          {user.records.map((record, index) => (
            <div key={index} className="HStack">
              <p>{record.title}</p>
              <p>{record.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
