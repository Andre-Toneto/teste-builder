

export function formatedDate(value: String) {
  if (!value) return '';
    const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

export function formatedDateIsoToBr(date: string | Date) {
  const dataObj = typeof date === "string" ? new Date(date) : date;

  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0"); // Janeiro é 0, por isso o +1
  const ano = dataObj.getFullYear();

  return `${dia}/${mes}/${ano}`;
}


export function formatedDateTimeIsoToBr(date: string | Date) {
  const dataObj = typeof date === "string" ? new Date(date) : date;

  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0"); // Janeiro é 0, por isso o +1
  const ano = dataObj.getFullYear();

  const horas = String(dataObj.getHours()).padStart(2, "0");
  const minutos = String(dataObj.getMinutes()).padStart(2, "0");
  const segundos = String(dataObj.getSeconds()).padStart(2, "0");

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

export function  formatarDataHoraParaISO(selectedDate: Date, selectedTime: string): string {
  const [hours, minutes] = selectedTime.split(':').map(Number)

  const novaData = new Date(selectedDate)
  novaData.setHours(hours, minutes, 0, 0)

  // Formatando manualmente no formato desejado: yyyy-MM-dd HH:mm:ss.SSS
  const pad = (n: number) => n.toString().padStart(2, '0')
  const padMs = (n: number) => n.toString().padStart(3, '0')

  const ano = novaData.getFullYear()
  const mes = pad(novaData.getMonth() + 1)
  const dia = pad(novaData.getDate())
  const hora = pad(novaData.getHours())
  const minuto = pad(novaData.getMinutes())
  const segundo = pad(novaData.getSeconds())
  const milissegundos = padMs(novaData.getMilliseconds())

  return `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}.${milissegundos}`
}

export function formatIsoToHHMM(dateTime: string): string {
  // Divide a string e pega só a parte da hora
  const [date, time] = dateTime.split("T");
  const [hours, minutes] = time.split(":");

  return `${hours}:${minutes}`; // Retorna só hh:mm
}

export function calculateEndTime(
  startTimeFormatted: string, 
  selectedDuration: string
): string {
  const [startDate, startHour] = startTimeFormatted.split(" ");
  const [startHours, startMinutes] = startHour.split(":").map(Number);
  const [durationHours, durationMinutes] = selectedDuration.split(":").map(Number);

  // Criando a data manualmente para evitar fuso horário
  const newDate = new Date(`${startDate}T${startHours.toString().padStart(2, '0')}:${startMinutes.toString().padStart(2, '0')}:00`);

  // Somando a duração ao horário inicial
  newDate.setHours(newDate.getHours() + durationHours);
  newDate.setMinutes(newDate.getMinutes() + durationMinutes);

  // Formatando para o padrão correto
  const formattedDate = `${startDate} ${newDate.getHours().toString().padStart(2, '0')}:${newDate.getMinutes().toString().padStart(2, '0')}:00.000`;

  return formattedDate;
}