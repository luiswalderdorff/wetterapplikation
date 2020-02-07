import React, { Component } from "react";
import {Link} from 'react-router-dom';


class WeatherDetailedComponent extends Component {
	render() {
		const { city } = this.props;
		return(
			<div className="detailed-component">
				<div className="detailed-top">
					<div className="detailed-title">
						<Link to={process.env.PUBLIC_URL + "/"}>
							<h1>&larr;</h1>
						</Link>
						<h1>{ city.name }</h1>
						<div></div>
					</div>
					<div className="detailed-basics">
						<img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt="A weather icon" />
						<div>
							<div>{city.temperature}°C</div>
							<div>{city.weather.description}</div>
						</div>
					</div>
				</div>
				<div className="detailed-bottom">
					<div>Gefühlt: {city.feelsLike}°C</div>
					<div>Min: {city.minTemp}°C</div>
					<div>Max: {city.maxTemp}°C</div>
					<div>Luftdruck: {city.pressure} hPA</div>
					<div>Luftfeuchtigkeit: {city.humidity}%</div>
				</div>
			</div>
		)
	}
}

export default WeatherDetailedComponent;