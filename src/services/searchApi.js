export async function searchByIngredientsFood(ingrediente) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function searchByNameFood(name) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByFirstLetterFood(firstLetter) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByIngredientsDrink(ingrediente) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByNameDrink(name) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByFirstLetterDrink(firstLetter) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByCategoryFood(category) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByCategoryDrink(category) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByAreaFood(area) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function foodByIngredient(ingredient) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function drinkByIngredient(ingredient) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json()).then((resultObject) => resultObject);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default searchByNameFood;
