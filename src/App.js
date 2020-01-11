import React, {Component} from 'react';
import Title from "./components/Title";
import WeatherWrapper from "./components/WeatherWrapper";
import SearchBar from "./components/SearchBar";

class App extends Component {

	constructor() {
		super();
		this.state = {
			weatherArray: []
		}
	}

	// get city from openweather
	getCity = (city) => {
		fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=de&APPID=761b91c920e9201fba7da16e3aa16206`)
			.then(response => response.json())
			.then(response => {
				// adds new city to array, updates state and localstorage
				let weatherArray = this.state.weatherArray;
				weatherArray.push({name: response.name, temperature: response.main.temp, weather: response.weather[0], feelsLike: response.main.feels_like, minTemp: response.main.temp_min, maxTemp: response.main.temp_max, pressure: response.main.pressure, humidity: response.main.humidity});
				this.setState({ weatherArray });
				localStorage.setItem("weatherArray", JSON.stringify(weatherArray));
			})
			.catch(err => console.log(err));
	}

	// removes city from array, updates state and localstorage
	removeCity = (index) => {
		let weatherArray = this.state.weatherArray;
		weatherArray.splice(index, 1);
		this.setState({ weatherArray });
		localStorage.setItem("weatherArray", JSON.stringify(weatherArray));
	}

	componentDidMount() {
		// If localstorage from last session is available use that. Else, search for dresden
		if (localStorage.getItem("weatherArray")) {
			const weatherString = localStorage.getItem("weatherArray");
			const weatherArray = JSON.parse(weatherString);
			weatherArray.forEach((city,index) => {
				this.getCity(city.name);
			});
		} else {
			this.getCity("dresden");
		}

		// Press enter to start search
		var input = document.getElementById("myInput");
		input.addEventListener("keyup", function(event) {
		  if (event.keyCode === 13) {
		    event.preventDefault();
		    document.getElementById("myBtn").click();
		  }
		});
	}

  render() {
  	const { weatherArray } = this.state;
    return(
      <div className="App flex flex-column items-center avenir">
        <Title />
        <WeatherWrapper weatherArray={ weatherArray } removeCity={ this.removeCity } />
        <SearchBar getCity={ this.getCity } onInputChange={ this.onInputChange } />
      </div>
    )
  }
}

export default App;
