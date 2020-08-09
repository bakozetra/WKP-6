const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];
// map the foods to get the html
const container = document.querySelector('.container');
const aboutFood = foods.map(food => {
	return `
		<ul data-id = ${food.id}>
		<li>${food.title}</li>
		<li>${food.price}Ar</li>
		<li><button class="addButton">add</button></li>
		</ul>
		`
})
console.log(aboutFood);
const allList  = document.querySelector('.all-list');
// add an inner html to get the detail of the food
const listOfFood = () => {
	allList.innerHTML = aboutFood.join(' ') ;
} 
console.log(listOfFood());
// Grab the checkbox
const checkbox = document.querySelector("#spicy");
const checkboxVegeterian = document.querySelector('#vegeterian');
const check = document.querySelector('input');

// check the checkbox if it is true
const handleChange = () => {
    if (checkbox.checked === true) {
		const filterSpicy = foods.filter(food => food.spicy === true)
		const mapSpicy = filterSpicy.map(food =>
			`
			<ul>
			    <li>${food.title}</li>
			    <li>${food.price}Ar</li>
			    <li><button class="addButton">add</button></li>
		    </ul>
		`).join('');
		allList.innerHTML = mapSpicy;
	} else if (checkboxVegeterian.checked === true) {
		const filterVegetarian = foods.filter(food => food.vegetarian === true)
		const mapVegetarian = filterVegetarian.map(food =>
			`
			<ul>
			    <li>${food.title}</li>
			    <li>${food.price}Ar</li>
			    <li><button class="addButton">add</button></li>
		    </ul>
		`).join('');
		allList.innerHTML = mapVegetarian;
}
    else {
   listOfFood();
}
}
 // listen to event listener
check.addEventListener('change',handleChange);
// to get the total of the  price
const totalPrice = document.querySelector('.total-price');
const tottalOfprice = (e) => {
	if(e.target.matches('.addButton')){
	 const button = e.target.closest('ul'); 
	}
} 
window.addEventListener('click',tottalOfprice);