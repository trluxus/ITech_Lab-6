<?php

    header('Content-Type:application/json');

    require "connection.php";

    $date = new MongoDB\BSON\UTCDateTime(time() * 1000);
    $iso_date = $date->toDateTime()->format("Y-m-d H:i:s");
    
    $responce = $collection->find([
        "guarantee" => [
            '$lte' => new MongoDB\BSON\UTCDateTime(time() * 1000)
        ],
        ],[
            "projection" => [
                "netname" => 1
                ]
    ])->toArray();

    echo json_encode($responce);

?>
