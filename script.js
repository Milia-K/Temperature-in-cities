
let cities = ['Москва', 'Санкт-Петербург', 'Рим', 'Стамбул'];
let temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру в городе ${cities[i]}`);
    temperatures.push(temperature);
}

//console.log(temperatures);

for (let i = 0; i < cities.length; i++) {
    console.log(`${cities[i]}: ${temperatures[i]}`);
}
let temperatureList = document.getElementById('temperature-list');

for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = `${cities[i]}: ${temperatures[i]}`;
    temperatureList.appendChild(listItem);
}

let minTemperature = Infinity;
let maxTemperature = -Infinity;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] < minTemperature) {
    minTemperature = temperatures[i];
}
if (temperatures[i] > maxTemperature) {
    maxTemperature = temperatures[i];
}
}

let minMaxInfo = document.createElement('p');
minMaxInfo.innerText = `Минимальная температура: ${minTemperature} \nМаксимальная температура: ${maxTemperature}`;
minMax.appendChild(minMaxInfo);


