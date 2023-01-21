<?php
    if(isset($_POST['owo'])){
        $_SESSION['owo'] = $_POST['owo'];
    }
    return $_SESSION['owo'];
?>