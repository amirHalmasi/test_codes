<?php
$provinceID = $_GET["provinceID"];
$city=[['Tarom','Abhar',"Zanjan"],['Shahriar','Damavand','Malard', "Tehran"],["Shahin shahr","Najafabad","Kashan","Esfehan"],["Tabriz","Azarshahr","Heris"]];
die(json_encode($city[$provinceID]));
?>