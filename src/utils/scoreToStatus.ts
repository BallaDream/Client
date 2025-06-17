export const scoreToStatus = (score: number) => {
  if (score >= 100) return '예방';
  if (score >= 66) return '권고';
  return '필수';
};
