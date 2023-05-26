async function get_weather() {
  let weather = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=d07e568ac6b24d47988152237232305&q=london",
    { mode: "cors" }
  );
  let weather_info = weather.json();
  return weather_info;
}

console.log(get_weather());
