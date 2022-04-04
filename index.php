<!--
Author:      Jouni Juntunen
Date:        8/2005
Modify by: Amarilys Otero
Date:        04/2022
Description: Reads height and weight from HTML-form and calculates BMI. User input is checked.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>BMI-calculator exercise</title>
</head>
<body>
<h2>BMI-calculator in PHP</h2>
<?php
//Define variables and give initial values.
$height=0;
$width=0;

//Check if height is valid. First uservalue is translated into floavalue.
//If given value is not valid float, result of floatval-function is zero.
//If conversion translated into string and original input value are the same, input is correct.
if ($_POST['height']!=strval(floatval($_POST['height'])))
{
//Print error message and hyperlink.
    print "Height is invalid<br />";
    print "<a href='programs.html'>try again</A>";
//Execution of this script is terminated at this point.
    exit;
}

//Read user value to variable.
$height=$_POST['height'];

//Check that value is in right range.
if ($height<0 || $height>2.5)
{
    print "Height must be value between 0 and 2.5<br />";
    print "<a href='programs.html'>try again</A>";
    exit;
}

//Weight is in kilogramms, so it must be an integer (no floating point).
if ($_POST['weight']!=strval(intval($_POST['weight'])))
{
    print "Weight is invalid<br />";
    print "<a href='programs.html'>try again</A>";
    exit;
}

//Read user value to variable.
$weight=$_POST['weight'];

//Check that value is in right range.
if ($weight<0 || $weight>500)
{
    print "Weight must be value between 0 and 500<br />";
    print "<a href='programs.html'>try again</A>";
    exit;
}

//Calculate BMI.
$bmi=$weight / ($height * $height);

//Print result.
print("Body mass index is $bmi");
?>
<br /><br /><a href="programs.html">Back to examples</a>
</body>
</html>
