const fs = require("fs");
const { compileFromFile } = require("json-schema-to-typescript");

const types_dir = "src/types";

async function ls(path) {
  const dir = await fs.promises.opendir(path);
  for await (const file of dir) {
    compileFromFile(`src/schemas/${file.name}`).then((ts) =>
      fs.writeFileSync(`src/types/${file.name.replace(".json", ".ts")}`, ts)
    );
  }
}
if (!fs.existsSync(types_dir)) {
  fs.mkdirSync(types_dir);
}
ls("src/schemas").catch(console.error);
