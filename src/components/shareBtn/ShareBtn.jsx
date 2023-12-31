import ShareIcon from "@mui/icons-material/Share";

const ShareBtn = ({ openPopup, closePopup, isPopupVisible }) => {
	const handleShareClick = () => {
		openPopup();
		const url = window.location.href;
		const copyBtn = document.querySelector("#copy-btn");

		navigator.clipboard.writeText(url);

		
	};

	return (
		<div>
			<ShareIcon
				id="copy-btn"
				onClick={handleShareClick}></ShareIcon>
		</div>
	);
};
export default ShareBtn;
