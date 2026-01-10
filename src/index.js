const { evaluateOptions } = require("./decisionEngine");
const { explain } = require("./explanations");

const constraints = {
  traffic: "spiky",
  ops: "low",
  latency: "high",
};

const results = evaluateOptions(constraints);

console.log("Ranking based on constraints:", constraints);
results.forEach((r, i) => {
  console.log(`${i + 1}. ${r.name} (${r.score})`);
  console.log("   ", explain(r.name));
});
