export const getMaxDateForDob = () => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  return eighteenYearsAgo.toISOString().split("T")[0];
};
