import React from "react";

const SearchBar = ({ getCity }) => {
	//clear input field after pressing button
	function clearFields() {
	     document.getElementById("myInput").value = "";
	}
	return (
		<div className="flex flex-wrap justify-center items-center">
			<input id="myInput" type="text" placeholder="Stadt hinzufügen" className="b pa2 ba bg-transparent ma4" />
			<button id="myBtn" className="f6 link dim br-pill ba bw1 ph3 pv2 dib black" onClick={() => {getCity(document.getElementById('myInput').value); clearFields()}}>OK</button>
		</div>
	)
}

export default SearchBar;