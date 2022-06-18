export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const formatedDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
