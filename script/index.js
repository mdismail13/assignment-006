const cardMaker = object => {
    const div = document.createElement('div');
    div.classList.add('p-3', 'space-y-3', 'bg-white')
    div.innerHTML = `
        <img src='${object.image}' alt="" class = 'rounded-lg'>
        <h3 class="font-bold">${object.name}</h3>
        <p class="text-sm">${object.description}</p>
        <div class="flex justify-between items-center">
            <p class="font-bold text-[#15803D] py-1 px-3 bg-[#DCFCE7] rounded-l-full rounded-r-full">${object.category}</p>
            <p class="font-bold">৳${object.price}</p>
        </div>
        <button class="w-full font-bold bg-[#15803D] text-white py-3 rounded-l-full rounded-r-full">Add to Cart</button>
    `
    return div;
}

const loadAllCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
    .then(response => response.json())
    .then(data => displayAllCategories(data));
}
const displayAllCategories = data => {
    data.categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('p-2', 'cursor-pointer', 'text-lg', 'font-semibold');
        li.innerText = category.category_name;
        document.getElementById('category-container').append(li);
    })
};
loadAllCategories();

const loadAllPlants = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
    .then(response => response.json())
    .then(data => displayAllPlants(data));
}

const displayAllPlants = data => {
    data.plants.forEach(plant => {
        document.getElementById('card-container').append(cardMaker(plant));
    })
};

loadAllPlants();