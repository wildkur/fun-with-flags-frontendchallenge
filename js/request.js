
const Requests = {
    getCountriesFromJSON(cb){
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url).then(response => response.json()).
        then(result => cb(result)).
        catch(error => console.log(error))
    }
}