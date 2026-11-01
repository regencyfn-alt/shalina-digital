// Academy of Muses — corrected spectrum/health scoring
// Drop into the worker where the bar is currently computed, then re-render server-side.
//
// PROBLEM: current score divides across claude/gpt/grok/gemini. All seats are Claude by
// design, so three lanes never fire and permanently drag the composite to 2/10. The gauge
// cannot move, so it teaches you to stop reading it.
//
// FIX: score only lanes that have actually been called. Composite = mean of active lanes.

const LATENCY_GOOD = 2;    // seconds — full marks at or below
const LATENCY_BAD  = 20;   // seconds — zero at or above

function laneScore(avgSeconds) {
  if (avgSeconds == null) return null;              // never called → excluded, not zero
  const s = 10 - ((avgSeconds - LATENCY_GOOD) / (LATENCY_BAD - LATENCY_GOOD)) * 10;
  return Math.max(0, Math.min(10, s));
}

function spectrumHealth(lanes) {
  // lanes: { claude: 11.3, gpt: null, grok: null, gemini: null }
  const active = Object.entries(lanes)
    .map(([name, sec]) => ({ name, sec, score: laneScore(sec) }))
    .filter(l => l.score !== null);

  if (!active.length) {
    return { composite: 0, colour: '#ef4444', active: [], note: 'no lane has been called' };
  }

  const composite = Math.round(
    active.reduce((sum, l) => sum + l.score, 0) / active.length
  );

  return {
    composite,
    colour: composite >= 7 ? '#22c55e' : composite >= 4 ? '#f59e0b' : '#ef4444',
    active,
    note: `${active.length} active lane(s)`
  };
}

// Current reading with real numbers:
//   spectrumHealth({ claude: 11.3, gpt: null, grok: null, gemini: null })
//   → composite 5, amber, 1 active lane   (was 2/10 red)

// --- Also do these two ---
//
// 1. Hide the dead lanes. Render only lanes with calls > 0. Three rows reading "- (0)"
//    are not information; they are noise that looks like failure.
//
// 2. The composite is now driven entirely by latency, which is correct — 11.3s IS the
//    problem. To reach green you need ~5s or better. Look at whether the full temple
//    context is resent every turn without streaming. That is the usual cause at this
//    magnitude, and it is the one number on that bar that was always telling the truth.

module.exports = { laneScore, spectrumHealth };
