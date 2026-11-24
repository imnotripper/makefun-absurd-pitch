// SPDX-License-Identifier: MIT
// One-Sentence Absurd Invention Pitch — deterministic emitter.
// Writes the winning pitch to /output/entry.txt, byte-identical every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE =
  "The Rescue Remote is a TV remote that, whenever it gets lost between the couch cushions, screams its own name in a tiny panicked voice until someone fishes it out.";

// Fail-loud gate: the entry must be one sentence, 1-220 chars, non-whitespace.
const trimmed = SENTENCE.trim();
if (trimmed.length < 1 || trimmed.length > 220) {
  throw new Error(`entry length ${trimmed.length} outside 1-220 chars`);
}
if (trimmed !== SENTENCE) {
  throw new Error("entry has leading/trailing whitespace");
}
const terminators = (trimmed.match(/[.!?]/g) ?? []).length;
if (terminators !== 1 || !/[.!?]$/.test(trimmed)) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
// Read-back check: what landed on disk must be byte-identical UTF-8.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== SENTENCE || !Buffer.from(written, "utf8").equals(Buffer.from(SENTENCE, "utf8"))) {
  throw new Error("read-back mismatch: /output/entry.txt is not the emitted sentence");
}
console.log(`wrote /output/entry.txt (${trimmed.length} chars)`);
