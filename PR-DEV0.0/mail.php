<?php

$recepient = "job@amuno.ru";
$sitename = "Аренда авто для работы в такси";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$patronomic = trim($_POST["patronomic"]);
$message = "Имя: $name \nТелефон: $phone \nФамилия: $patronomic";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");