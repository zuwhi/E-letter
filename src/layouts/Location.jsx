import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Dapatkan koordinat latitude dan longitude
          const { latitude, longitude } = position.coords;
// 215f0d4a83350bbf461bb3638c21bd01
          // Panggil API untuk mendapatkan informasi lokasi berdasarkan koordinat
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=`)
            .then((response) => response.json())
            .then((data) => {
              // Dapatkan nama kota dari data respons
              const cityName = data.name;
              setLocation(cityName);
            })
            .catch((error) => {
              console.error("Error fetching location data:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []); // useEffect akan dijalankan sekali saat komponen dipasang

  return <div>{location ? <p>Your current location: {location}</p> : <p>Loading location...</p>}</div>;
};

export default Location;
