// document.addEventListener("DOMContentLoaded", function () {
//   const searchBtn = document.getElementById("search-btn");
//   const searchInput = document.getElementById("food-search");
//   const recipeDetails = document.getElementById("recipe-details");
//   const recipeImage = document.getElementById("recipe-image");
//   const recipeName = document.getElementById("recipe-name");
//   const recipeCategory = document.getElementById("recipe-category");
//   const recipeArea = document.getElementById("recipe-area");
//   const recipeInstructions = document.getElementById("recipe-instructions");
//   const recipeIngredients = document.getElementById("recipe-ingredients");

//   searchBtn.addEventListener("click", function () {
//     const query = searchInput.value.trim();

//     if (query === "") {
//       alert("Please enter a food name.");
//       return;
//     }

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.meals) {
//           displayRecipe(data.meals[0]);
//         } else {
//           alert("No recipe found. Please try another search.");
//           recipeDetails.style.display = "none";
//         }
//       })
//       .catch((error) => console.error("Error fetching recipe:", error));
//   });

//   function displayRecipe(meal) {
//     // Extract and format ingredients
//     let ingredientsList = "";
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
//       if (ingredient && ingredient.trim() !== "") {
//         ingredientsList += `<li>${measure} ${ingredient}</li>`;
//       }
//     }

//     // Update UI with recipe details
//     recipeImage.src = meal.strMealThumb;
//     recipeName.textContent = meal.strMeal;
//     recipeCategory.textContent = meal.strCategory;
//     recipeArea.textContent = meal.strArea;
//     recipeInstructions.textContent = meal.strInstructions;
//     recipeIngredients.innerHTML = `<ul>${ingredientsList}</ul>`;

//     // Show the recipe details card
//     recipeDetails.style.display = "block";
//   }
// });



document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("food-search");
  const recipeDetails = document.getElementById("recipe-details");
  const recipeImage = document.getElementById("recipe-image");
  const recipeName = document.getElementById("recipe-name");
  const recipeCategory = document.getElementById("recipe-category");
  const recipeArea = document.getElementById("recipe-area");
  const recipeInstructions = document.getElementById("recipe-instructions");
  const recipeIngredients = document.getElementById("recipe-ingredients");

  searchBtn.addEventListener("click", async function () {
    const query = searchInput.value.trim();

    if (query === "") {
      alert("Please enter a food name.");
      return;
    }

    try {
      const meal = await fetchRecipe(query);
      if (meal) {
        displayRecipe(meal);
      } else {
        alert("No recipe found. Please try another search.");
        recipeDetails.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      alert(
        "An error occurred while fetching the recipe. Please try again later."
      );
    }
  });

  // Fetch the recipe data from the API
  async function fetchRecipe(query) {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  }

  // Display recipe details in the UI
  function displayRecipe(meal) {
    const ingredientsList = getIngredients(meal);

    // Update UI with recipe details
    recipeImage.src = meal.strMealThumb;
    recipeName.textContent = meal.strMeal;
    recipeCategory.textContent = meal.strCategory;
    recipeArea.textContent = meal.strArea;
    recipeInstructions.textContent = meal.strInstructions;
    recipeIngredients.innerHTML = `<ul>${ingredientsList}</ul>`;

    // Show the recipe details card
    recipeDetails.style.display = "block";
  }

  // Extract ingredients and measurements from the API response
  function getIngredients(meal) {
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients += `<li>${measure} ${ingredient}</li>`;
      }
    }
    return ingredients;
  }
});
