import React, { Component } from "react";

class WeatherComponent extends Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		}
	}

	changeClickedState = () => {
		if (this.state.clicked === false) {
			this.setState({clicked: true})
		} else {
			this.setState({clicked: false})
		}
	}

	render() {
	const { city, index, removeCity } = this.props;
		if (city.name) {
			if (this.state.clicked === false) {
				return (
				<div className="flex items-center pa3 justify-around ba b--dotted ma3">
					<div className="flex flex-column w-50 tc"> 
					<a href="#" onClick={this.changeClickedState}>
						<div className="city-name tc b pa1">{ city.name } (mehr Info)</div>
					</a>
						<div className="weather-description tc pa1">{city.weather.description}</div>
					</div>
					<div className="flex items-center w-50 justify-center">
						<img src={`http://openweathermap.org/img/w/${city.weather.icon}.png`} alt="A weather icon" />
						<div className="temperature tc pa2">{city.temperature}°C</div>
					</div>
					<div className="pointer b">
						<a onClick={() => removeCity(index)}>×</a>
					</div>
				</div>
				)
			} else {
				return (
				<div className="flex-wrap items-center pa3 justify-around ba b--dotted ma3">
					<a href="#" onClick={this.changeClickedState}>
						<div className="city-name tc b pa1">{ city.name } (weniger Info)</div>
					</a>
					<div className="weather-description tc pa1">{city.weather.description}</div>
					<div className="temperature tc pa2">Temperatur: {city.temperature}°C</div>
					<div className="tc pa2">Gefühlt: {city.feelsLike}°C</div>
					<div className="tc pa2">Min: {city.minTemp}°C</div>
					<div className="tc pa2">Max: {city.maxTemp}°C</div>
					<div className="tc pa2">Luftdruck: {city.pressure} hPA</div>
					<div className="tc pa2">Luftfeuchtigkeit: {city.humidity}%</div>
					<div className="pa2 tc b"><a className="pointer" onClick={() => removeCity(index)}>×</a></div>
				</div>
				)
			}
		} else {
			return (
				<div>Hi</div>
			)
		}
	}
}

export default WeatherComponent;