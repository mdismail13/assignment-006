const loadAllCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories';
    fetch(url)
    .then(response => response.json())
    .then(data => displayAllCategories(data));
}
const displayAllCategories = data => {
    data.categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('p-2');
        li.innerText = category.category_name;
        document.getElementById('category-container').append(li);
    })
};
loadAllCategories()