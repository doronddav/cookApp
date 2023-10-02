import classes from "./popUp.module.scss";
const PopUp = ({ children }) => {
	return <div className={classes.popUp}>{children}</div>;
};
export default PopUp;
