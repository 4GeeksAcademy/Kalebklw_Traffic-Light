import React, {useState} from "react";




//create your first component
const Home = () => {

const [clickedColor, setClickedColor] = useState()
	const changeClickedColor = () => {
		setClickedColor()
	};

	return (
		<div className="">
			
			{/* Red Light */}
			<div 
			onClick={() => setClickedColor("red")} 
			className={`${clickedColor === "red" ? console.log("red?") : "boxShadow" }`} 
			style={{background: "red", height: "30px", width: "30px", borderRadius: "25px", boxShadow: ""}}>
			</div>
			
			{/* Yellow Light */}
			<div 
			onClick={() => setClickedColor("yellow")}
			className={`${clickedColor === "yellow" ? console.log("yellow?") : ""}`} 
			style={{background: "yellow", height: "30px", width: "30px", borderRadius: "25px"}}>
			</div>
			
			{/* Green Light */}
			<div
			onClick={() => setClickedColor("green")}
			className={`${clickedColor === "green" ? console.log("green?") : ""}`}
			style={{background: "green", height: "30px", width: "30px", borderRadius: "25px"}}>
			</div>

		</div>
	);
};

export default Home;