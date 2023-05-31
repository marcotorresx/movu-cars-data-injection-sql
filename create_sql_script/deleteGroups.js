const fs = require("fs");

const toDelete = 10;
const init = 21;

let content = "";
for (let i = 0; i < toDelete; i++) {
  content += `DELETE FROM public.automotive_distributors WHERE id = ${
    init + i
  };\n`;
}

fs.writeFileSync("../results/delete_groups.sql", content);
