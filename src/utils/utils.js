export const getDate = () => {
  const date = new Date();
  const [day, year] = [date.getDate(), date.getFullYear()];
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  return `${month} ${day}, ${year}`;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toISOString().substr(0, 10);
};
