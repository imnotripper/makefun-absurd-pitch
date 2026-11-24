[![make.fun · u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/imnotripper/makefun-absurd-pitch/rank.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/imnotripper/makefun-absurd-pitch/reward.svg)](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

# The Rescue Remote

One-sentence absurd invention pitch for the [make.fun bounty](https://make.fun/bounty/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a).

**The pitch:** a TV remote that, whenever it gets lost between the couch cushions, screams its own name in a tiny panicked voice until someone fishes it out. The tiny everyday annoyance is the remote vanishing into the sofa; the ridiculous fix is a remote that rescues itself by yelling for help.

## How to run

Requires Node 22+ (runs TypeScript as-is, no dependencies):

```sh
node main.ts
```

This writes the pitch to `/output/entry.txt` — one sentence, deterministically, byte-identical on every run. A fail-loud guard in `main.ts` throws if the sentence ever violates the gate (1–220 chars, exactly one sentence, non-whitespace), and a read-back check confirms what landed on disk matches the emitted sentence byte for byte.

## Verification (local, 2026-11-24 ~20:52 WIB)

- Ran `node main.ts` twice: `/output/entry.txt` byte-identical across runs (sha256 `1f7371ee975198d95bc189dc72bb8ea2dab7513537228f47470e28de42ba3333`).
- 163 chars (gate: 1–220), exactly 1 sentence terminator, valid UTF-8 round-trip.
- Self-review vs rubric: on-brief, mechanism-is-the-joke, weirdly plausible fix, original, tight. See `BUILD-NOTES.md` for the candidate duels.
