<?php

function mydata(){
    $server = "localhost";
    $dbname = "myproyecy";
    $username = "client";
    $password = "fsdsdfsdfsdfs";
    $dns = "mysql:host=$server;dbname=$dbname";
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);


    $dsn = "mysql:host=$server;dbname=$dbname";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);


try{
    $link = new PDO($dsn, $username, $password, $options);
     if(is_object($link)){
     //echo 'It worked!';
    }
 return $link;
} catch(PDOException $e){
 //   echo "It din't work, error: " . $e->getMessage();
header('Location: /phpmotors/view/500.php');
exit;
}
}

phpmotorsConnect();
}