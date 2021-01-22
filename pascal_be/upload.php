
<?php
require("init.php");

// index route, render the basic html view
$router->post("/upload", function ($request, $response, $args) {
    print_r($_FILES['file']);
    sleep(10);
    $uploaddir = './files/';
    $uploadfile = $uploaddir . basename($_FILES['file']['name']);
    if(move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
        return $response->withStatus(201)->withHeader("X-huhu", "haha");
    } else {
        return $response->withStatus(400);
    }
});


$router->run();
