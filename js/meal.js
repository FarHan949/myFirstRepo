const LoadMeals = (search) => {
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals =(meals)=> {
    for (const meal of meals) {
        console.log(meal)
    }
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerHTML = ''
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div')
        mealDiv.classList.add("col")
        mealDiv.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,250)}.</p>
        </div>
    </div>
    `
    mealContainer.appendChild(mealDiv)
    });

}

const searchFood=()=>{
    const searchfield = document.getElementById('search-field')
    const searchText =  searchfield.value 
    LoadMeals(searchText)
    searchfield.value = ''
    console.log('hola')
}
LoadMeals('')