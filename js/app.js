loadFlags()

function loadFlags(){
    Requests.getCountriesFromJSON(processFlags)
}

function processFlags(result){
    let countries = document.querySelector('#countries')
    let countryArray = result
    countries.innerHTML = ''
    let inputBox = document.querySelector('#search')
    
    //For each country of the array, we create a div with their respective information
    countryArray.forEach(country => {
        Dom.addCountry(country)
    })

    inputBox.addEventListener('input', function(e){
        let {value} = e.target
        let names = document.querySelectorAll('.country-name')

        names.forEach(name => {
            if(name.innerText.toLowerCase().includes(value)){
                name.parentElement.parentElement.style.display='block'
            } else {
                name.parentElement.parentElement.style.display='none'
            }
            if(!value){
                name.parentElement.parentElement.style.display='block'
            }
        })
    })
}

//Dark Mode toggler
let nightMode = document.querySelector('#toggle')
let body = document.querySelector('body')

nightMode.addEventListener('click', function(){
    body.classList.toggle('dark')
})

