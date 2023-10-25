import categories from "../../static/categories.json";
import imageNotFound from "../../static/logos/Image_not_found.png";
exports.findImg = (recipy) => {
	console.log(recipy);
	if (recipy.category === "pizza") {
		image = category[0].image;
	}
	if (recipy.category === "pasta") {
		image = category[1].image;
	}
	if (recipy.category === "bread") {
		image = category[2].image;
	}
	if (recipy.category === "deserts") {
		image = category[3].image;
	}
	if (recipy.category === "meat") {
		image = category[4].image;
	} else {
		image = Image_not_found;
	}
	return image;
};
