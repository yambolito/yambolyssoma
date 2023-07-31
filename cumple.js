document.addEventListener("DOMContentLoaded", function () {
    // Datos de personas desde el archivo JSON (Agregamos más personas para el ejemplo)
    const personas = [
      // ...datos anteriores...
      {
        "nombre": "Ana Martinez",
        "fechaNacimiento": "1990-07-27",
        "foto": "carpeta1/ana.jpg",
        "mensaje": "¡Feliz cumpleaños Ana! Que este día esté lleno de alegría y bendiciones para ti.",
      },
      {
        "nombre": "Pedro Gómez",
        "fechaNacimiento": "1990-07-27",
        "foto": "carpeta1/pedro.jpg",
        "mensaje": "¡Feliz cumpleaños Pedro! Que todos tus sueños se hagan realidad en este nuevo año de vida.",
      },
    ];
  
    // Función para obtener la fecha actual en formato "MM-DD"
    function getCurrentDate() {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${month}-${day}`;
    }
  
    // Función para obtener las personas que cumplen años hoy
    function getBirthdayPeople() {
      const currentDate = getCurrentDate();
      return personas.filter(person => {
        const birthday = person.fechaNacimiento.slice(5);
        return birthday === currentDate;
      });
    }
  
    // Función para mostrar las tarjetas de cumpleaños
    function showBirthdayCards() {
      const birthdayCardsContainer = document.getElementById('birthdayCards');
      const birthdayPeople = getBirthdayPeople();
  
      if (birthdayPeople.length > 0) {
        birthdayPeople.forEach(birthdayPerson => {
          const birthdayCard = createBirthdayCard(birthdayPerson);
          birthdayCardsContainer.appendChild(birthdayCard);
        });
      } else {
        const noBirthdayCard = createNoBirthdayCard();
        birthdayCardsContainer.appendChild(noBirthdayCard);
      }
    }
  
    // Función para crear la tarjeta de cumpleaños para una persona
    function createBirthdayCard(person) {
      const birthdayCard = document.createElement('div');
      birthdayCard.classList.add('birthdayCard');
  
      const imgElement = document.createElement('img');
      imgElement.src = person.foto;
      imgElement.alt = `Foto de ${person.nombre}`;
      birthdayCard.appendChild(imgElement);
  
      const nameElement = document.createElement('h2');
      nameElement.textContent = person.nombre;
      birthdayCard.appendChild(nameElement);
  
      const messageElement = document.createElement('p');
      messageElement.textContent = person.mensaje;
      birthdayCard.appendChild(messageElement);
  
      return birthdayCard;
    }
  
    // Función para crear la tarjeta cuando no hay cumpleaños hoy
    function createNoBirthdayCard() {
      const birthdayCard = document.createElement('div');
      birthdayCard.classList.add('birthdayCard');
  
      const noBirthdayMessage = document.createElement('p');
      noBirthdayMessage.textContent = 'Hoy no es el cumpleaños de ninguna persona.';
      birthdayCard.appendChild(noBirthdayMessage);
  
      return birthdayCard;
    }
  
    showBirthdayCards();
  });