<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php   
echo "<h2>Fibonacci series upto (n) number </h2>";  
echo "\n\n";
//Define variables and give initial values. 
$n = 15;  
$f=0; 

//Read user value to variable. 
$f=$_POST['number']; 

/* Recursive function  */  
function fabnacaiiSeries($num){
    $first=0;$second=1;
    for($i=0;$i<$num;$i++){
        if($i<=1){
            $next=$i;
        }  else  {
            $next=$first+$second;
            $first=$second;
            $second=$next;
        }

        echo  $next." , ";
    }   
}
print(fabnacaiiSeries($f));
?>
<br/>
<br/>
<a href="programs.html">Back to examples</a> 
</body>
</html>