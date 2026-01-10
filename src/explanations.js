function explain(option) {
  const explanations = {
    Lambda: "Low operational effort and automatic scaling, but may introduce cold start latency.",
    ECS: "Balanced option with predictable performance and moderate operational overhead.",
    EC2: "Maximum control and performance, but requires high operational effort.",
  };

  return explanations[option];
}

module.exports = { explain };
