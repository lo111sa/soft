import { compareAsc, format } from "date-fns";

export const formatDate = (str) => {
  const formattedDate = format(new Date(str), "dd.MM.yyyy HH:mm");

  return formattedDate;
};
