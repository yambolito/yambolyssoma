document.addEventListener("DOMContentLoaded", function () {
    // Datos de personas desde el archivo JSON (Agregamos más personas para el ejemplo)
    const personas = [
      {
        "nombre": "Henry William Ramirez Vasquez",
        "fechaNacimiento": "1990-08-03",
        "foto": "carpeta1/henry.jpg",
        "mensaje": "¡Feliz cumpleaños Henry William! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Maria Isabel Huaman Machado",
        "fechaNacimiento": "1995-08-03",
        "foto": "carpeta1/maria.jpg",
        "mensaje": "¡Feliz cumpleaños Maria Isabel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Oscar Daniel Carpio Rodriguez",
        "fechaNacimiento": "1987-08-06",
        "foto": "carpeta1/oscar.jpg",
        "mensaje": "¡Feliz cumpleaños Oscar Daniel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Wilmer Quiroz Yahuarcani",
        "fechaNacimiento": "1992-08-06",
        "foto": "carpeta1/wilmer.jpg",
        "mensaje": "¡Feliz cumpleaños Wilmer! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Elar Zurita Ojeda",
        "fechaNacimiento": "1985-08-11",
        "foto": "carpeta1/elar.jpg",
        "mensaje": "¡Feliz cumpleaños Elar! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Alex Joel Villegas Vera",
        "fechaNacimiento": "1993-08-12",
        "foto": "carpeta1/alex.jpg",
        "mensaje": "¡Feliz cumpleaños Alex Joel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Aquiles Lopez Rodriguez",
        "fechaNacimiento": "1988-08-12",
        "foto": "carpeta1/aquiles.jpg",
        "mensaje": "¡Feliz cumpleaños Aquiles! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Zaiduby Carolina Alastre Sanchez",
        "fechaNacimiento": "1990-08-13",
        "foto": "carpeta1/zaiduby.jpg",
        "mensaje": "¡Feliz cumpleaños Zaiduby Carolina! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Andrea Cecilia Carrion Hinostroza",
        "fechaNacimiento": "1991-08-14",
        "foto": "carpeta1/andrea.jpg",
        "mensaje": "¡Feliz cumpleaños Andrea Cecilia! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Doris Raquel Sanchez Lopez",
        "fechaNacimiento": "1986-08-14",
        "foto": "carpeta1/doris.jpg",
        "mensaje": "¡Feliz cumpleaños Doris Raquel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Cristian Isuiza Sinarahua",
        "fechaNacimiento": "1994-08-14",
        "foto": "carpeta1/cristian.jpg",
        "mensaje": "¡Feliz cumpleaños Cristian! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Jose Lelis Galindo Abellaneda",
        "fechaNacimiento": "1989-08-14",
        "foto": "carpeta1/jose.jpg",
        "mensaje": "¡Feliz cumpleaños Jose Lelis! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Juan Gabriel Zapata Pulache",
        "fechaNacimiento": "1996-08-15",
        "foto": "carpeta1/juan.jpg",
        "mensaje": "¡Feliz cumpleaños Juan Gabriel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Luis Oswaldo Ferre Libaque",
        "fechaNacimiento": "1992-08-17",
        "foto": "carpeta1/luis.jpg",
        "mensaje": "¡Feliz cumpleaños Luis Oswaldo! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Jean Pierre Enrique Escajadillo Ayasta",
        "fechaNacimiento": "1993-08-17",
        "foto": "carpeta1/jean.jpg",
        "mensaje": "¡Feliz cumpleaños Jean Pierre Enrique! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Jorge Dacio Maldonado Palomino",
        "fechaNacimiento": "1990-08-20",
        "foto": "carpeta1/jorge.jpg",
        "mensaje": "¡Feliz cumpleaños Jorge Dacio! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Rosa Cardenas Pomataylla",
        "fechaNacimiento": "1995-08-21",
        "foto": "carpeta1/rosa.jpg",
        "mensaje": "¡Feliz cumpleaños Rosa! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Jimmy Abel Leon Chauca",
        "fechaNacimiento": "1991-08-23",
        "foto": "carpeta1/jimmy.jpg",
        "mensaje": "¡Feliz cumpleaños Jimmy Abel! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Nelson Linares Perez",
        "fechaNacimiento": "1994-08-23",
        "foto": "carpeta1/nelson.jpg",
        "mensaje": "¡Feliz cumpleaños Nelson! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Rosario Valverde Arirama",
        "fechaNacimiento": "1986-08-23",
        "foto": "carpeta1/rosario.jpg",
        "mensaje": "¡Feliz cumpleaños Rosario! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Ruth Lucero Chimoven Sanchez",
        "fechaNacimiento": "1993-08-24",
        "foto": "carpeta1/ruth.jpg",
        "mensaje": "¡Feliz cumpleaños Ruth Lucero! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Fernando Alex Torres Reynoso",
        "fechaNacimiento": "1990-08-24",
        "foto": "carpeta1/fernando.jpg",
        "mensaje": "¡Feliz cumpleaños Fernando Alex! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Pablo Prudencio Manrique Campos",
        "fechaNacimiento": "1992-08-24",
        "foto": "carpeta1/pablo.jpg",
        "mensaje": "¡Feliz cumpleaños Pablo Prudencio! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Frank Lee Durand Prado",
        "fechaNacimiento": "1989-08-25",
        "foto": "carpeta1/frank.jpg",
        "mensaje": "¡Feliz cumpleaños Frank Lee! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Carol Magali Pintado Huamani",
        "fechaNacimiento": "1994-08-26",
        "foto": "carpeta1/carol.jpg",
        "mensaje": "¡Feliz cumpleaños Carol Magali! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Dora Alejandrina Rodriguez Carbajal",
        "fechaNacimiento": "1985-08-26",
        "foto": "carpeta1/dora.jpg",
        "mensaje": "¡Feliz cumpleaños Dora Alejandrina! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Alex Sacha Ramos",
        "fechaNacimiento": "1991-08-28",
        "foto": "carpeta1/alex_sacha.jpg",
        "mensaje": "¡Feliz cumpleaños Alex Sacha! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Juan Jose Romero Viru",
        "fechaNacimiento": "1993-08-29",
        "foto": "carpeta1/juan_jose.jpg",
        "mensaje": "¡Feliz cumpleaños Juan Jose! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Luis Alberto Sanchez Huaman",
        "fechaNacimiento": "1988-08-29",
        "foto": "carpeta1/luis_alberto.jpg",
        "mensaje": "¡Feliz cumpleaños Luis Alberto! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Odilo Darwin Fernandez Del Castillo",
        "fechaNacimiento": "1990-08-29",
        "foto": "carpeta1/odilo.jpg",
        "mensaje": "¡Feliz cumpleaños Odilo Darwin! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Cesar Augusto Estrada Salcedo",
        "fechaNacimiento": "1987-08-29",
        "foto": "carpeta1/cesar.jpg",
        "mensaje": "¡Feliz cumpleaños Cesar Augusto! Que este día esté lleno de alegría y bendiciones para ti."
      },
      {
        "nombre": "Fredy Ojanama Vilchez",
        "fechaNacimiento": "1996-08-29",
        "foto": "carpeta1/fredy.jpg",
        "mensaje": "¡Feliz cumpleaños Fredy! Que este día esté lleno de alegría y bendiciones para ti."
      }
    ]
  
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