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
    const url = `https://api.weatherapi.com/v1/current.json?key=3c98d7a7c7da446290a185204251006&q=${city}&aqi=no`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("City not found or network issue");
        }
        return res.json();
      })
      .then(data => {
        console.log(data); // debug

        document.getElementById("temperature").textContent = data.current.temp_c + "°C";
        document.getElementById("cityName").textContent = data.location.name;
        document.getElementById("localTime").textContent = data.location.localtime;

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