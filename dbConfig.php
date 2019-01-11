<?php

$conn = mysqli_connect("localhost", "root", "", "snakegamedatabase"); //create connection

if(mysqli_connect_errno()) {
	die("Connection error: " . mysqli_connect_error());
};

?>