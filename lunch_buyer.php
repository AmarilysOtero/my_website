<!--
Implemented by: Amarilys Otero
Date:        04/2022
Description: It use an array of names to Randomly print out who's gonna buy lunch
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Who's buying lunch???</title>
</head>
<body>
<?php
echo "<h2> PHP LANGUAGE: Who's buying lunch? </h2>";
echo "\n\n";

$a=array("Abner", "Amarilys","Ariel","Darell", "DiegoRC", "Diego RG", "Eloi", "Francisco", "Harry", "Kevin", "Norberto");
$random_keys=array_rand($a,3);
echo $a[$random_keys[0]]."<br>";

?>
<br/>
<br/>
<a href="programs.html">Back to examples</a>
</body>
</html>
