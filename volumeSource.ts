// volumeSource.ts
// TODO(dev): replace with the real data source.
// Requirements:
//  - must cover ALL disclosed trades for the politician, not only the ones currently loaded
//    for the page (the current page list is ~40 recent trades; lifetime totals need the full history)
//  - preferably computed server-side and cached, so the client receives one small number
export interface VolumeSummary { low: number; mid: number; high: number; tradeCount: number; }

export async function getVolumeSummary(slug: string): Promise<VolumeSummary | null> {
  // TODO(dev): e.g. GET /api/politicians/${slug}/volume   (endpoint name is a placeholder)
  throw new Error('not implemented');
}