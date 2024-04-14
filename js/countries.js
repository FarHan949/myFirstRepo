const countries=()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then( res => res.json())
  .then( data => dataLoad(data))
}
countries()

const dataLoad=(countries)=>{
    // console.log(countries)

//    for (const country of countries) {
//     console.log(country)
//    }

const container = document.getElementById('countries-container')
countries.forEach(element => {
    // console.log(element)
    const createDiv = document.createElement('div')
     createDiv.classList.add("country")
    createDiv.innerHTML = `
     <h3>Name : ${element.name.common}</h3>
     <h3>Capital : ${element.capital ? element.capital[0] : 'No Capital'}</h3>
     <button onclick="loadCountryDetails('${element.cca2}')">Details </button>
    `
    container.append(createDiv)
});
}

const loadCountryDetails=(code)=>{
 const url = `https://restcountries.com/v3.1/alpha/${code}`
// console.log('get country code : ',code,url)
fetch(url)
.then( res => res.json())
.then( data => displayCountry(data[0]))
}

const displayCountry=(country)=>{

    const countryDetails = document.getElementById('contry-details')
    countryDetails.innerHTML = `
      <h2>Details : ${country.name.common} </h2>
      <img src="${country.flags.png}">
    `
//   console.log(country)
}
// loadCountryDetails()