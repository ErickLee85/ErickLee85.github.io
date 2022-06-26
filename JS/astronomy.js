async function getUserCity() {
    const userCity = document.getElementById("cityGET").value;

    if (!userCity) {
    alert("Please enter a valid city.");
    return;
    }

    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '1aed881129msh0e4e702933d3b57p1d0a71jsnaba2c0d6b2f8',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
    };

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${userCity}`, options);

    if(!response.ok) {
        alert("Something went wrong, please try again...");
    }
    else {
        const data = await response.json();
    

        document.getElementById("sunrise").innerHTML = (data["astronomy"]["astro"]["sunrise"]);
        document.getElementById("sunset").innerHTML = (data["astronomy"]["astro"]["sunset"]);
        document.getElementById("moonrise").innerHTML = (data["astronomy"]["astro"]["moonrise"]);
        document.getElementById("moonset").innerHTML = (data["astronomy"]["astro"]["moonset"]);
        document.getElementById("moonphase").innerHTML = (data["astronomy"]["astro"]["moon_phase"]);
        document.getElementById("moonillumination").innerHTML = `${data["astronomy"]["astro"]["moon_illumination"]} %`;
        document.getElementById("country").innerHTML = (data["location"]["country"]);
        document.getElementById("lat").innerHTML = (data["location"]["lat"]);
        document.getElementById("long").innerHTML = (data["location"]["lon"]);
        document.getElementById("name").innerHTML = (data["location"]["name"]);
        document.getElementById("region").innerHTML = (data["location"]["region"]);
        document.getElementById("localtime").innerHTML = (data["location"]["localtime"]);     
    }
   
    }