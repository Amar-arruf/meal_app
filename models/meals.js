class Meal {
  constructor(
      id, 
      CategoryId, 
      title, 
      affordability, 
      complexity, 
      imageUrl, 
      duration, 
      ingredients, 
      steps, 
      isGlutenFree, 
      isVegan, 
      isVegetarian, 
      isLactoseFree
  ) {
      this.id = id;
      this.CategoryId = CategoryId;
      this.title = title;
      this.affordability = affordability;
      this.complexity = complexity;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.vegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;