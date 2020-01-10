import React, {Component} from 'react';
import Title from "./components/Title";
import WeatherWrapper from "./components/WeatherWrapper";
import SearchBar from "./components/SearchBar";

class App extends Component {

	constructor() {
		super();
		this.state = {
			input: "Dresden",
			weatherArray: []
		}
	}

	getCity = () => {
		fetch(`https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&units=metric&lang=de&APPID=761b91c920e9201fba7da16e3aa16206`)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				let weatherArray = [...this.state.weatherArray];
				weatherArray.push({name: response.name, temperature: response.main.temp, weather: response.weather[0], feelsLike: response.main.feels_like, minTemp: response.main.temp_min, maxTemp: response.main.temp_max, pressure: response.main.pressure, humidity: response.main.humidity});
				this.setState({ weatherArray });
				console.log(this.state.weatherArray);
			})
			.catch(err => console.log(err));
	}

	removeCity = (index) => {
		let weatherArray = [...this.state.weatherArray];
		weatherArray.splice(index, 1);
		this.setState({ weatherArray });
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	componentDidMount() {
		this.getCity("dresden");
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
