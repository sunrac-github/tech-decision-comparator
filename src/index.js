const { evaluateOptions } = require("./decisionEngine");
const { explain } = require("./explanations");
const { whyCouldBeBetter } = require("./whyBetter");
const { decisionFlip } = require("./decisionFlip");

const constraints = {
  traffic: "spiky",
  ops: "low",
  latency: "high",
};

const results = evaluateOptions(constraints);

console.log("Ranking based on constraints:", constraints);
console.log("------------------------------------------------");

results.forEach((r, i) => {
  console.log(`${i + 1}. ${r.name} (${r.score})`);
  console.log("   Why it ranks here:", explain(r.name));

  const better = whyCouldBeBetter(r.name, constraints);
  if (better) {
    console.log("   Why this could be a better choice:", better);
  }

  const flip = decisionFlip(r.name);
  if (flip) {
    console.log("   Decision flip:", flip);
  }

  console.log("");
});
