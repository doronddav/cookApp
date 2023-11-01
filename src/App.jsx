import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.scss";
import Main from "./components/main/MainPage.jsx";
import Header from "./components/header/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChosenRecipe from "./components/chosenRecipe/ChosenRecipe";
import mockrecipes from "./static/recipes.json";
import Navigation from "./components/footerNavigation/Navigation";
import AddRecipe from "./components/addRecipe/AddRecipe";
import phoneImg from "./assets/phone.jpg";
import { height } from "@mui/system";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [chosenId, setChosenId] = useState();
	const [displaySearchInput, setDisplaySearchInput] = useState(false);
	const [filterdRecipes, setFilterdRecipes] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [isPopupVisible, setPopupVisible] = useState(false);
	const [recipeToEdit, setRecipeToEdit] = useState({});

	console.log(window.innerWidth);
	useEffect(() => {
		getAllRecipes();
	}, []);

	const openPopup = () => {
		setPopupVisible(true);
	};

	const closePopup = () => {
		if (isPopupVisible) setPopupVisible(false);
	};
	const getAllRecipes = async (e) => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};
		try {
			const res = await fetch(
				"https://cook-server-e5on.onrender.com/recipes",
				requestOptions,
			);
			const resJson = await res.json();
			setRecipes(resJson.data.recipes);
		} catch (err) {
			console.log(err);
		}
	};

	const searchFunc = (e) => {
		const inputValue = e.target.value;
		if (inputValue.trim() === "") {
			setFilterdRecipes([]);
		} else {
			const filtered = recipes.filter((recipe) =>
				recipe.recipeName.includes(inputValue),
			);
			setFilterdRecipes(filtered);
		}
	};

	return (
		<>
			{isMobile ? (
				<BrowserRouter>
					<Header />
					<Routes>
						<Route
							path="/"
							element={
								<Main
									recipes={recipes}
									setChosenId={setChosenId}
									chosenId={chosenId}
									displaySearchInput={displaySearchInput}
									setDisplaySearchInput={setDisplaySearchInput}
									filterdRecipes={filterdRecipes}
									setFilterdRecipes={setFilterdRecipes}
									searchFunc={searchFunc}
									openPopup={openPopup}
									closePopup={closePopup}
								/>
							}
						/>
						<Route
							path="/recipe/:recipeId"
							element={
								<ChosenRecipe
									closePopup={closePopup}
									openPopup={openPopup}
									recipes={recipes}
									isPopupVisible={isPopupVisible}
									recipeToEdit={recipeToEdit}
									setRecipeToEdit={setRecipeToEdit}
								/>
							}
						/>
						<Route
							path="/add"
							element={
								<AddRecipe
									openPopup={openPopup}
									closePopup={closePopup}
									recipes={recipes}
									recipeToEdit={recipeToEdit}
									setRecipeToEdit={setRecipeToEdit}
								/>
							}
						/>
					</Routes>
					<Navigation
						displaySearchInput={displaySearchInput}
						setDisplaySearchInput={setDisplaySearchInput}
						setFilterdRecipes={setFilterdRecipes}
					/>
				</BrowserRouter>
			) : (
				<div className={classes.NotForPhone}>
					<h1 className={classes.OnlyPhoneText}>
						This App Avilable Only On Phone
					</h1>

					<img
						className={classes.phonImg}
						src={phoneImg}
						alt="phone img"
					/>
				</div>
			)}
		</>
	);
}

export default App;
