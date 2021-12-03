<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

include ("config.php");
include ("connect.php");



if (!isset($_GET['author_id'])){
    $author_id = 0;
}
else{
    $author_id = $_GET['author_id'];
}

$title_arr = [];
class timetable
{
    public $elements = [];
}
$tt = new timetable();
$tt->elements = [["","1","2","3","4","5","6"],["Пн","Лин. Алгебра","Мат. Анализ","-","Кураторский час","-","-"],["Вт","-","Алгоритмы и структуры данных","Алгоритмы и структуры данных","Мат. Анализ","-","-"],["Ср","Лин. Алгебра","Лин. Алгебра","Анг.","-","-","-"],["Чт","-","Мат. Анализ","Мат. Анализ","Англ.","-","-"],["Пт","Топология","Топология","Межфак","-","-","-"],["Сб","-","-","-","-","-","-"],["Вс","-","-","-","-","-","-"]];



echo(json_encode($tt));
?>