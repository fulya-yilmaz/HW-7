const menuDatabase = [
  [
    "Papadum",
    20,
    "vegetarian",
    "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
  ],
  [
    "Pakora",
    50,
    "meat",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
  ],
  [
    "Tandoori Chicken",
    60,
    "meat",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
  ],
  [
    "Samosa",
    50,
    "vegetarian",
    "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
  ],
];

displayMenu(menuDatabase);

function showVegetarian() {
  const menuItems = menuDatabase.filter((menuItem) => {
    return menuItem[2] == "vegetarian";
  });
  displayMenu(menuItems);
}

function showMeat() {
  const menuItems = menuDatabase.filter((menuItem) => {
    return menuItem[2] == "meat";
  });
  displayMenu(menuItems);
}

function displayMenu(menuItems) {
  const listContainer = document.getElementById("list-container");

  // Clear the existing list
  listContainer.innerHTML = "";

  menuItems.forEach((menuItem) => {
    // Get the list container element
    const liElement = document.createElement("li");

    // Create the elements for the menu item
    const imageElement = document.createElement("img");
    imageElement.src = menuItem[3];

    const productNameElement = document.createElement("p");
    productNameElement.innerText = menuItem[0];

    const priceElement = document.createElement("p");
    priceElement.innerText = menuItem[1];

    const categoryElement = document.createElement("p");
    categoryElement.innerText = menuItem[2];

    // Append the elements to the list item
    liElement.appendChild(imageElement);
    liElement.appendChild(productNameElement);
    liElement.appendChild(priceElement);
    liElement.appendChild(categoryElement);

    listContainer.appendChild(liElement);
  });
}
