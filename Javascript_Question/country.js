let countryObj = {
  name: "Philippines",
  population: 113000000,
  continent: "Asia"
};

// Call the function to add the isIsland property
addIslandProperty(countryObj);

// Output the updated object
console.log(countryObj);



function addIslandProperty(countryObj) {
  const islandCountries = [
    "Japan", "Indonesia", "Philippines", "Sri Lanka",
    "Iceland", "New Zealand", "Madagascar", "Maldives",
    "United Kingdom", "Cuba", "Fiji"
  ];

  // Check if the country is in the list of island nations
  countryObj.isIsland = islandCountries.includes(countryObj.name);

  console.log(Is ${countryObj.name} an island or near one? ${countryObj.isIsland});
}

// Example usage
let country1 = { name: "Japan", population: 126000000 };
addIslandProperty(country1); // true

let country2 = { name: "Germany", population: 83000000 };
addIslandProperty(country2); // false
