import React, { useEffect } from "react";
import classes from "./categories.module.scss";

const Categories = ({
	categoriesData,
	setFilterdRecipes,
	filterdRecipes,
	setDisplaySearchInput,
	displaySearchInput,
	recipes,
}) => {
	const filterByCategoryFunc = (categoryName) => {
		setDisplaySearchInput(false);
		const filtered = recipes.filter(
			(recipe) =>
				typeof recipe.category === "string" &&
				recipe.category.toLowerCase() === categoryName.toLowerCase(),
		);
		console.log(filtered);
		setFilterdRecipes(filtered);
	};

	useEffect(() => {
		console.log("new:", filterdRecipes);
	}, [filterdRecipes]);
	return (
		<div className={classes.categoriesContainer}>
			<div className={classes.scrollableContent}>
				{categoriesData.categories.map((category, index) => (
					<div
						onClick={() => filterByCategoryFunc(category.category)}
						className={classes.categoryBox}
						key={index}>
						<img
							src={category.image}
							alt={category.name}
						/>
						<h2>{category.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
