loadFlags()

function loadFlags(){
    Requests.getCountriesFromJSON(processFlags)
}

function processFlags(result){
    let countries = document.querySelector('#countries')
    let countryArray = result
    countries.innerHTML = ''
    
    //For each country of the array, we create a div with their respective information
    countryArray.forEach(country => {
        // Dom.addCountry(country.name, country.flag, country.population, country.region, country.capital)

        let countryCard = document.createElement('div')
        countryCard.innerHTML = `       
           <img src="${country.flag}" alt="Nation Flag" />
           </div>
           <div class="card-body">
             <h3 class="country-name">${country.name}</h3>
             <p>
               <strong>Population:</strong>
               ${country.population}
             </p>
             <p class="country-region">
               <strong>Region:</strong>
               ${country.region}
             </p>
             <p>
               <strong>Capital:</strong>
               ${country.capital}
             </p>
       `
       //We add the class card into this div
       countryCard.classList.add('card')
       //and the we append it onto the main div container of countries
       countries.appendChild(countryCard)
       countryCard.addEventListener('click', Dom.countryDetails)
    })
}

