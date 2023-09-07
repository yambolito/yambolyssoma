<?php
$servername = "https://www.yamboly.com/ssoma_html/yamboly.html"; // Cambia esto al servidor de tu base de datos
$username = "_User_SSOMA_Y";
$password = "_Yamboly2023";
$dbname = "_SSOMA_Y";

// Crea una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

// Procesa los datos del formulario
$name = $_POST['name']; // Asegúrate de que los nombres coincidan con los campos del formulario
$age = $_POST['age'];
// ... continúa con otros campos del formulario

// Inserta los datos en la base de datos
$sql = "INSERT INTO nombre_de_la_tabla (nombre, edad, ...) VALUES ('$name', $age, ...)";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>