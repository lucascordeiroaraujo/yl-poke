export const statName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/-/gi, ' ')
    .replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
};
