<?php

    header('Content-Type:application/json');

    require "connection.php";

    $data = $_GET["select_CPU"];
    $responce = $collection->find(
        ["cpu" => $data], 
        ["projection" => 
            ["netname" => 1]
        ])->toArray();

    echo json_encode($responce);

?>
