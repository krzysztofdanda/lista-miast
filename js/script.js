let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];


let orderedList = document.createElement('ol');


cities.forEach(function(city) {
    
    let listItem = document.createElement('li');
    
    
    listItem.textContent = city;
    
    
    listItem.classList.add('city');
    
    
    orderedList.appendChild(listItem);
});

let cityListContainer = document.getElementById('cityListContainer');


cityListContainer.appendChild(orderedList);
