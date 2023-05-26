async function get_weather(city) {
  let weather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d07e568ac6b24d47988152237232305&q=${city}`,
    { mode: "cors" }
  );
  let weather_info = await weather.json();
  print_weather_info(weather_info);
}

let icon_img = document.querySelector(".current-weather-icon-img");
icon_img.src = "https://";

function print_weather_info(weather_info) {
  let current_country = document.querySelector(".current-country");
  current_country.textContent = weather_info["location"]["country"];

  let current_city = document.querySelector(".current-city");
  current_city.textContent = weather_info["location"]["name"];

  let current_temp = document.querySelector(".current-temp");
  current_temp.textContent = weather_info["current"]["temp_c"];

  let current_condition = document.querySelector(".current-condition");
  current_condition.textContent = weather_info["current"]["condition"]["text"];

  let local_time = document.querySelector(".local-time");
  local_time.textContent = weather_info["location"]["localtime"];

  let temp_feel = document.querySelector(".temp-feel");
  temp_feel.textContent = weather_info["current"]["feelslike_c"];

  let wind_speed = document.querySelector(".wind-speed");
  wind_speed.textContent = weather_info["current"]["wind_kph"];

  let humidity = document.querySelector(".humidity");
  humidity.textContent = weather_info["current"]["humidity"];

  let current_weather_icon = document.querySelector(".current-weather-icon");

  icon_img.src = "https://" + get_weather_icon(weather_info);
}

function get_weather_icon(weather_info) {
  let icon_link = weather_info["current"]["condition"]["icon"].replace(
    /^\/+/g,
    ""
  );
  return icon_link;
}

get_weather("tehran");
