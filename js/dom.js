const Dom = {
  //Function to show on the modal div the information about the clicked country
  showInfo(country) {
    //We first give the imag tag the correct source of the country
    let displayImage = document.querySelector("img");
    displayImage.src = country.flag;
    //We select the mode body div, and we print on it all the information we want on it, divided in two divs making it look like two columns
    let modalB = document.querySelector(".modal-body");
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
                  ${country.currencies.map((currency) => currency.code)}
                </p>
                <p>
                  <strong>Languages:</strong>
                  ${country.languages.map((language) => language.name)}
                </p>
               </div>
               <p class="border-countries">
               <strong> Border Countries: </strong>
                ${country.borders}
        </p>
        `;
    //With this event listener, we use the X button on the modal, to close it when pressed just changing the display of the modal div to none
    let closeBtn = document.querySelector("#close");
    closeBtn.addEventListener("click", function () {
      document.getElementById("modal").style.display = "none";
    });
  },

  //With this function, we created the small div with the basic informatin of all countries in the API
  addCountry(country) {
    let countryCard = document.createElement("div");
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
       `;
    //Then e add the class card into this div
    countryCard.classList.add("card");
    //and the we append it onto the main div container of countries
    countries.appendChild(countryCard);

    //Then we create the event listener for when we click one country, to change the display of the modal div to 'flex'
    countryCard.addEventListener("click", () => {
      document.querySelector("#modal").style.display = "flex";
      //and we use the function created earlier to show the more detailed information about the clicked country
      this.showInfo(country);
    });
  },

  searchInputElement(e) {
    let { value } = e.target;
    let names = document.querySelectorAll(".country-name");

    names.forEach((name) => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
      if (!value) {
        name.parentElement.parentElement.style.display = "block";
      }
    });
  },

  filterByRegions() {
    let regions = document.querySelectorAll(".country-region");
    regions.forEach((region) => {
      if (region.innerText.includes(this.innerText)) {
        region.parentElement.parentElement.style.display = "block";
      } else {
        region.parentElement.parentElement.style.display = "none";
      }
      if (this.innerText === "All") {
        region.parentElement.parentElement.style.display = "block";
      }
    });
  },

  //Small function to toggle the class dark so it will make the body change to a dark mode and go back to light mode
  toggleDarMode() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
  },
};

//Drop down shows
let dropBtn = document.querySelector("#filter");
dropBtn.addEventListener("click", function () {
  dropBtn.classList.toggle("open");
});
