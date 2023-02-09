const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8f5c29a5e5msh38a3659b868e6dap1e7104jsna94c08da997e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp + "&#8451";
      // feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity + "&#37";
      min_temp.innerHTML = response.min_temp + "&#8451";
      max_temp.innerHTML = response.max_temp + "&#8451";
      wind_speed.innerHTML = response.wind_speed + " m/s";

      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
      let angle_delhi = response.wind_degrees;
      // console.log(angle_delhi)
      function getCardinalDirection(angle_delhi) {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        if ((angle_delhi < 22.5 && angle_delhi > 0) || (angle_delhi >= 337.5 && angle_delhi < 360)) {
          return directions[0];
        } else if (angle_delhi < 67.5 && angle_delhi >= 22.5) {
          return directions[1];
        } else if (angle_delhi < 112.5 && angle_delhi >= 67.5) {
          return directions[2];
        } else if (angle_delhi < 157.5 && angle_delhi >= 122.5) {
          return directions[3];
        } else if (angle_delhi < 202.5 && angle_delhi >= 157.5) {
          return directions[4];
        } else if (angle_delhi < 247.5 && angle_delhi >= 202.5) {
          return directions[5];
        } else if (angle_delhi < 292.5 && angle_delhi >= 247.5) {
          return directions[6];
        } else if (angle_delhi < 337.5 && angle_delhi >= 292.5) {
          return directions[7];
        } else if ((angle_delhi = 0) || (angle_delhi = 360)) {
          return "CALM WIND";
        }
      }
      wind_degrees.innerHTML =
        response.wind_degrees + " " + getCardinalDirection(angle_delhi);
    })  
      .catch((err) => console.error(err));
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
submit.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(city.value);
  }
});
getWeather("Surat");

let today = new Date().getHours();
if (today >= 6 && today <= 18) {
  document.getElementById("moon").style.visibility = "hidden";
} else {
  document.getElementById("sun").style.visibility = "hidden";
  document.getElementById("navbar").classList.add("bg-dark");
  document.getElementById("navbar").setAttribute("data-bs-theme", "dark");
  document.body.style.backgroundColor = "#D3D3D3";
  document.body.style.color = "Black";

}





