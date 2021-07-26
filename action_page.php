<?php


function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

if ( !empty($_POST) ) {
    debug_to_console(json_encode($_POST));
    // echo "http://" . $_SERVER['SERVER_NAME'];
    header("Location: http://localhost/techncialtest?success=true");
    die();
 }


?>

