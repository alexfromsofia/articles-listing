export const arrangeById = data =>
  data.reduce((acc, item) => {
    acc[item.id] = {
      ...item
    }

    return acc;
  }, {})