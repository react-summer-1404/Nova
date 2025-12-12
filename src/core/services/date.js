import moment from "moment-jalaali";


export const formatJalali = (date, format = "jYYYY/jM/jD") => {
  return moment(date).format(format);
};
