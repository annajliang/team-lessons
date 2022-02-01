// Create the declarative versions of these imperative codes:

// 1.
const iceCream = [
  { brand: "Blue Bunny", flavour: "chocolate" },
  { brand: "Ben & Jerry's", flavour: "vanilla" },
  { brand: "Dreyer's", flavour: "vanilla" },
  { brand: "Magnum", flavour: "chocolate" },
  { brand: "Dreyer's", flavour: "strawberry" },
  { brand: "Ben & Jerry's", flavour: "vanilla" },
  { brand: "Ben & Jerry's", flavour: "chocolate" },
  { brand: "Blue Bunny", flavour: "strawberry" },
];

const getStrawberryIceCream = () => {
  const results = [];
  for (let i = 0; i < iceCream.length; i++) {
    const selectedIceCream = iceCream[i];
    if (selectedIceCream.flavour === "strawberry") {
      results.push(selectedIceCream);
    }
  }
  return results;
};

const strawberryOnly = getStrawberryIceCream();

console.log(strawberryOnly);

// 2.
const verbs = ["run", "walk", "sleep", "yawn"];

const makeVerbsProgressive = () => {
  const output = [];
  for (let i = 0; i < verbs.length; i++) {
    output.push(verbs[i] + "ing");
  }
  return output;
};

const progressiveVerbs = makeVerbsProgressive(verbs);

console.log(progressiveVerbs);
