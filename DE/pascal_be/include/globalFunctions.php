<?php
// Autoload requires classes on new class()

function cherrycakeAutoload($class_name)
{
    $pfad = MY_ROOT . "/include/class." . $class_name . ".php";
    if (file_exists($pfad)) {
        require_once($pfad);
    } else {
        die("<b>Fatal Error. Class $class_name could not be located.</b>");
    }
}
spl_autoload_register("cherrycakeAutoload");