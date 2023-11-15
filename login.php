
<!DOCTYPE html>
<html>
<head>
    <title>Bienvenidos a Yamboly Ssoma</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
    <h1>Bienvenidos a Yamboly Ssoma</h1>

    <form action="procesar_login.php" method="post">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario" required><br><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" id="contrasena" required>

        <input type="checkbox" name="recordar_contrasena" id="recordar_contrasena">
        <label for="recordar_contrasena">Recordar contraseña</label><br>

        <input type="checkbox" id="mostrar_contrasena">
        <label for="mostrar_contrasena">Mostrar contraseña</label>

        <button type="submit">Iniciar sesión</button>
        <input type="sumit" action="sing">
    </form>

    <p><a href="crear_usuario.php">Crear nuevo usuario</a></p>
    <p><a href="olvidar_contrasena.php">Olvidé mi contraseña</a></p>
</body>
</html>

