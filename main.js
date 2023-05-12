document.addEventListener("DOMContentLoaded", () => {
    let celsiusHere = document.querySelector("#celsius");
    let fahrenheitHere = document.querySelector("#fahrenheit");
    
    celsiusHere.addEventListener("input", (e) => {
        let celsiusStore = (parseFloat(e.target.value) * 9) / 5 + 32 || 0;

        fahrenheitHere.value = celsiusStore; 
    })

    fahrenheitHere.addEventListener("input", (e) => {
        let fahrenheitStore = (parseFloat(e.target.value) - 32) * (5/9) || 0;

        celsiusHere.value = fahrenheitStore;
    })
})