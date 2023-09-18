document.addEventListener("DOMContentLoaded", () => {
    const getCountryInfoButton = document.getElementById("get-country-info");
    const countryInfoDiv = document.getElementById("country-info");
    const pageContainer = document.querySelector(".page-container");

    getCountryInfoButton.addEventListener("click", () => {
        const countryNameInput = document.getElementById("country-input").value;

        if (countryNameInput) {
            // Aplicar transformación al "page-container" antes de hacer la solicitud
            pageContainer.style.margin = "1rem auto";

            fetch(`https://restcountries.com/v3.1/name/${countryNameInput}?full=true`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        const countryData = data[0];
                        const countryName = countryData.name.common;
                        const countryCapital = countryData.capital[0];
                        const countryPopulation = countryData.population;
                        const countryArea = countryData.area;

                        // Mostrar la información gradualmente
                        document.getElementById("country-name").textContent = countryName;
                        setTimeout(() => {
                            document.getElementById("country-capital").textContent = countryCapital;
                        }, 1000); // Espera 1000ms (1 segundo) antes de mostrar el siguiente dato
                        setTimeout(() => {
                            document.getElementById("country-population").textContent = countryPopulation;
                        }, 3000); // Espera 2000ms (3 segundos) antes de mostrar el siguiente dato
                        setTimeout(() => {
                            document.getElementById("country-area").textContent = countryArea;
                        }, 5000); // Espera 3000ms (5 segundos) antes de mostrar el último dato

                        // Mostrar la información del país con una transición suave
                        countryInfoDiv.classList.remove("hidden");
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
