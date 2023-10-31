var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key';
var weatherKey = '4dbe3d9d915b38fcdb9496eab7124c6a';

element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("submit").innerHTML = "Submit!";
}

console.log(searchItem);

function storeSearchItem(term) {
    if (typeof Storage !== 'undefined') {
        
        localStorage.setItem('searchTerm', term);
    }   else {
        console.log('LocalStorage is not supported in this browser.');
    }
}

function getStoreSearchItem() {
    if (typeof Storage !== 'undefined') {
        return localStorage.getItem('searchItem');
    }   else {
        console.log('LocalStorage is not supported in this browser.');
        return null;
    }
}

async function fetchWeather() {
    const response = await fetch(weatherApi);
    mode: "cors";
    const weather = await response.json();
    console.log(weather);
}