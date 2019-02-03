<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Content-Type: application/x-www-form-urlencoded");

$servername="localhost";
$username="root";
$password="";
$dbname="snakegame";

$uname = $_POST['username']; //username
$score = $_POST['score']; //score string

//create connection
$conn =  mysqli_connect($servername,$username,$password,$dbname);

//check connection
if(!$conn){
    die("Connection failed :" .mysqli_connect_error());
}

$sql = "SELECT * FROM `score_table` WHERE `username` = '$uname'";

//after the snake eat for 3 times, do this code
//$sql = "SELECT * FROM `score_table` WHERE `score` = '$score'";

$result = mysqli_query($conn,$sql);
if($result){
        $response = array('successful' => true , 'msg' => 'Correct credentials;', 'username' => $uname, 'score' => $score);
        
} else {
        $response = array('successful' => false , 'error' => 'Wrong credentials');
        	
}

echo json_encode($response);
mysqli_close($conn);
?>