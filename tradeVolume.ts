/*
 * Purpose: Does the pure math. Turns a list of trades
 * into a single figure, then turns figure into display text.
 */

export type VolumeMode = 'low' | 'mid' | 'high';

export interface Trade {
  txDate: string;
  amountMin: number | null;
  amountMax: number | null;
  isBuy: boolean;
  // TODO(dev): add a stable trade/filing id if available, so amended filings can be deduped
}

export function tradeVolume(trades: Trade[], mode: VolumeMode = 'mid'): number {
  return trades.reduce((sum, t) => {
    // Missing amount -> treat as 0 so one bad record can't produce NaN.
    const lo = t.amountMin ?? 0;
    // Missing max -> fall back to min (covers filers who report one exact value).
    const hi = t.amountMax ?? lo;
    return sum + (mode === 'low' ? lo : mode === 'high' ? hi : (lo + hi) / 2);  // mid by default
  }, 0);
}

export function formatUsdCompact(n: number): string {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${Math.round(n)}`;
}