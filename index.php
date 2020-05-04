<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8">
    <meta http-equiv = "X-UA-Compatible" conten = "IE=edge">
    <title>Dima Moruha Mongo time</title>
    <meta name = "viewport" content = "width=device-width, initial-scale=1">
    <link rel = "stylesheet" type = "text/css" media = "screen" href = "main.css">
    <script src = "js/main.js"></script>
</head>
<body>
    <?php 
        require "connection.php";
    ?>

    <form method = "GET">
        PC's by CPU<br>

        <select id = "select_CPU">
            <?php include "get_CPU.php"; ?>
        </select>

        <input type = "button" value = "Get" onclick = "getByCPU()">
        <input type = "button" value = "Storage" onclick = "storageCPU()">

        <div id = "result_CPU"></div>
    </form>

    <form method = "GET">
        PC's by Software<br>
        <select id = "select_Software">
            <?php include 'get_Software.php'; ?>
        </select>

        <input type = "button" value = "Get" onclick = "getBySoftware()">
        <input type = "button" value = "Storage" onclick = "storageSoftware()">

        <div id = "result_Software"></div>
    </form>

    <form method = "GET">
        PC's with expired guarantee<br>

        <input type = "button" value = "Get" onclick = "getExpired()">
        <input type = "button" value = "Storage" onclick = "storageExpired()">
        
        <div id = "result_Expired"></div>
    </form>
   
</body>
</html>