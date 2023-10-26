<template>
  <div>
    <div class="city-search">
      <input v-model="cityName" @input="filterCities" placeholder="Enter a city name" />
      <a-button @click="fetchWeather">Click</a-button>
    </div>
    <ul v-if="filteredCities.length > 0" class="autocomplete-list">
      <li v-for="city in filteredCities" :key="city">{{ city }}</li>
    </ul>
    <div v-if="weatherData">
      <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
      <p>Weather: {{ weatherData.weather[0].description }}</p>
      <p>Temperature: {{ (weatherData.main.temp - 273.15).toFixed(2) }}°C</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import citiesData from '../data/ir.json'
import axios from 'axios';


export default defineComponent({
  components: {
    DownOutlined,
  },
  name: 'Weather',
  data() {
    return {
      apiKey: '37c9da535945618f4b0169af14d5c9b0',
      cityName: '',
      weatherData: null,
      cities: citiesData, // JSON data
      filteredCities: [], // Filtered city list
    };
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName.toLowerCase()}&appid=${this.apiKey}`
        );
        this.weatherData = response.data;
      } catch (error) {
        alert('Please write name of a city correctly')
        console.error('Error fetching weather data', error);
      }

      this.filteredCities = []
    },
    filterCities() {
      const query = this.cityName ? this.cityName.toLowerCase() : ''; // Ensure cityName is defined
      this.filteredCities = this.cities
        .filter(city => city.city && city.city.toLowerCase().includes(query))
        .map(city => city.city); // Get unique city names
    }


  },
});
</script>

<style>
.autocomplete-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 150px;
  /* Adjust the max height to your preference */
  overflow-y: auto;
  /* Add vertical scrollbar when needed */
}

.autocomplete-list li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background-color: #f0f0f0;
}

.city-search {
  display: flex;
}

/* Style the input and button as needed */
input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>