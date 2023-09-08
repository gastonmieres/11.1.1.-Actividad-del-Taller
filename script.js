document.addEventListener("DOMContentLoaded", () => {
    const getCountryInfoButton = document.getElementById("get-country-info");

    getCountryInfoButton.addEventListener("click", () => {
        const countryNameInput = document.getElementById("country-input").value;

        if (countryNameInput) {
            fetch(`https://restcountries.com/v3.1/name/${countryNameInput}?full=true`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        const countryData = data[0];
                        const countryName = countryData.name.common;
                        const countryCapital = countryData.capital[0];
                        const countryPopulation = countryData.population;
                        const countryArea = countryData.area;

                        document.getElementById("country-name").textContent = countryName;
                        document.getElementById("country-capital").textContent = countryCapital;
                        document.getElementById("country-population").textContent = countryPopulation;
                        document.getElementById("country-area").textContent = countryArea;
                    } else {
                        alert("No se encontraron datos para ese país.");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener datos:", error);
                });
        } else {
            alert("Por favor, ingresa un nombre de país válido.");
        }
    });
});
