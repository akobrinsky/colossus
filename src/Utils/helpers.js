export const dateFormatter = (date) => (property) => {
  const airdate = new Date(date);
  if (property === 'unixTime') return airdate.getTime();
  if (property === 'full-date') return airdate.toDateString();
};

export const minutesDisplay = (min) => {
  const minutes = min % 60;
  const hours = Math.trunc(min / 60);
  if (min < 60) return `${minutes} minutes`;
  if (min === 60) return '1 hour';
  const hourText = hours > 1 ? 'hours' : 'hour';
  const minText = minutes > 1 ? 'minutes' : 'minute';
  return `${hours} ${hourText} ${minutes} ${minText}`;
};

export const htmlStripper = (str) => str.replace(/(<([^>]+)>)/gi, '');
