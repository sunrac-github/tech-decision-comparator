function evaluateOptions(constraints) {
  const scores = {
    Lambda: 0,
    ECS: 0,
    EC2: 0,
  };

  if (constraints.traffic === "spiky") {
    scores.Lambda += 5;
    scores.ECS += 4;
    scores.EC2 += 2;
  }

  if (constraints.ops === "low") {
    scores.Lambda += 5;
    scores.ECS += 3;
    scores.EC2 += 1;
  }

  if (constraints.latency === "high") {
    scores.Lambda += 2;
    scores.ECS += 4;
    scores.EC2 += 5;
  }

  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([name, score]) => ({ name, score }));
}

module.exports = { evaluateOptions };
