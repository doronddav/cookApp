import { useState } from "react";
import classes from "./recipeBox.module.scss";
// import recipes from '../../static/recipes.json'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Categories from "../../static/categories.json";
import imgNotFound from "../../static/logos/Image_not_found.png";
const RecipeBox = ({ recipes, filterdRecipes }) => {
	let recipeToDisplay = filterdRecipes.length > 0 ? filterdRecipes : recipes;

	function getImageForCategory(recipeCategory, Categories) {
		// console.log(999, Categories);
		let json_categories = Categories.categories;

		for (let i = 0; i < json_categories.length; i++) {
			// console.log(i, recipeCategory);
			// console.log("json_categories[i]:", json_categories[i].category);
			// console.log("recipeCategory:", recipeCategory);
			if (json_categories[i].category === recipeCategory) {
				console.log(json_categories[i].image);
				return json_categories[i].image;
			}
		}

		return imgNotFound;
	}

	// const findImgByCategory = (categoryName) => {
	// 	const category = jsonCategories.find(
	// 		(cat) => cat.category === categoryName,
	// 	);
	// 	if (category) {
	// 		// console.log(category);
	// 		// console.log(444, category);
	// 		return category.image;
	// 	} else {
	// 		return null;
	// 	}
	// };

	return (
		<div className={classes.allRecipesContainer}>
			{recipeToDisplay.map((recipe, index) => {
				const imgToDisplay = getImageForCategory(recipe.category, Categories);
				return (
					<Link
						to={`/recipe/${recipe.id}`}
						className={classes.recipeBox}
						key={index}>
						<div className={classes.boxContent}>
							<h3>{recipe.recipeName}</h3>
							<p>{recipe.description}</p>
						</div>
						<div>
							<img
								className={classes.mainImg}
								src={imgToDisplay}
								// src={findImgByCategory("pizza")}
								alt={recipe.Name}
							/>
							{/* {console.log(findImgByCategory(recipe))} */}
							{/* {console.log(recipe.category)} */}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default RecipeBox;
