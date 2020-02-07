import React from "react";

const SearchBar = ({ getCity }) => {
	//clear input field after pressing button
	function clearFields() {
	     document.getElementById("myInput").value = "";
	}
	return (
		<div className="search-bar">
			<input id="myInput" type="text" placeholder="Stadt hinzufügen" />
			<button id="myBtn" onClick={() => {getCity(document.getElementById('myInput').value); clearFields()}}>OK</button>
		</div>
	)
}

export default SearchBar;