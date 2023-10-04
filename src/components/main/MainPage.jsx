import Header from "../header/Header"; // Use default import, not named import
import Menu from "../menu/Menu";
import Search from "../searchComp/Search";
import classes from "./main.module.scss";
import Categories from "../categories/Categories";
import categoriesData from "../../static/categories.json";
import RecipeBox from "../recipeBox/recipeBox";
import { useState } from "react";

const Main = ({
	recipes,
	displaySearchInput,
	filterdRecipes,
	setFilterdRecipes,
	searchFunc,
	setDisplaySearchInput,
	closePopup,
}) => {
	// const [sortByCategories, setSortByCategories] = useState;
	// const [searchInput,setSearchInput]=useState('')
	// const [filterdRecipes,setFilterdRecipes]= useState([])

	// const searchFunc=(e)=>{
	//   const inputValue = e.target.value
	//   // console.log(inputValue);

	//   const filtered=recipes.filter((recipe)=> recipe.Name.includes(inputValue))
	//   setFilterdRecipes(filtered)
	// }

	return (
		<div className={classes.mainPage}>
			{displaySearchInput && (
				<Search
					recipes={recipes}
					filterdRecipes={filterdRecipes}
					setFilterdRecipes={setFilterdRecipes}
					searchFunc={searchFunc}
				/>
			)}
			<Categories
				categoriesData={categoriesData}
				filterdRecipes={filterdRecipes}
				setFilterdRecipes={setFilterdRecipes}
				displaySearchInput={displaySearchInput}
				setDisplaySearchInput={setDisplaySearchInput}
				recipes={recipes}
			/>
			<RecipeBox
				recipes={recipes}
				filterdRecipes={filterdRecipes}
			/>
		</div>
	);
};

export default Main;
