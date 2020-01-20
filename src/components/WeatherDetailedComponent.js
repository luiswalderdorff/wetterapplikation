import React, { Component } from "react";
import {Link} from 'react-router-dom';


class WeatherDetailedComponent extends Component {
	render() {
		const { city } = this.props;
		return(
			<div>
				<Link to={"/"}>
						<h1 className="dib ml3">&larr;</h1>
				</Link>
				<div className="flex-wrap items-center pa3 justify-around ba ma3 weather-component detailed-view br3">
					<div className="tc">
						<h1 className="city-name tc b pa1 dib ma0">{ city.name }</h1>
					</div>
					<div className="flex flex-wrap justify-around">
						<div className="flex">
							<img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt="A weather icon" />
							<div className="flex justify-center flex-column">
								<div className="tc pa2">Temperatur: {city.temperature}°C</div>
								<div className="tc pa1">{city.weather.description}</div>
							</div>
						</div>
						<div className="flex flex-column justify-center">
							<div className="flex">
								<div className="pa2">Gefühlt: {city.feelsLike}°C</div>
								<div className="pa2">Min: {city.minTemp}°C</div>
								<div className="pa2">Max: {city.maxTemp}°C</div>
							</div>
							<div className="flex">
								<div className="pa2">Luftdruck: {city.pressure} hPA</div>
								<div className="pa2">Luftfeuchtigkeit: {city.humidity}%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default WeatherDetailedComponent;