import { useParams } from "react-router-dom";
import classes from "./chosenRecipe.module.scss";
import { useEffect, useState } from "react";
import ShareBtn from "../shareBtn/ShareBtn";
import PopUp from "../popUp/PopUp";
import EditIcon from "@mui/icons-material/Edit";
const ChosenRecipe = ({ recipes, openPopup, closePopup, isPopupVisible }) => {
	const index = useParams();

	const i = +index["recipeId"] - 1;
	const idToFetch = index.recipeId;
	const [tempRecipe, setTempRecipe] = useState(null);
	let recipyToDisplay = tempRecipe ? tempRecipe[0] : recipes[i];
console.log(recipyToDisplay);
	useEffect(() => {
		if (index) getRecipeById(idToFetch);
	}, [i]);

	useEffect(() => {
		if (isPopupVisible) {
			const timeoutId = setTimeout(() => {
				closePopup();
			}, 1000);

			// Clean up the timeout when the component unmounts or when isPopupVisible changes
			return () => clearTimeout(timeoutId);
		}
	}, [isPopupVisible, closePopup]);

	const getRecipeById = async (idToFetch) => {
		console.log(index);
		const requestOptions = {
			method: "Get",
			headers: { "Content-Type": "application/json" },
		};
		try {
			const res = await fetch(
				`http://localhost:3000/recipes/getRecipeById/${idToFetch}`,
				requestOptions,
			);
			const resJson = await res.json();
			return setTempRecipe(resJson.data.recipe);
			
		} catch (err) {
			console.error("Error:", err);
			throw err; // Rethrow the error so that the caller can handle it
		}
	};
	const popuptext = () => {
		return <p>recipe copied, you can share it</p>;
	};
	return (
		<div className={classes.mainContainer}>
			<ShareBtn
				closePopup={closePopup}
				openPopup={openPopup}
				isPopupVisible={isPopupVisible}
			/>
			{isPopupVisible && <PopUp>{popuptext()}</PopUp>}
			<EditIcon />

			<div className={classes.title}>
				<h3>{recipyToDisplay?.recipeName}</h3>
			</div>
			<div className={classes.description}>
				<h3>{recipyToDisplay?.description}</h3>
			</div>
			<div className={classes.ingredients}>
				<p>מרכיבים</p>
				{recipyToDisplay?.ingredients.map((ing, i) => (
					<div
						className={classes.ingList}
						key={i}>
						<span>{ing.ing}</span>
						<span>{ing.amount}</span>
					</div>
				))}
			</div>
			<div className={classes.method}>
				<p>הוראות הכונה</p>
				<ol>
					{recipyToDisplay?.method.map((step, i) => (
						<li key={i}>{step}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default ChosenRecipe;
