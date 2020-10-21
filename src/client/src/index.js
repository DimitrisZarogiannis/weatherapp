import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// Helper function returning current day info
let dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day_full = days[d.getDay()];
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return day_full + ' ' + day + ' ' + month + ' ' + year;
}


function Weather(props) {
    return (
        <div>
            <div className='location-box'>
                <div className='location'>{props.weather.location}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
                <div className='temp'>
                    {props.weather.temperature}°C
                </div>
                <div className='weather'>
                    {props.weather.description}
                </div>
            </div>
        </div>
    )
}

class WeatherApp extends React.Component {

    constructor() {
        super()
        this.state = {
            input: '',
            weather: JSON,
            showResults: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchCity = this.searchCity.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    async searchCity() {
        let city = this.state.input;
        if (city) {
            const result = await fetch(`http://localhost:4000/weather?city=${city}`);
            const resultJson = await result.json();
            this.setState({
                weather: resultJson,
                showResults:true
            });
        }
        else {
            alert('Search field empty! Please provide a valid city name.')
        }

    }

    render() {
        return (
            <div className='app'>
                <main>
                    <div className='Greet'>Welcome to the coolest weather application!</div>
                    <label className='search-label'>Check the current weather conditions on a city of your choice!</label>
                    <div className='search-box'>
                        <input type='text' className='search-bar' value={this.state.input} onChange={this.handleChange} placeholder='Search by city name, if you wish...'></input>
                        <button className='search-button' onClick={this.searchCity}><i class="fa fa-search"></i></button>
                    </div>
                    <div>{this.state.showResults ?<Weather weather={this.state.weather}/> : null}</div>
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <WeatherApp />,
    document.getElementById('root')
);
