export const drinkFilter = (l1 = [], l2 = []) => {
  if (l2[0] === undefined) return l1;
  //eslint-disable-next-line
  const filtered = l1.filter((val) => {
    for (let i = 0; i < l2.length; i++) {
      if (l2[i].idDrink === val.idDrink) {
        return val;
      }
    }
  });
  return filtered;
};

export const createIngredientList = (obj) => {
  let returning = [];
  let ingredNum = 1;
  let ingredKey = "strIngredient" + ingredNum.toString();
  let amountKey = "strMeasure" + ingredNum.toString();

  while (obj[ingredKey] && obj[ingredKey].trim()) {
    const ingred = obj[ingredKey];
    const amount = obj[amountKey];
    if (amount) {
      returning.push(`Step ${ingredNum}: ${amount} ${ingred}`);
    } else {
      returning.push(`Step ${ingredNum}: ${ingred}`);
    }

    ingredNum += 1;
    ingredKey = "strIngredient" + ingredNum.toString();
    amountKey = "strMeasure" + ingredNum.toString();
  }
  return returning;
};
