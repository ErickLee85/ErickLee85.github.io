async function getWeather() {
    const userZip = document.getElementById("userZipCode").value;

    if (!userZip) {
        alert("Please enter a zip code.");
        return;
    }
        const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '1aed881129msh0e4e702933d3b57p1d0a71jsnaba2c0d6b2f8',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        };

        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${userZip}&days=1`, options);
        const data = await response.json();
        // console.log(data);
        document.getElementById("city").innerText = "Weather in " + (data["location"]["name"]) + ", " + (data["location"]["region"]);
        document.getElementById("apiIMG").innerHTML = `<img src="${data.current.condition.icon}"/>`;
        document.getElementById("temp").innerText = "Current Temp: " + (data["current"]["temp_f"]) + "°"
        document.getElementById("feels-like").innerText = "Feels like: " + (data["current"]["feelslike_f"]) + "°";
        document.getElementById("description").innerText = (data["current"]["condition"]["text"]);
        document.getElementById("humidity").innerText = "Humidity: " + (data["current"]["humidity"]) + "%";
        document.getElementById("visibility").innerText = "Visibility: " + (data["current"]["vis_miles"]) + " miles";
        document.getElementById("wind").innerText = "Wind Speed: " + (data["current"]["wind_mph"]) + " mph";
        document.getElementById("direction").innerText = "Wind Direction: " + (data["current"]["wind_dir"]);
        document.getElementById("gusts").innerText = "Wind Gusts: " + (data["current"]["gust_mph"]) + " mph";
        document.getElementById("precipitation").innerText = "Rain fall: " + (data["current"]["precip_in"]) + " in";            
}