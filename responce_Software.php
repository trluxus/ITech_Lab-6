<?php

    header('Content-Type:application/json');

    require "connection.php";

    $soft = $_GET['select_Software'];

    $responce = $collection->find(
        ["software" => $soft], 
        ["projection" => 
            ["netname" => 1]
        ])->toArray();

    echo json_encode($responce);

?>
