<?php
#TU0100214PC1 to TU0100214PC50 PW: 3634675426
error_reporting(E_ALL); 
ini_set( 'display_errors','1');

$STEAM_BASE_ID = "TU0100214PC";
$IP = $_SERVER['REMOTE_ADDR'];
$STEAM_DATA = "steam.json";
$PASSWORD = "3634675426";
$QUARTER = "Winter 2016";

if(isset($_GET['reset']) && $_GET['reset'] == "iugaofficer"){
	$file = fopen($STEAM_DATA,'w+');
	fwrite($file, "[]");
	fclose($file);
	$reset = true;
}

?>
<!DOCTYPE html>
<html lang="en">
	<head>
    	<title>IUGA Game Night</title>
    	<meta charset="UTF-8">
    	<!-- Bootstrap --><link href="bootstrap.min.css" rel="stylesheet">
    	<link href="style.css" rel="stylesheet">
  	</head>
	<body>
		<div class="container">
		
				<div id="head" class="oneup">
					<audio src="1up.mp3" preload="auto"></audio>
					<img src="head.png">
				</div>
			<div class="centered">
				<div id="countdown">
				<h1>IUGA Game Night: <?= $QUARTER?></h1>
				<h5>Using IP: <?= $IP?></h5>
				<h5>MINECRAFT SERVER: iuga-server.ischool.uw.edu</h5>
			  		<div class="message">
			  			<a class="well" href='http://store.steampowered.com/'>Download Steam!</a>
	  				</div> 		
			  	</div>
			</div>
	    	<div id="games">
	    		<img src="games.png">
	    	</div>
		   <div class="navbar navbar-fixed-bottom">
			<div class="navbar-inner container">
			<a class="brand" href="/">IUGA</a>
			<ul class="nav pull-right">
				<li>
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Feedback</a>
					<ul class="dropdown-menu">
						<!--<li><a href="https://www.facebook.com/events/810196069041589/" target="_blank">Facebook Event</a></li>-->
						<li><a href="https://www.facebook.com/groups/info.uw/" target="_blank">IUGA Group</a></li>
						<li class="divider"></li>
						
						<li class="disabled"><a href="#"><strong>Hiram Munn</strong></a></li>
						<li><a href="mailto:hmunn@uw.edu">hmunn@uw.edu</a></li>
					</ul>
				</li>
			</ul>
			</div>
		</div> 
	    </div><!-- /.container -->

	    <script src="jquery-1.8.1.min.js"></script>
    	<script src="bootstrap.min.js"></script>
    <script type="text/javascript">
		$(function(){
		    var oneup     = $('.oneup');
	        var oneupaudio = oneup.find('audio')[0];
		    oneup.hover(function(){
		       oneupaudio.play();
		    }, function(){
		       oneupaudio.stop();
		    });
		});
    </script>
  </body>
</html>

<?php

// Return the steam ID associated with the given IP,
// false if none exists.
function getSteamID($json, $ipAddress){
	$idIndex = array_search($ipAddress, $json);

	for ($i=0; $i < count($json); $i++) { 
		if($json[$i] == $ipAddress){
			return $i + 1;
		}
	}
	return false;
}
?>