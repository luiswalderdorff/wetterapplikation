import React, { Component } from "react";
import {Link} from 'react-router-dom';

class WeatherComponent extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	render() {
	const { city, index, removeCity } = this.props;
	/*Only renders this once a city name is fetched, to avoid errors*/
		if (city.name) {
			/*every item on the list has two sides, simple and detailed. Are switched by clicking */
			return (
			<div className="weather-component">
				<div className="component-top">
					<div></div>
					<div>{ city.name }</div>
					<div onClick={() => removeCity(index)}>×</div>
				</div>
				<div className="component-bottom">
					<Link to={{
						pathname: `${process.env.PUBLIC_URL}/${city.name}`,
						state: {city: city}
					}}>
						<img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt="A weather icon" />
					</Link>
					<div>{city.temperature}°C</div>
				</div>
			</div>
			)
		} else {
			return (
				<div>Hi</div>
			)
		}
	}
}

export default WeatherComponent;