import React, { Component } from "react";
import WeatherDetailedComponent from "./WeatherDetailedComponent";
import DailyComponent from "./DailyComponent"

class WeatherDetailed extends Component {
	constructor() {
		super();
		this.state = {
		}
	}
	// Used to switch from simple to detailed side
	getCity = () => {
		const paramCity = this.props.match.params.city;
		fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${paramCity}&units=metric&lang=de&APPID=761b91c920e9201fba7da16e3aa16206`)
			.then(response => response.json())
			.then(response => {
				this.setState({ weather: response });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.getCity();
		const {city} = this.props.location.state;
	}

	render() {
		if (this.props.location.state) {
			const {city} = this.props.location.state;
			/*Only renders this once a city name is fetched, to avoid errors*/
				if (this.state.weather) {
					const {list} = this.state.weather;
					return(
						<div>
							<WeatherDetailedComponent city={city} />
							<div className="flex flex-wrap justify-around">
								{list ? list.map(function (listItem, index) {
									let unix_timestamp = listItem.dt;
									// Create a new JavaScript Date object based on the timestamp
									// multiplied by 1000 so that the argument is in milliseconds, not seconds.
									let day;
									const date = new Date(unix_timestamp * 1000);
									const hours = date.getHours();
									/*if (date.getDay() === 0) {
										day = "Sonntag";
									} else if (date.getDay() === 1) {
										day = "Montag";
									} else if (date.getDay() === 2) {
										day = "Dienstag";
									} else if (date.getDay() === 3) {
										day = "Mittwoch"
									} else if (date.getDay() === 4) {
										day = "Donnerstag";
									} else if (date.getDay() === 5) {
										day = "Freitag";
									} else if (date.getDay() === 6) {
										day = "Samstag"
									} else {
										day = "Sonntag"
									}*/
									switch (date.getDay()) {
									  case 0:
									    day = "Sonntag";
									    break;
									  case 1:
									    day = "Montag";
									    break;
									  case 2:
									     day = "Dienstag";
									    break;
									  case 3:
									    day = "Mittwoch";
									    break;
									  case 4:
									    day = "Donnerstag";
									    break;
									  case 5:
									    day = "Freitag";
									    break;
									  case 6:
									    day = "Samstag";
									    break;
									  default:
									  	day = "Sonntag";
									}
									if (hours === 13 && index !== 0) {
										return <DailyComponent listItem={ listItem } key={ index } day={ day } />
									} 
								}) :
								<div></div>
							}
							</div>
						</div>
					)
				} else if (city) {
					return (
						<WeatherDetailedComponent city={city} />
					)
				} else {
					return (
						<div>Ein Fehler ist passiert</div>
					)
				} 
		} else {
					return (
						<div>Ein Fehler ist passiert</div>
					)
				} 
		
	}
}

export default WeatherDetailed;