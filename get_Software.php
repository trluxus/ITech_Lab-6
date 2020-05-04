<?php

    $software = $collection->distinct('software');
    foreach($software as $i) {
        echo '<option value="'. $i .'">'. $i .'</option>';
    }

?>
