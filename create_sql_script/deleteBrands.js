const fs = require("fs");

const toDelete = 40;
const init = 5;

let content = "";
for (let i = 0; i < toDelete; i++) {
  content += `DELETE FROM public.brands WHERE id = ${init + i};\n`;
}

fs.writeFileSync("../results/delete_brands.sql", content);
