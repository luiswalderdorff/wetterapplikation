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
			<div className="dib w-90 ba b--black-10 flex flex-column items-center ma3 w-40-ns w-25-l shadow-5 weather-component">
				<div className="flex justify-between w-100 pa3">
					<div></div>
					<div className="dib">{ city.name }</div>
					<div className="pointer b dib" onClick={() => removeCity(index)}>×</div>
				</div>
				<Link to={{
					pathname: `${process.env.PUBLIC_URL}/${city.name}`,
					state: {city: city}
				}}>
					<img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt="A weather icon" className="h4" />
				</Link>
				<div className="pa3">{city.temperature}°C</div>
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