<script type="text/javascript">
	var score = totalScoreString();
	var true = 1;
</script>
 <script src="js/setting.js"></script>
 <script src="js/draw.js"></script>
 <script src="js/app.js"></script>

<?php

//check if score is received.
if (if isset(score)){
	// display score in php
	echo "<script>document.writeln(score);</script>";
} else {
	include 'index.html';
	
} 

?>