function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let minimumWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    minimumWaitingTime += duration * queriesLeft;
  }

  return minimumWaitingTime;
}
