export const shuffleArray = (element: any) => {
  for (
    var j, x, i = element.length;
    i;
    j = Math.floor(Math.random() * i),
      x = element[--i],
      element[i] = element[j],
      element[j] = x
  );

  return element;
};
