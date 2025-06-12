
window.onload = function () {
  document.getElementById("weatherForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const apiKey = "e5a66344f0389a167c7315c72ffdfc24";  // ← Replace with your own
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();

      // Temperature
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
      
      // City Name
      document.getElementById("cityName").textContent = data.name;

      // Local Time using timezone offset
      const timezoneOffset = data.timezone;
      const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
      const localTime = new Date(utc + timezoneOffset * 1000);
      document.getElementById("localTime").textContent = localTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });

      // Weather Icon & Condition
      const iconCode = data.weather[0].icon;
      document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      document.getElementById("weatherCondition").textContent = data.weather[0].main;

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  });
};






// // // http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=jabalpur&aqi=no


// window.onload = function () {
//   const form = document.getElementById("weatherForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // prevent page reload

//     const city = document.getElementById("cityInput").value.trim();
//     if (!city) {
//       alert("Please enter a city name.");
//       return;
//     }
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=72bbf277f9b1e72aaeae64b2e3efbc7f&units=metric"; //${city}

//     fetch(url)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error("City not found or network issue");
//         }
//         return res.json();
//       })
//       .then(data => {
//         console.log(data); // debug

//         document.getElementById("temperature").textContent = data.main.temp + "°C";
//         document.getElementById("cityName").textContent = data.name;
//         const timezoneOffset = data.timezone; // in seconds

//         // Calculate local time
//         const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000; // UTC in ms
//         const localTime = new Date(utcTime + timezoneOffset * 1000); // Adjust with API offset

//         // Format time
//         const formattedTime = localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


//         document.getElementById("localTime").textContent = formattedTime;

//         const weatherIcon = document.getElementById("weatherIcon");

//         weatherIcon.src = "https:" + data.current.condition.icon;

//         // document.getElementById("weatherIcon").textContent = "https:" + data.current.condition.icon
//         document.getElementById("weatherCondition").textContent = data.current.condition.text;
//       })
//       .catch(error => {
//         console.error("Error fetching weather:", error);
//         alert("City not found or something went wrong.");
//       });
//   });
// };




// // const form= document.getElementsByClassName("search_area");
// //  form.addEventListener("submit", async function (e) {

// //     e.preventDefault();

// //     const city = document.getElementById("cityInput").value;
// //     const url = `http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=${city}&aqi=no`;
// //     const res= await fetch(url);
// //     res.then (res.JSON())
// //     .then(data=>{
// //         document.getElementByclass("temp").textContent=data.current.temp_c + "°C"
// //         document.getElementByclass("time").textContent=data.location.localtime
// //         document.getElementByclass("cityName").textContent=data.location.name
// //         document.getElementByclass("condition").textContent=data.current.condition.text

// //         .catch(() => {
// //         alert("City not found or something went wrong.");
// //         });
// //     })

    
// //  })

// // window.onload = function () {
// //   const form = document.getElementById("weatherForm");

// //   form.addEventListener("submit", function (e) {
// //     e.preventDefault();

// //     const city = document.getElementById("cityInput").value;
// //     const url = `http://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=${city}&aqi=no`;

// //     fetch(url)
// //       .then(res => res.json())
// //       .then(data => {
// //         document.getElementByClass("temp").textContent = data.current.temp_c + "°C";
// //         document.getElementByClass("cityName").textContent = data.location.name;
// //         document.getElementByClass("time").textContent = data.location.localtime;
// //         document.getElementByClass("condition").textContent = data.current.condition.text;
// //       })
// //       .catch(() => {
// //         alert("City not found or something went wrong.");
// //       });
// //   });
// // };