<?php

    $cpu = $collection->distinct('cpu');
    foreach($cpu as $i) {
        echo '<option value="'. $i .'">'. $i .'</option>';
    }

?>
