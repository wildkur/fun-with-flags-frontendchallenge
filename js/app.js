loadFlags();

function loadFlags() {
  Requests.getCountriesFromJSON(processFlags);
}

function processFlags(result) {
  let countries = document.querySelector("#countries");
  let countryArray = result;
  countries.innerHTML = "";
  let inputBox = document.querySelector("#search");
  let list = document.querySelectorAll("li");

  //For each country of the array, we create a div with their respective information
  countryArray.forEach((country) => {
    Dom.addCountry(country);
  });

  //This listener activates the function in the dom, of showing the countries that contains the inputted letter
  inputBox.addEventListener("input", Dom.searchInputElement);

  //This listener shows the countries of the specific region we clicked
  list.forEach((item) => {
    item.addEventListener("click", Dom.filterByRegions);
  });
}

//Dark Mode toggler
let nightMode = document.querySelector("#toggle");
nightMode.addEventListener("click", Dom.toggleDarKMode);
