document.addEventListener("DOMContentLoaded", function () {
    const requestForm = document.getElementById("requestForm");
    const requestText = document.getElementById("requestText");
    const submitButton = document.getElementById("submitRequest");
    const requestList = document.getElementById("requestList");

    submitButton.addEventListener("click", function () {
        const request = requestText.value;
        if (request.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = request;
            requestList.appendChild(li);
            requestText.value = "";

            // Guardar en el almacenamiento local
            const requests = JSON.parse(localStorage.getItem("requests")) || [];
            requests.push(request);
            localStorage.setItem("requests", JSON.stringify(requests));
        }
    });

    // Cargar peticiones guardadas en la otra página
    if (requestList) {
        const requests = JSON.parse(localStorage.getItem("requests")) || [];
        requests.forEach(function (request) {
            const li = document.createElement("li");
            li.textContent = request;
            requestList.appendChild(li);
        });
    }
});