function groupingDishes(dishes) {
  let dishIng = {};
  
  dishes.forEach(dish => {
    const dishName = dish[0];
    const ingredients = dish.slice(1);
    
    ingredients.forEach(ingredient => {
      if (!dishIng[ingredient]) dishIng[ingredient] = [];
      dishIng[ingredient].push(dishName);
    })
  })
  
  let filteredIng = Object.keys(dishIng).filter(key => dishIng[key].length > 1);
  filteredIng.sort();
  
  let output = [];
  
  filteredIng.forEach(ing => {
    let dishes = dishIng[ing];
    dishes.sort();
    
    let subArr = [ing];
    output.push(subArr.concat(dishes));
  })
  
  return output;
}