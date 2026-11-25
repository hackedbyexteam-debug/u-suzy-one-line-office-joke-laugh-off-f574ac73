// One-Line Office Joke Laugh-Off.
// One original one-line joke about office life. The joke is the swap itself:
// asking IT to block a calendar ends with the promotion blocked instead —
// a sharp, surprising punchline in the last words, concrete nouns (IT,
// calendar, promotion), no meeting/email cliche, tight at 70 characters.
import fs from "node:fs";

const ENTRY =
  "I asked IT to block my calendar and they blocked my promotion instead.";

const GATE_MAX_CHARS = 200;

const trimmed = ENTRY.trim();
if (trimmed.length === 0 || ENTRY.length > GATE_MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!trimmed.endsWith("instead.")) {
  throw new Error("entry must land its punchline in the last words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, ENTRY);

console.log(`entry written to ${outDir}/entry.txt (${ENTRY.length} chars)`);
