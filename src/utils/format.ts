// E.g. 2567.3 => +$2,567
// E.g. -2567.3 => -$2,567
export const formatAmount = (amount: number, includeSign = false) => {
  const isNegative = amount < 0;
  const formattedAmount = Math.abs(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const sign = isNegative ? "-" : "+";

  return `${includeSign ? sign : ""}${formattedAmount}`;
};

export const formateDate = (date: Date) => {
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  return `${day} ${month} ${year}`;
};
