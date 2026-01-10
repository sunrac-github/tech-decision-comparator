function whyCouldBeBetter(option, constraints) {
  if (option === "ECS" && constraints.latency === "high") {
    return "ECS offers more predictable latency than Lambda, which can be important for user-facing services.";
  }

  if (option === "EC2" && constraints.ops !== "low") {
    return "EC2 provides full control and avoids platform limits, which can be valuable for specialized workloads.";
  }

  return null;
}

module.exports = { whyCouldBeBetter };
