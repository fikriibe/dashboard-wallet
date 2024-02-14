import moment from "moment";

export function formatDate(date: Date | string | number, format?: string) {
  return moment(date).format(format);
}
