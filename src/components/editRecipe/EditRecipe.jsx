import { useState } from "react";
import { useNavigate } from "react-router";

const EditRecipe=()=>{
	const INITIAL_INPUT_COUNT = 2; // Initial count of inputs
	const [inputSets, setInputSets] = useState(
		Array.from({ length: INITIAL_INPUT_COUNT }, () => ({
			amount: "",
			ing: "",
		})),
	);
	// const [submitForm, setSubmitForm] = useState(false);
	const [methodInputs, setMethodInputs] = useState(
		Array.from({ length: INITIAL_INPUT_COUNT }, () => ""),
	);
	const navigate = useNavigate();
	console.log("inputSets", inputSets);

	// const addInputSet = () => {
	// 	setInputSets([...inputSets, { amount: Number, ing: "" }]);
	// };
	// const addMethodStep = () => {
	// 	setMethodInputs([...methodInputs, ""]);
	// };
	// const handleAddName = (e) => {
	// 	setRecipeToAdd({ ...recipeToAdd, recipeName: e.target.value });
	// };

	// const handleAddDescription = (e, index) => {
	// 	setRecipeToAdd({ ...recipeToAdd, description: e.target.value });
	// };
	// const handleAddCategory = (e, index) => {
	// 	setRecipeToAdd({ ...recipeToAdd, category: e.target.value });
	// };
	
    return (
		<form
			className={classes.main}
			// onSubmit={addRecipeToDB}
			>
			<div className={classes.nameAndSelect}>
				<input
					type="text"
					id="name"
					name="name"
					// onChange={handleAddName}
					placeholder=":שם המנה"
				/>

				<select
				// onChange={handleAddCategory}
					className={classes.selectInput}
					name="categories"
					id="categories">
					<option value="pizza">פיצה</option>
					<option value="pasta">פסטה</option>
					<option value="bread">בצק</option>
					<option value="deserts">קינוח</option>
					<option value="burger">המבורגר</option>
					<option value="soup">מרק</option>
				</select>
			</div>
			<div className={classes.title}>
				<input
					className={classes.descriptionInput}
					type="text"
					id="description"
					name="description"
					// onChange={handleAddDescription}
					placeholder=":תיאור"
				/>
			</div>
			<div className={classes.title}>
				{inputSets.map((inputSet, index) => (
					<span className={classes.ingInputs}>
						<input
							className={classes.amountInput}
							type="number"
							id={`amount-${index}`}
							name={`amount-${index}`}
							placeholder="כמות"
							value={inputSet.amount}
							// onChange={(e) => {
							// 	// if (submitForm === true) {
							// 	// 	handleAddIngAmount(e);
							// 	// } else {

							// 	const updatedInputSets = [...inputSets];
							// 	updatedInputSets[index].amount = e.target.value;
							// 	setInputSets(updatedInputSets);
							// 	// }
							// }}
						/>
						<input
							type="text"
							id={`ing-${index}`}
							name={`ing-${index}`}
							placeholder="מרכיב"
							value={inputSet.ing}
							// onChange={(e) => {
							// 	const updatedInputSets = [...inputSets];
							// 	updatedInputSets[index].ing = e.target.value;
							// 	setInputSets(updatedInputSets);
							// }}
						/>
					</span>
				))}
				<img
					src={plusIcon}
					className={classes.btn}
					onClick={addInputSet}></img>
			</div>

			<div className={`${classes.title} ${classes.methodBox}`}>
				<label htmlFor="name">הוראות הכונה:</label>
				{methodInputs.map((input, index) => (
					<div key={index}>
						<textarea
							rows="1"
							cols="50"
							value={input}
							// onChange={(e) => {
							// 	const updatedInputs = [...methodInputs];
							// 	updatedInputs[index] = e.target.value;
							// 	setMethodInputs(updatedInputs);
							// }}
							placeholder="שלבי הכנה"
						/>
					</div>
				))}
				<img
					src={plusIcon}
					className={classes.btn}
					// onClick={addMethodStep}
					></img>
			</div>

			{/* <div className={classes.addImg}>
				<label for="imageUpload">Upload Image:</label>
				<input
					type="file"
					id="imageUpload"
					name="image"
					accept=".jpg, .jpeg, .png, .gif"
					onChange={handleImageUpload}
				/>
			</div> */}

			<div className={classes.addBtn}>
				<button className={classes.btn}>Add Recipe</button>
			</div>
		</form>
	);
}

export default EditRecipe