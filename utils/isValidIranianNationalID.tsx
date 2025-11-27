

export function isValidIranianNationalID(nationalID: string): boolean {
  if (!/^\d{10}$/.test(nationalID)) return false;

  const check = parseInt(nationalID[9]);
  const sum = nationalID
    .split("")
    .slice(0, 9)
    .map((num, i) => parseInt(num) * (10 - i))
    .reduce((a, b) => a + b, 0);

  const remainder = sum % 11;

  return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
}

