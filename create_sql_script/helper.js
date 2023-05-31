const fs = require("fs");

const dealerships = Array.from({ length: 200 }, (_, i) => i + 1052);

fs.writeFileSync("../results/test.json", JSON.stringify(dealerships));