const getWeatherForCommonPlaces = (Surat) => {
  // SuratName.innerHTML = Surat;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat', options)
	.then(response => response.json())
	.then(response => {
    cloud_surat.innerHTML = response.cloud_pct + "&#37";
    feels_surat.innerHTML = response.feels_like + "&#8451";
    humidity_surat.innerHTML = response.humidity + "&#37";
    maxtemp_surat.innerHTML = response.max_temp + "&#8451";
    mintemp_surat.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_surat.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_surat.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_surat.innerHTML = response.temp + "&#8451";
    let angle_delhi = response.wind_degrees;
      // console.log(angle_delhi)
      function getCardinalDirection(angle_delhi) {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        if ((angle_delhi < 22.5 && angle_delhi > 0) || (angle_delhi >= 337.5 && angle_delhi < 360)) {
          return directions[0];
        } else if (angle_delhi < 67.5 && angle_delhi >= 22.5) {
          return directions[1];
        } else if (angle_delhi < 112.5 && angle_delhi >= 67.5) {
          return directions[2];
        } else if (angle_delhi < 157.5 && angle_delhi >= 122.5) {
          return directions[3];
        } else if (angle_delhi < 202.5 && angle_delhi >= 157.5) {
          return directions[4];
        } else if (angle_delhi < 247.5 && angle_delhi >= 202.5) {
          return directions[5];
        } else if (angle_delhi < 292.5 && angle_delhi >= 247.5) {
          return directions[6];
        } else if (angle_delhi < 337.5 && angle_delhi >= 292.5) {
          return directions[7];
        } else if ((angle_delhi = 0) || (angle_delhi = 360)) {
          return "CALM WIND";
        }
      }
      wind_degrees_surat.innerHTML =
        response.wind_degrees + " " + getCardinalDirection(angle_delhi);
        wind_speed_surat.innerHTML = response.wind_speed + " m/s";
    })
    // console.log(response)
  
  
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
    cloud_delhi.innerHTML = response.cloud_pct + "&#37";
    feels_delhi.innerHTML = response.feels_like + "&#8451";
    humidity_delhi.innerHTML = response.humidity + "&#37";
    maxtemp_delhi.innerHTML = response.max_temp + "&#8451";
    mintemp_delhi.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_delhi.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_delhi.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_delhi.innerHTML = response.temp + "&#8451";
    let angle_delhi = response.wind_degrees;
    // console.log(angle_delhi)
    function getCardinalDirection(angle_delhi) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      if ((angle_delhi < 22.5 && angle_delhi > 0) || (angle_delhi >= 337.5 && angle_delhi < 360)) {
        return directions[0];
      } else if (angle_delhi < 67.5 && angle_delhi >= 22.5) {
        return directions[1];
      } else if (angle_delhi < 112.5 && angle_delhi >= 67.5) {
        return directions[2];
      } else if (angle_delhi < 157.5 && angle_delhi >= 122.5) {
        return directions[3];
      } else if (angle_delhi < 202.5 && angle_delhi >= 157.5) {
        return directions[4];
      } else if (angle_delhi < 247.5 && angle_delhi >= 202.5) {
        return directions[5];
      } else if (angle_delhi < 292.5 && angle_delhi >= 247.5) {
        return directions[6];
      } else if (angle_delhi < 337.5 && angle_delhi >= 292.5) {
        return directions[7];
      } else if ((angle_delhi = 0) || (angle_delhi = 360)) {
        return "CALM WIND";
      }
    }
    wind_degrees_delhi.innerHTML =
    response.wind_degrees + " " + getCardinalDirection(angle_delhi);
    // console.log(response)
    wind_speed_delhi.innerHTML = response.wind_speed + " m/s";
  })


  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
    cloud_mumbai.innerHTML = response.cloud_pct + "&#37";
    feels_mumbai.innerHTML = response.feels_like + "&#8451";
    humidity_mumbai.innerHTML = response.humidity + "&#37";
    maxtemp_mumbai.innerHTML = response.max_temp + "&#8451";
    mintemp_mumbai.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_mumbai.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_mumbai.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_mumbai.innerHTML = response.temp + "&#8451";
    let angle_mumbai = response.wind_degrees;
    // console.log(angle_mumbai)
    function getCardinalDirection(angle_mumbai) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      if ((angle_mumbai < 22.5 && angle_mumbai > 0) || (angle_mumbai >= 337.5 && angle_mumbai < 360)) {
        return directions[0];
      } else if (angle_mumbai < 67.5 && angle_mumbai >= 22.5) {
        return directions[1];
      } else if (angle_mumbai < 112.5 && angle_mumbai >= 67.5) {
        return directions[2];
      } else if (angle_mumbai < 157.5 && angle_mumbai >= 122.5) {
        return directions[3];
      } else if (angle_mumbai < 202.5 && angle_mumbai >= 157.5) {
        return directions[4];
      } else if (angle_mumbai < 247.5 && angle_mumbai >= 202.5) {
        return directions[5];
      } else if (angle_mumbai < 292.5 && angle_mumbai >= 247.5) {
        return directions[6];
      } else if (angle_mumbai < 337.5 && angle_mumbai >= 292.5) {
        return directions[7];
      } else if ((angle_mumbai = 0) || (angle_mumbai = 360)) {
        return "CALM WIND";
      }
    }
    wind_degrees_mumbai.innerHTML =
    response.wind_degrees + " " + getCardinalDirection(angle_mumbai);
    // console.log(response)
    wind_speed_mumbai.innerHTML = response.wind_speed + " m/s";
  })

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
    cloud_bangalore.innerHTML = response.cloud_pct + "&#37";
    feels_bangalore.innerHTML = response.feels_like + "&#8451";
    humidity_bangalore.innerHTML = response.humidity + "&#37";
    maxtemp_bangalore.innerHTML = response.max_temp + "&#8451";
    mintemp_bangalore.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_bangalore.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_bangalore.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_bangalore.innerHTML = response.temp + "&#8451";
    let angle_bangalore = response.wind_degrees;
    // console.log(angle_bangalore)
    function getCardinalDirection(angle_bangalore) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      if ((angle_bangalore < 22.5 && angle_bangalore > 0) || (angle_bangalore >= 337.5 && angle_bangalore < 360)) {
        return directions[0];
      } else if (angle_bangalore < 67.5 && angle_bangalore >= 22.5) {
        return directions[1];
      } else if (angle_bangalore < 112.5 && angle_bangalore >= 67.5) {
        return directions[2];
      } else if (angle_bangalore < 157.5 && angle_bangalore >= 122.5) {
        return directions[3];
      } else if (angle_bangalore < 202.5 && angle_bangalore >= 157.5) {
        return directions[4];
      } else if (angle_bangalore < 247.5 && angle_bangalore >= 202.5) {
        return directions[5];
      } else if (angle_bangalore < 292.5 && angle_bangalore >= 247.5) {
        return directions[6];
      } else if (angle_bangalore < 337.5 && angle_bangalore >= 292.5) {
        return directions[7];
      } else if ((angle_bangalore = 0) || (angle_bangalore = 360)) {
        return "CALM WIND";
      }
    }
    wind_degrees_bangalore.innerHTML =
    response.wind_degrees + " " + getCardinalDirection(angle_bangalore);
    // console.log(response)
    wind_speed_bangalore.innerHTML = response.wind_speed + " m/s";
  })

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
	.then(response => response.json())
	.then(response => {
    cloud_goa.innerHTML = response.cloud_pct + "&#37";
    feels_goa.innerHTML = response.feels_like + "&#8451";
    humidity_goa.innerHTML = response.humidity + "&#37";
    maxtemp_goa.innerHTML = response.max_temp + "&#8451";
    mintemp_goa.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_goa.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_goa.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_goa.innerHTML = response.temp + "&#8451";
    let angle_goa = response.wind_degrees;
    // console.log(angle_goa)
    function getCardinalDirection(angle_goa) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      if ((angle_goa < 22.5 && angle_goa > 0) || (angle_goa >= 337.5 && angle_goa < 360)) {
        return directions[0];
      } else if (angle_goa < 67.5 && angle_goa >= 22.5) {
        return directions[1];
      } else if (angle_goa < 112.5 && angle_goa >= 67.5) {
        return directions[2];
      } else if (angle_goa < 157.5 && angle_goa >= 122.5) {
        return directions[3];
      } else if (angle_goa < 202.5 && angle_goa >= 157.5) {
        return directions[4];
      } else if (angle_goa < 247.5 && angle_goa >= 202.5) {
        return directions[5];
      } else if (angle_goa < 292.5 && angle_goa >= 247.5) {
        return directions[6];
      } else if (angle_goa < 337.5 && angle_goa >= 292.5) {
        return directions[7];
      } else if ((angle_goa = 0) || (angle_goa = 360)) {
        return "CALM WIND";
      }
    }
    wind_degrees_goa.innerHTML =
    response.wind_degrees + " " + getCardinalDirection(angle_goa);
    // console.log(response)
    wind_speed_goa.innerHTML = response.wind_speed + " m/s";
  })

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad', options)
	.then(response => response.json())
	.then(response => {
    cloud_ahmedabad.innerHTML = response.cloud_pct + "&#37";
    feels_ahmedabad.innerHTML = response.feels_like + "&#8451";
    humidity_ahmedabad.innerHTML = response.humidity + "&#37";
    maxtemp_ahmedabad.innerHTML = response.max_temp + "&#8451";
    mintemp_ahmedabad.innerHTML = response.min_temp + "&#8451";
    let a  = new Date(response.sunrise*1000);
    sunrise_ahmedabad.innerHTML = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear() + " " + a.getHours() + " : " + a.getMinutes() + " :" + a.getSeconds()
    let b  = new Date(response.sunset*1000);
    sunset_ahmedabad.innerHTML = b.getDate() + "/" + (b.getMonth() + 1) + "/" + b.getFullYear() + " " + b.getHours() + " : " + b.getMinutes() + " :" + b.getSeconds()
    temp_ahmedabad.innerHTML = response.temp + "&#8451";
    let angle_ahmedabad = response.wind_degrees;
    // console.log(angle_ahmedabad)
    function getCardinalDirection(angle_ahmedabad) {
      const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      if ((angle_ahmedabad < 22.5 && angle_ahmedabad > 0) || (angle_ahmedabad >= 337.5 && angle_ahmedabad < 360)) {
        return directions[0];
      } else if (angle_ahmedabad < 67.5 && angle_ahmedabad >= 22.5) {
        return directions[1];
      } else if (angle_ahmedabad < 112.5 && angle_ahmedabad >= 67.5) {
        return directions[2];
      } else if (angle_ahmedabad < 157.5 && angle_ahmedabad >= 122.5) {
        return directions[3];
      } else if (angle_ahmedabad < 202.5 && angle_ahmedabad >= 157.5) {
        return directions[4];
      } else if (angle_ahmedabad < 247.5 && angle_ahmedabad >= 202.5) {
        return directions[5];
      } else if (angle_ahmedabad < 292.5 && angle_ahmedabad >= 247.5) {
        return directions[6];
      } else if (angle_ahmedabad < 337.5 && angle_ahmedabad >= 292.5) {
        return directions[7];
      } else if ((angle_ahmedabad = 0) || (angle_ahmedabad = 360)) {
        return "CALM WIND";
      }
    }
    wind_degrees_ahmedabad.innerHTML =
    response.wind_degrees + " " + getCardinalDirection(angle_ahmedabad);
    // console.log(response)
    wind_speed_ahmedabad.innerHTML = response.wind_speed + " m/s";
  })
	.catch(err => console.error(err));
}
getWeatherForCommonPlaces("Surat")