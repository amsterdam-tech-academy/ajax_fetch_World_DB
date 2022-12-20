<?php
// gegevens database
include "dbVars.php";


$resultArray = array();// array voor de query output
$search = $_GET['question']; //let op niet beschermd tegen XSS https://www.cloudways.com/blog/prevent-xss-in-php/
$type = $_GET['type']; //let op niet beschermd tegen XSS
$con = mysqli_connect($servername,$uid,$pwd,$database);//bereid connectie voor
// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	exit();
  }
mysqli_select_db($con,"world");//selecteer database
//let op niet beschermd tegen SQL injectie!!! 
$sql = "SELECT * FROM country WHERE name LIKE '$search%' ";
if ($type == "list"){
	$result = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($result)) {
    $resultArray[]=$row['Name'];
	}
	echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
}
if ($type == "answer"){
	$result = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $resultArray[]=$row;        
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
}
mysqli_close($con);
?>
