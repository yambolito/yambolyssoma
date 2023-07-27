const data = {
    7: [
      { title: "Accidentes", value: 10 },
      { title: "Incidentes", value: 5 },
      { title: "Condiciones inseguras", value: 8 },
      { title: "Actos inseguros", value: 12 },
      { title: "Capacitaciones", value: 7 },
    ],
    8: [
      { title: "Accidentes", value: 8 },
      { title: "Incidentes", value: 3 },
      { title: "Condiciones inseguras", value: 5 },
      { title: "Actos inseguros", value: 9 },
      { title: "Capacitaciones", value: 6 },
    ],
    9: [
      { title: "Accidentes", value: 12 },
      { title: "Incidentes", value: 6 },
      { title: "Condiciones inseguras", value: 10 },
      { title: "Actos inseguros", value: 15 },
      { title: "Capacitaciones", value: 8 },
    ],
    // Agrega más meses según sea necesario
  };
  
  function createCards(month) {
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = ""; // Limpiar el contenido previo
  
    data[month].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.textContent = item.title;
  
      const value = document.createElement("p");
      value.textContent = item.value;
  
      card.appendChild(title);
      card.appendChild(value);
      cardsContainer.appendChild(card);
    });
  
    // Calcular el porcentaje de capacitación
    const totalCapacitaciones = 22;
    const capacitacionesRealizadas = data[month].find(item => item.title === "Capacitaciones").value;
    const porcentajeCapacitacion = (capacitacionesRealizadas / totalCapacitaciones) * 100;
  
    // Crear tarjeta para el porcentaje de capacitación
    const cardCapacitacion = document.createElement("div");
    cardCapacitacion.classList.add("card");
  
    const titleCapacitacion = document.createElement("h2");
    titleCapacitacion.textContent = "Porcentaje de Capacitación";
  
    const valueCapacitacion = document.createElement("p");
    valueCapacitacion.textContent = `${porcentajeCapacitacion.toFixed(2)}%`;
  
    cardCapacitacion.appendChild(titleCapacitacion);
    cardCapacitacion.appendChild(valueCapacitacion);
    cardsContainer.appendChild(cardCapacitacion);
  }
  
  // Obtener el valor del mes seleccionado
  const selectMonth = document.getElementById("selectMonth");
  selectMonth.addEventListener("change", () => {
    const selectedMonth = parseInt(selectMonth.value);
    createCards(selectedMonth);
  });
  
  // Se llama a la función para crear las tarjetas con el mes inicial (julio)
  window.onload = () => createCards(7);