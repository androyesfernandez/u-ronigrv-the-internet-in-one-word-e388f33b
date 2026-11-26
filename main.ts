import { mkdirSync, writeFileSync } from "node:fs";

// Vegas: one short beat that holds gambling, spectacle, and commerce
// together — the neon promise the whole internet keeps selling, a bet
// and a show and a storefront folded into a single word.
const WORD = "Vegas";

if (!(WORD.length >= 1 && WORD.length <= 30)) {
  throw new Error("WORD must be between 1 and 30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD + "\n", "utf8");
