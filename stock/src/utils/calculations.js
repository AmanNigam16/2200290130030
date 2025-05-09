export function calculateAverage(prices) {
  if (!prices.length) return 0;
  const total = prices.reduce((acc, p) => acc + p.price, 0);
  return total / prices.length;
}

export function calculateStandardDeviation(prices) {
  const avg = calculateAverage(prices);
  const variance = prices.reduce((acc, p) => acc + Math.pow(p.price - avg, 2), 0) / prices.length;
  return Math.sqrt(variance);
}