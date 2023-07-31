<?php
// Definimos la respuesta del servidor en formato JSON
header('Content-Type: application/json');

// Simulamos una base de datos con información de usuarios
$users = array(
    array('id' => 1, 'name' => 'Juan', 'age' => 30),
    array('id' => 2, 'name' => 'María', 'age' => 25),
    array('id' => 3, 'name' => 'Carlos', 'age' => 28)
);

// Obtenemos el método HTTP de la solicitud
$method = $_SERVER['REQUEST_METHOD'];

// Obtenemos los parámetros de la URL
$params = explode('/', $_REQUEST['params']);

// Definimos las respuestas según el método y los parámetros
switch ($method) {
    case 'GET':
        // Si la solicitud es GET, devolvemos todos los usuarios
        echo json_encode($users);
        break;
    case 'POST':
        // Si la solicitud es POST, creamos un nuevo usuario
        $data = json_decode(file_get_contents('php://input'), true);
        $newUser = array('id' => count($users) + 1, 'name' => $data['name'], 'age' => $data['age']);
        $users[] = $newUser;
        echo json_encode($newUser);
        break;
    case 'PUT':
        // Si la solicitud es PUT, actualizamos un usuario existente
        $userId = $params[0];
        $data = json_decode(file_get_contents('php://input'), true);
        foreach ($users as &$user) {
            if ($user['id'] == $userId) {
                $user['name'] = $data['name'];
                $user['age'] = $data['age'];
                echo json_encode($user);
                break;
            }
        }
        break;
    case 'DELETE':
        // Si la solicitud es DELETE, eliminamos un usuario existente
        $userId = $params[0];
        foreach ($users as $index => $user) {
            if ($user['id'] == $userId) {
                unset($users[$index]);
                echo json_encode(array('message' => 'Usuario eliminado'));
                break;
            }
        }
        break;
}