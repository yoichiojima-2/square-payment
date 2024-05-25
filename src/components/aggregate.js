export const groupByUser = (records) => {
  const userTotals = records.reduce((acc, record) => {
    if (!acc[record.name]) {
      acc[record.name] = { totalAmount: 0, records: [] };
    }
    acc[record.name].totalAmount += record.amount;
    acc[record.name].records.push(record);
    return acc;
  }, {});

  return Object.keys(userTotals).map((name) => ({
    name,
    totalAmount: userTotals[name].totalAmount,
    records: userTotals[name].records,
  }));
};

export const getSquareTaskByUser = (records) => {
  const squareAmount = getSquareAmountByUser(records);
  console.log(squareAmount);
}

export const getSquareAmountByUser = (records) => {
  const total = getTotalAmount(records);
  const recordByUser = groupByUser(records);

  return recordByUser.map((user) => {
    const squareAmount = Math.round(user.totalAmount - (total / recordByUser.length));
    return {
      name: user.name,
      squareAmount,
    };
  });
};

export const getTotalAmount = (record) => {
  return record.reduce((acc, record) => acc + record.amount, 0);
}