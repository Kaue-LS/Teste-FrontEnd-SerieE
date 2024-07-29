import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const DateFormatter = (data) => {
  const isoDate = data;
  const parsedDate = parseISO(isoDate);

  const formattedDate = format(parsedDate, "dd MMM. yyyy", { locale: ptBR });

  return formattedDate;
};
