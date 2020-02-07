import React, { Component } from "react";

class DailyComponent extends Component {
	render() {
		const { listItem, day } = this.props;
		return(
			<div className="detailed-day">
				<div>
					<div>{day}</div>
					<img src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`} alt="A weather icon" />
					<div>{listItem.main.temp}°C</div>
					<div>{listItem.weather[0].description}</div>
				</div>
			</div>
		)
	}
}

export default DailyComponent;