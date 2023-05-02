export interface isDateMenosDayProps {
  date: Date;
  menosDias: number;
}
export const isDateMenosDay = ({ date, menosDias }: isDateMenosDayProps) => {
  const hoyMeno357 = new Date();
  hoyMeno357.setDate(hoyMeno357.getDate() - menosDias);
  return date.getTime() > hoyMeno357.getTime();
};
