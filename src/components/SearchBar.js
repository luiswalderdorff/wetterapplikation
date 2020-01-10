import React from "react";

const SearchBar = ({ getCity, onInputChange }) => {
	return (
		<div>
			<input type="text" placeholder="Stadt hinzufügen" onChange={onInputChange} />
			<button onClick={getCity}>Hinzufügen</button>
		</div>
	)
}

export default SearchBar;