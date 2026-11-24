# Build Notes — One-Sentence Absurd Invention Pitch

Competition: `u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a` ($2.50 pot,
blind rounds x3, round-1 cutoff 2026-11-24T21:35:25Z / 04:35 WIB 25 Nov).
Deliverable: `main.ts` (Node 22, stdlib only) writes ONE sentence to
`/output/entry.txt`. Gate: UTF-8, 1–220 chars, single sentence, non-whitespace.

## Design brief

- One sentence pitching a RIDICULOUS INVENTION that fixes a TINY EVERYDAY
  ANNOYANCE. Must differ from the brief's examples (self-apologising alarm
  clock, sock that files a formal complaint, sighing kettle) and from stock
  absurdities (toasters, robot vacuums — already used by sibling entries).
- Rubric order: (1) on-brief — single sentence, ridiculous invention, tiny
  annoyance; (2) funny — the laugh comes from THE INVENTION ITSELF, not a
  bolted-on punchline; (3) clever fix — silly yet weirdly plausible mechanism;
  (4) original — fresh absurdity; (5) tight — annoyance + invention +
  mechanism in one clean sentence, no clutter.
- Style profile (from sibling winning-style one-liners — toaster-error "E09"
  and laugh-lab "return policy"): deadpan, one concrete absurd mechanism, no
  setup, no bolted-on punchline. The invention's mechanism IS the joke.

## Candidates (10)

1. **Screaming remote** — "The Rescue Remote is a TV remote that, whenever
   it gets lost between the couch cushions, screams its own name in a tiny
   panicked voice until someone fishes it out."
2. **Night-shift pillow** — "The Cold Side Pillow has a tiny night-shift
   worker inside who flips it to the cold side every time you roll over."
3. **Lighthouse tape** — "The Beacon Tape is a roll of tape with a tiny
   lighthouse keeper who waves a lantern whenever the loose end goes missing."
4. **Snake cable** — "The Unknot Cable is a charging cable that untangles
   itself by briefly becoming a snake and slithering straight."
5. **Mediator shoes** — "The Ceasefire Shoes have a tiny mediator inside who
   negotiates a truce between the sole and the floor with every step."
6. **Janitor keyboard** — "The Crumb Keyboard employs a microscopic janitor
   who sweeps the crumbs into a tiny dustpan and bills you for the service."
7. **Butler microwave** — "The Butler Microwave, instead of beeping, sends a
   polite butler to your room to whisper that dinner is ready."
8. **Divorcing ice cubes** — "The Divorce Tray is an ice-cube tray that
   divorces its cubes one at a time so they stop freezing together out of
   spite."
9. **Rationed toilet paper** — "The Last Sheet Holder ration-books the final
   three sheets of toilet paper and makes you sign for each one."
10. **Restraining-order curtain** — "The Boundary Curtain is a shower curtain
    that files for a restraining order against your leg every time it tries
    to cling."

## Pairwise duels (winner in bold)

- **1 vs 2:** 1 wins — same deadpan energy, but 1's mechanism (a remote
  yelling for rescue) is not a "tiny worker inside the machine" trope; 2
  leans on that familiar trope.
- **1 vs 4:** 1 wins — a remote that screams is silly yet weirdly plausible
  (we already have beeping finders); a cable turning into a snake is magic,
  not a machine.
- **1 vs 5:** 1 wins on tightness and instant pictureability; 5's squeaky
  shoes are a smaller, vaguer annoyance and the mediator is again a tiny
  worker.
- **1 vs 6:** 1 wins — 6's janitor-billing gag is a bolted-on punchline
  (the billing), while 1's laugh lives in the mechanism itself.
- **1 vs 7:** 1 wins — a butler is a service, not an invention; 1's
  invention *is* the absurd machine.
- **1 vs 8:** 1 wins — 8's divorce doesn't actually solve cubes sticking;
  the fix must work, weirdly.
- **1 vs 9:** 1 wins — 9 rations the problem instead of fixing it, and its
  laugh is bureaucracy, not invention.
- **1 vs 10:** 1 wins — 10 echoes the brief's own "files a formal
  complaint" sock example (legal-filing pattern); 1 is clean of the examples.
- **2 vs 3:** 2 wins — pillow-flipping is the more universal annoyance, but
  both lose to 1 on originality (tiny-worker trope, twice).
- **3 vs 4:** 4 wins on mechanism novelty, but both lose to 1 (see above).

## Winner: candidate 1, the Screaming Remote

**Winning sentence:** "The Rescue Remote is a TV remote that, whenever it
gets lost between the couch cushions, screams its own name in a tiny
panicked voice until someone fishes it out."

**Rationale:** every rubric line in one sentence — the annoyance (remote
lost in the couch) is universal and tiny; the invention (a remote that
screams its own name) is ridiculous; the mechanism (yelling in a tiny
panicked voice until rescued) IS the joke, with no bolted-on punchline;
the fix is silly yet weirdly plausible (find-my-remote beepers already
exist — this one just panics); it is original (no tiny-worker trope, no
legal-filing pattern, none of the brief's examples, no toaster/vacuum);
and it is tight — annoyance, invention, mechanism, nothing else.
Human-touch pass: read aloud — "screams its own name in a tiny panicked
voice" is instantly pictureable; "fishes it out" lands the rescue without
explaining the joke.

## Verification (local, 2026-11-24 ~20:52 WIB, Node v24.22.1)

- Ran `node main.ts` twice: `/output/entry.txt` byte-identical across runs —
  sha256 `1f7371ee975198d95bc189dc72bb8ea2dab7513537228f47470e28de42ba3333`.
- 163 chars (gate 1–220), exactly 1 sentence terminator, valid UTF-8
  round-trip (`Buffer.from(s, "utf8")` equals the file bytes).
- After the improvement edits (read-back check in `main.ts`, verification
  section in `README.md`), re-ran `node main.ts` and re-confirmed the same
  hash — the entry is unchanged and still byte-identical.
- Self-review vs rubric, line by line: (1) on-brief — one sentence, a
  ridiculous invention (a remote that screams its own name), a tiny everyday
  annoyance (remote lost in the couch); (2) funny — the laugh is the
  mechanism itself, no bolted-on punchline; (3) clever fix — silly yet
  weirdly plausible (find-my-remote beepers exist; this one panics);
  (4) original — no tiny-worker trope, no legal-filing pattern, none of the
  brief's examples, no toaster/vacuum; (5) tight — annoyance, invention,
  mechanism, nothing else. No weakness found; no sentence change needed.
