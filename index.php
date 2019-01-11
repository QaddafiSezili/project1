<html>
 <head>
  <meta charset='utf-8'/>
  	<link rel="stylesheet" href="css/style.css">
 </head>
 <body>
  <div class= 'game'>
  <div id = 'home'>
    <canvas id='mycanvas' width='350' height='350'>
    </canvas>
    <p>Press start and eat the pizza!</p>
    <button id='btn'>START</button><br></br>
    <p <p action ="fetch.php" method =post id='theScore' name = 'thescore' class='pinside'></p>
    </div>
  </div>

  <script src="js/setting.js"></script>
  <script src="js/draw.js"></script>
  <script src="js/app.js"></script>
 </body>
</html>

<script>
  var score = totalScoreString();
</script>

<?php
  echo "<script>document.writeln(score);</script>";
?>