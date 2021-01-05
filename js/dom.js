const Dom = {
    showInfo(country){
        let displayImage = document.querySelector('img')
        displayImage.src = country.flag
        let modalB = document.querySelector('.modal-body')
        modalB.innerHTML = `


        <div class="left-on-desktop">
                <h2 class="modal-country">
                ${country.name}
                </h2>
                <p>
                  <strong>Native Name:</strong>
                  ${country.nativeName}
                </p>
                <p>
                  <strong>Population:</strong>
                  ${country.population}
                </p>
                 <p>
                  <strong>Region:</strong>
                  ${country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong>
                  ${country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong>
                  ${country.capital}
                </p>
                </div>
      
                <div class="right-on-desktop">
                <p>
                  <strong>Level Domain:</strong>
                  ${country.topLevelDomain[0]}
                </p>
                <p>
                  <strong>Currencies:</strong>
                  ${country.currencies.map(currency => currency.code)}
                </p>
                <p>
                  <strong>Languages:</strong>
                  ${country.languages.map(language => language.name)}
                </p>
               </div>
               <p class="border-countries">
               <strong> Border Countries: </strong>
                ${country.borders}
        </p>
        `



        let closeBtn = document.querySelector('#close')
        closeBtn.addEventListener('click', function(){
            document.getElementById('modal').style.display = 'none'
        })
    },

    addCountry(country){
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
       countryCard.addEventListener('click', () => {
           document.querySelector('#modal').style.display = 'flex'
           this.showInfo(country)
       })
    },
}

//Drop down shows
let dropBtn = document.querySelector('#filter')

dropBtn.addEventListener('click', function(){
    dropBtn.classList.toggle('open')
})
