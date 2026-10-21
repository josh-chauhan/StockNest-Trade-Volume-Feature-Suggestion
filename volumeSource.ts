/** 
 * Purpose: Only file that knows the data source. 
 * Currently a placeholder, real source is unkown
 * TODO(dev): replace with the real data source.
 */

// The info for needed one politician. Three variants for front end to choose from.
export interface VolumeSummary { 
    low: number; 
    mid: number;  // Midpoint of trade's, also is the default value shown
    high: number; 
    tradeCount: number;  // Count of trades
}

/*
 * Return volume totals for one politician
 * 
 * @param slug the politician's URL id, e.g. "nancy-pelosi"
 * 
 * TODO(dev): replace body with real data source.
 */
export async function getVolumeSummary(slug: string): Promise<VolumeSummary | null> {

  // e.g. GET /api/politicians/${slug}/volume   (endpoint name is a placeholder)

  throw new Error('not implemented');
}