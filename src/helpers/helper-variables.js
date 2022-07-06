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

export const setLimit = (limit) => {
  return limit ? limit : 25;
}

export const constructorColor = (constructorId) => {
  let color;
  switch (constructorId) {
    case 'mercedes':
      color = '#6CD3BF';
      break;
    case 'ferrari':
      color = '#ED1C24';
      break;
    case 'red_bull':
      color = '#1E5BC6';
      break;
    case 'alpine':
      color = '#2293D1';
      break;
    case 'haas':
      color = '#B6BABD';
      break;
    case 'aston_martin':
      color = '#2D826D';
      break;
    case 'alphatauri':
      color = '#4E7C9B';
      break;
    case 'mclaren':
      color = '#F58020';
      break;
    case 'alfa':
      color = '#B12039';
      break;
    case 'williams':
      color = '#37BEDD';
      break;
    default:
      color = 'lightgray';
  }

  return color;
}
