import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `You wrote the plan; I read it twice,
then laid my key beside yours.
No order passed between us.
Whoever turns first, turns for both.
That was the agreement —
not to move as one,
but either of us may begin.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (!poem.trim()) throw new Error("poem must not be empty");
writeFileSync(join(outDir, "entry.txt"), poem.replace(/\n+$/, ""), "utf8");
