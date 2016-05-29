<?php
    //returns string format ics file
    $data = file_get_contents($_GET["url"]);
    echo $data;
?>