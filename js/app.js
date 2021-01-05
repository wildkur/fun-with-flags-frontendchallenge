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
        Dom.addCountry(country)
    })


}

//Dark Mode toggler
let nightMode = document.querySelector('#toggle')
let body = document.querySelector('body')

nightMode.addEventListener('click', function(){
    body.classList.toggle('dark')
})

