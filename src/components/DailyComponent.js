import React, { Component } from "react";

class DailyComponent extends Component {
	render() {
		const { listItem, day } = this.props;
		return(
			<div className="dib w-90 ba b--black-10 flex justify-around items-center ma3 w-40-ns w-25-l shadow-5 weather-component">
				<div>
					<div>{day}</div>
					<div>{listItem.main.temp}°C</div>
					<div>{listItem.weather[0].description}</div>
				</div>
				<img src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`} alt="A weather icon" />
			</div>
		)
	}
}

export default DailyComponent;