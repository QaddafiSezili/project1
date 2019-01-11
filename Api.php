<?php

class API
{
	private $connect = '';
	function __construct()
	{
		$this->database_connection();
	}

	function database_connection()
	{
		$this->connect = new mysqli_connect("localhost", "root", "", "snakegamedatabase");
	}

	function fetch_score()
	{
		//if has score, then fetch the score.
		if ('thescore' != is_null(var)) {
			# code...
		} else {
			# code...
		}
		
	}
}

?>