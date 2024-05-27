const airpod = document.querySelector("#airpods");
const statusBar = document.querySelector("#status-bar");




statusBar.addEventListener("click", 
    function () {
      airpod.classList.toggle("hidden");
    }
)

airpod.addEventListener("click", 
    function() {
        airpod.classList.remove("hidden")
    }
)


// function showAirPodsInfo() {
//     const airpodsInfo = document.getElementById('airpods-info');
//     airpodsInfo.classList.toggle('hidden');
// }
