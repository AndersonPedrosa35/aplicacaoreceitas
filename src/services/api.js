export async function requestByDetailsMeal(id) {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resolve) => resolve.json()).then((response) => response);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function requestByDetailsDrink(id) {
  try {
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resolve) => resolve.json()).then((response) => response);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function requestMeal() {
  try {
    const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const { meals } = await fetchMeal.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function requestDrink() {
  try {
    const fetchDrink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const { drinks } = await fetchDrink.json();
    return drinks;
  } catch (error) {
    console.log(error);
  }
}

export async function requestRandomMeal() {
  try {
    const fetchMeal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const { meals } = await fetchMeal.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function requestRandomDrink() {
  try {
    const fetchDrink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const { drinks } = await fetchDrink.json();
    return drinks;
  } catch (error) {
    console.log(error);
  }
}

export async function exploreIngredientsFood() {
  try {
    const fetchIngredientsFood = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const { meals } = await fetchIngredientsFood.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function exploreIngredientsDrink() {
  try {
    const fetchIngredientsDrink = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const { drinks } = await fetchIngredientsDrink.json();
    return drinks;
  } catch (error) {
    console.log(error);
  }
}
export async function requestAreas() {
  try {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json()).then((response) => response.meals);
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export async function requestMealByAreas(area) {
  try {
    const mealsByAreas = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((response) => response.json()).then((response) => response.meals);
    return mealsByAreas;
  } catch (error) {
    console.log(error);
  }
}
