const fs = require("fs");

const toDelete = 200;
const init = 852;

let content = "";
for (let i = 0; i < toDelete; i++) {
  content += `DELETE FROM public.dealerships WHERE id = ${init + i};\n`;
}

fs.writeFileSync("../results/delete_dealerships.sql", content);
