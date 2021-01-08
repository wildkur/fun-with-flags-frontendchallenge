const Dom = {
  //Function to show on the modal div the information about the clicked country
  showInfo(country) {
    //We first give the imag tag the correct source of the country
    let displayImage = document.querySelector('img')
    displayImage.src = country.flag

    //We select the mode body div, and we print on it all the information we want on it, divided in two divs making it look like two columns
    let modalB = document.querySelector('.modal-body')

    //We create an array with all the borders codes of the cuntry
    let borderArray = country.borders.splice(',')
    //And we create a span for each one with an inclick event and with the class country-border, that will get print at the end of the modealB.innerHTML 
    let textNodes = borderArray.map(element => {
      element = `<span onclick="Dom.clickedBorderCountry(event)" id="${element}" class="country-border">${element}</span>`
      return element
    })

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
                 ${textNodes}
        </p>
        `
    //With this event listener, we use the X button on the modal, to close it when pressed just changing the display of the modal div to none
    let closeBtn = document.querySelector('#close')
    closeBtn.addEventListener('click', function () {
      document.getElementById('modal').style.display = 'none'
    })
  },
  //The onlcick function requests a call to another api, that gets the event clicked id and as a callback the showInfo function so will print the information of the match country. 
  clickedBorderCountry(event) {
    Requests.getCountriesByAlphaCode(event.currentTarget.id, this.showInfo)
  },

  //With this function, we created the small div with the basic informatin of all countries in the API
  addCountry(country) {
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
    //Then we add the class card into this div
    countryCard.classList.add('card')
    //and the we append it onto the main div container of countries
    countries.appendChild(countryCard)

    //Then we create the event listener for when we click one country, to change the display of the modal div to 'flex'
    countryCard.addEventListener('click', () => {
      document.querySelector('#modal').style.display = 'flex'
      //and we use the function created earlier to show the more detailed information about the clicked country
      this.showInfo(country)
    })
  },

  //In this function, we will search the countries that contains the introduced input from the user, and we will print only those that contains it
  searchInputCountry(e) {
    //we create a function variable that takes the target of the input, and puts every letter one next to each other
    let { value } = e.target;
    //Then we select all the country names created earlier with the class 'country-name"
    let names = document.querySelectorAll(".country-name");
    //And for each country name, we check if the country name contains the introduced value by the user (with method include) and in case that it contains it, we  set the display to block.
    names.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = "block";
      }
      //If it doesn't contain it, we hide it setting the display to none
      else {
        name.parentElement.parentElement.style.display = "none";
      }
      //And then we always will check if there is no input value by the user, we will make all of the countries been displaied as block, and this will make that if user typed something and then he deletes it, will make all the countries show again
      if (!value) {
        name.parentElement.parentElement.style.display = 'block'
      }
    })
  },
  //In this function we will filter the countries by region
  dropdownSearch() {
    //We make the same as we did with the searchInputElement function, but using the regions. We select all regions with a querySelectorAll, and then for each one of them we check if it includes the selected region of the dropdown. We use include because the field 'country-region' is "Region: Eurpoe", so if we compare it will never be true
    let countryRegions = document.querySelectorAll('.country-region')
    countryRegions.forEach(region => {
      //Same as before, we check if it includes it and if it's true we display block the country
      if (this.innerText == 'All') {
        region.parentElement.parentElement.style.display = 'block'
      } 
      //if the user press the All regions, we just show all of them wiht a display block
      else if (region.innerText.includes(this.innerText)) {
        region.parentElement.parentElement.style.display = 'block'
      } 
      //and if not we just hide it with display none
      else {
        region.parentElement.parentElement.style.display = 'none'
      }
    })
  },

  //Small function to toggle the class dark so it will make the body change to a dark mode and go back to light mode
  toggleDarKMode() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
  }
}


//Event listener to make the dropdown shown toggleing the class open
let dropBtn = document.querySelector('#filter')

dropBtn.addEventListener('click', function () {
  dropBtn.classList.toggle('open')
})
