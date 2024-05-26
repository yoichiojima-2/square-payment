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

export const getUsersWithTasks = (records) => {
  const users = groupByUser(records);
  const tasks = getTasksByUser(records);

  return users.map((user) => {
    return {
      name: user.name,
      totalAmount: user.totalAmount,
      records: user.records,
      tasks: tasks.filter(
        (task) => task.to === user.name || task.from === user.name,
      ),
    };
  });
};

export const getTasksByUser = (records) => {
  const squareAmount = getSquareAmountByUser(records);

  let positiveAmounts = [];
  let negativeAmounts = [];

  squareAmount.forEach((user) => {
    if (user.squareAmount > 0) {
      positiveAmounts.push({ name: user.name, amount: user.squareAmount });
    } else if (user.squareAmount < 0) {
      negativeAmounts.push({ name: user.name, amount: -user.squareAmount });
    }
  });

  let tasks = [];

  while (positiveAmounts.length && negativeAmounts.length) {
    let positive = positiveAmounts[0];
    let negative = negativeAmounts[0];

    let settledAmount = Math.min(positive.amount, negative.amount);

    tasks.push({
      from: negative.name,
      to: positive.name,
      amount: settledAmount,
    });

    positive.amount -= settledAmount;
    negative.amount -= settledAmount;

    if (positive.amount === 0) {
      positiveAmounts.shift();
    }

    if (negative.amount === 0) {
      negativeAmounts.shift();
    }
  }

  return tasks;
};

export const getAmountPerUser = (records) => {
  const total = records.reduce((acc, record) => acc + record.amount, 0);
  const userCount = groupByUser(records).length;
  return Math.round(total / userCount);
};

export const getSquareAmountByUser = (records) => {
  const total = records.reduce((acc, record) => acc + record.amount, 0);
  const recordByUser = groupByUser(records);

  return recordByUser.map((user) => {
    const squareAmount = Math.round(
      user.totalAmount - total / recordByUser.length,
    );
    return {
      name: user.name,
      squareAmount,
    };
  });
};

export const removeRecordByIndex = (records, index) =>
  records.filter((_, _idx) => _idx !== index);
