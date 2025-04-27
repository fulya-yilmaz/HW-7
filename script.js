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

  function showVegetarian(){
    let menuItems=menuDatabase.filter(menuItem=>{
         return menuItem[2]=='vegetarian'
    });
    displayMenu(menuItems);
  }

  function showMeat(){
    let menuItems=menuDatabase.filter(menuItem=>{
         return menuItem[2]=='meat'
    });
    displayMenu(menuItems);
  }


  function displayMenu(menuItems){

    let listContainer= document.getElementById('list-container');
 

    menuItems.forEach(menuItem => {
        
        let liElement = document.createElement('li');

        let imageElement = document.createElement('img');
        imageElement.src = menuItem[3];

        let productNameElement = document.createElement('p');
        productNameElement.innerText=menuItem[0];

        let priceElement = document.createElement('p');
        priceElement.innerText=menuItem[1];

        let categoryElement = document.createElement('p');
        categoryElement.innerText=menuItem[2];

        liElement.appendChild(imageElement);
        liElement.appendChild(productNameElement);
        liElement.appendChild(priceElement);
        liElement.appendChild(categoryElement);

        listContainer.appendChild(liElement);
    });

  }