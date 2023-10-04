import { useNavigate, useParams } from "react-router-dom";
import classes from "./chosenRecipe.module.scss";
import { useEffect, useState } from "react";
import ShareBtn from "../shareBtn/ShareBtn";
import PopUp from "../popUp/PopUp";
import EditIcon from "@mui/icons-material/Edit";
import AddRecipe from "../addRecipe/AddRecipe";
import EditRecipe from "../editRecipe/editRecipe";
import CloseIcon from '@mui/icons-material/Close';
const ChosenRecipe = ({ recipes, openPopup, closePopup, isPopupVisible,recipeToEdit
	,setRecipeToEdit }) => {
	const index = useParams();
	const i = +index["recipeId"] - 1;
	const idToFetch = index.recipeId;
	const [tempRecipe, setTempRecipe] = useState(null);
	const [chnageRecipe,SetCHnageRecipe]= useState(false)
	const [recipeToChnage,setRecipeToChange]=useState(null)
	let recipyToDisplay = tempRecipe ? tempRecipe[0] : recipes[i];

	useEffect(() => {
		
		setRecipeToChange(recipyToDisplay);
	  }, [recipyToDisplay]);
	console.log(recipeToChnage);
	
// console.log(recipes[i]);
const navigate = useNavigate();

	useEffect(() => {
		if (index) getRecipeById(idToFetch);
	}, [i]);

	useEffect(() => {
		if (isPopupVisible) {
			const timeoutId = setTimeout(() => {
				closePopup();
			}, 1000);

			
			return () => clearTimeout(timeoutId);
		}
	}, [isPopupVisible, closePopup]);

	function goToEditRecipe(){
		SetCHnageRecipe(true)
		// navigate("/add")

	}
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


	const handleUpdateRecipe = async(e) => {
		e.preventDefault();
		const requestMethods = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(recipeToChnage),
		};

		try {
			console.log(recipeToChnage);
			const response = await fetch(
				`http://localhost:3000/recipes/${idToFetch}`,
				requestMethods,
			);
			// navigate("/");
			SetCHnageRecipe(false)
		} catch (err) {
			console.log(err.response.data.result);
			alert(err.response.data.result);
		}

	  };
	const popuptext = () => {
		return <p>recipe copied, you can share it</p>;
	};
	return (
		!chnageRecipe?
		
		<div className={classes.mainContainer}>
			<div className={classes.topButtons}>

			<ShareBtn
				closePopup={closePopup}
				openPopup={openPopup}
				isPopupVisible={isPopupVisible}
				/>
			{isPopupVisible && <PopUp>{popuptext()}</PopUp>}
			<EditIcon onClick={goToEditRecipe}/>
			
				</div>


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
		:

		<form onSubmit={handleUpdateRecipe} className={classes.mainContainerUpdate}>
			{isPopupVisible && <PopUp className={classes.copyPopUp}>{popuptext()}</PopUp>}
			<CloseIcon className={classes.closeBtn} onClick={()=>SetCHnageRecipe(false)}/>
			


			<div className={classes.title}>
				<input
				value={recipeToChnage.recipeName}
				onChange={(e) => setRecipeToChange({ ...recipeToChnage, recipeName: e.target.value })}
				/>
				
			</div>
			<div className={classes.description}>
				<input
				value={recipeToChnage.description}
				onChange={(e) => setRecipeToChange({ ...recipeToChnage, description: e.target.value })}
				/>
				
			</div>
			<div className={classes.ingredientsUpdate}>
				<p className={classes.titleUpdate}>מרכיבים</p>
				{recipeToChnage?.ingredients.map((ing, i) => (
					<div
						className={classes.ingList}
						key={i}>
							<input
							type="number"
							value={ing.amount}
							onChange={(e) => {
								const updatedIngredients = [...recipeToChnage.ingredients];
								updatedIngredients[i].amount = e.target.value;
								setRecipeToChange({ ...recipeToChnage, ingredients: updatedIngredients });
							  }}
							/>
				<input
				value={ing.ing}
				onChange={(e) => {
					const updatedIngredients = [...recipeToChnage.ingredients];
					updatedIngredients[i].ing = e.target.value;
					setRecipeToChange({ ...recipeToChnage, ingredients: updatedIngredients });
				  }}
				/>
					
					</div>
				))}
			</div>
			<div className={classes.method}>
				<p className={classes.titleUpdate}>הוראות הכונה</p>
				<ol>
					{recipeToChnage?.method.map((step, i) => (
						// <li key={i}>{step}</li>
						<textarea
							rows="1"
							cols="50"
							value={step
								
							  }			
							  onChange={(e) => {
								const updatedMethod = [...recipeToChnage.method];
								updatedMethod[i] = e.target.value;
								setRecipeToChange({ ...recipeToChnage, method: updatedMethod });
							  }}  	
							
							
						/>
					))}
				</ol>
			</div>

			<div className={classes.addBtn}>
				<button className={classes.btn}>Edit Recipe</button>
			</div>
		</form>
	);
};

export default ChosenRecipe;
