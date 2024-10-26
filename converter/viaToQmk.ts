import { parseArgs } from "util";
import { convert } from "./convert";

interface KeyboardFile {
  name: string;
  vendorProductId: number;
  keyboard: string;
  keymap: string;
  layout: string;
  macros: Array<string>;
  layers: Array<Array<string>>;
}

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    input: {
      type: "string",
    },
    output: {
      type: "string",
    },
  },
  strict: true,
  allowPositionals: true,
});

const { input, output } = values;

if (!input) {
  throw Error("no input!");
}
if (!output) {
  throw Error("no output!");
}

const file = Bun.file(input);

const fileContents: KeyboardFile = await file.json();
const { layers } = fileContents;

const convertedLayers = convert(layers);

await Bun.write(
  output,
  JSON.stringify({ ...fileContents, layers: convertedLayers })
);
console.log("Done! ✅");
