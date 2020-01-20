// Could switch to full info with React Routes

import React from "react";
import WeatherComponent from "./WeatherComponent";

// Hier später einen array an infos haben und damit mehrere Weathercomponents erstellen, je nach grösse des arrays
const WeatherWrapper = ( { weatherArray, removeCity } ) => {
	return (
		<div className="w-90 flex flex-wrap justify-center-l justify-between-ns">
	{/*displays every city from the weatherArray array*/}
				{weatherArray ? weatherArray.map(function(city, index) {
					return <WeatherComponent city={ city } key={ index } index={ index } removeCity={ removeCity } />
				}) :
				<div></div>
				}
		</div>
	)
}

export default WeatherWrapper;