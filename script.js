// // http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=jabalpur&aqi=no


window.onload = function () {
  const form = document.getElementById("weatherForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=08f6083b3b9cfb4f6e387ab717b3e78a&units=metric"; //${city}

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("City not found or network issue");
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // debug

        document.getElementById("temperature").textContent = data.main.temp + "°C";
        document.getElementById("cityName").textContent = data.name;
        const timezoneOffset = data.timezone; // in seconds

        // Calculate local time
        const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000; // UTC in ms
        const localTime = new Date(utcTime + timezoneOffset * 1000); // Adjust with API offset

        // Format time
        const formattedTime = localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


        document.getElementById("localTime").textContent = formattedTime;

        const weatherIcon = document.getElementById("weatherIcon");

        weatherIcon.src = "https:" + data.current.condition.icon;

        // document.getElementById("weatherIcon").textContent = "https:" + data.current.condition.icon
        document.getElementById("weatherCondition").textContent = data.current.condition.text;
      })
      .catch(error => {
        console.error("Error fetching weather:", error);
        alert("City not found or something went wrong.");
      });
  });
};




// const form= document.getElementsByClassName("search_area");
//  form.addEventListener("submit", async function (e) {

//     e.preventDefault();

//     const city = document.getElementById("cityInput").value;
//     const url = `http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=${city}&aqi=no`;
//     const res= await fetch(url);
//     res.then (res.JSON())
//     .then(data=>{
//         document.getElementByclass("temp").textContent=data.current.temp_c + "°C"
//         document.getElementByclass("time").textContent=data.location.localtime
//         document.getElementByclass("cityName").textContent=data.location.name
//         document.getElementByclass("condition").textContent=data.current.condition.text

//         .catch(() => {
//         alert("City not found or something went wrong.");
//         });
//     })

    
//  })

// window.onload = function () {
//   const form = document.getElementById("weatherForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const city = document.getElementById("cityInput").value;
//     const url = `http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=${city}&aqi=no`;

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         document.getElementByClass("temp").textContent = data.current.temp_c + "°C";
//         document.getElementByClass("cityName").textContent = data.location.name;
//         document.getElementByClass("time").textContent = data.location.localtime;
//         document.getElementByClass("condition").textContent = data.current.condition.text;
//       })
//       .catch(() => {
//         alert("City not found or something went wrong.");
//       });
//   });
// };