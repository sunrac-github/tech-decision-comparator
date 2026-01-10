function decisionFlip(option) {
  if (option === "Lambda") {
    return "If latency sensitivity increases to High, ECS may become a better choice.";
  }

  if (option === "ECS") {
    return "If operational tolerance decreases, Lambda may become preferable.";
  }

  return null;
}

module.exports = { decisionFlip };
