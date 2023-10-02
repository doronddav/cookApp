import { useEffect, useState } from "react";
import classes from "./search.module.scss";
import SearchPopUp from "./searchPopup";
const Search = ({ recipes, filterdRecipes, setFilterdRecipes, searchFunc }) => {
	return (
		<div className={classes.search}>
			<input
				type="search"
				className={classes.searchInput}
				name="searchInput"
				onChange={searchFunc}
				placeholder="Search for Recipe "
			/>
		</div>
	);
};
export default Search;
