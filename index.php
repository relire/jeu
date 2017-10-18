<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Jeux des étudiantes</title>
	<meta name="description" content="Poitiers 2017-18" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="content-language" content="fr">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="../../lib/jquery-1.10.2.min.js" type="text/javascript"></script>
	<link href='http://fonts.googleapis.com/css?family=Nobile:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
	<link type="text/css" rel="stylesheet" media="all" href="../css/styles.css" />

</head>
<body>
<div class="page">
	<div class="header">
		<h1>Quelques aventures</h1>

	</div>
	<div class="content">
		<p>
		Jeux d'aventures réalisés par les étudiantes du <a href="http://ll.univ-poitiers.fr/masterlivre/">Master LiMés</a>
		- master pro livres et médiations, Université de Poitiers, d'après le 
		<a href="../index.html">cours 2017-18</a> proposé
		par Joachim Séné.
		</p>
		
		<?php
		$dir    = './';
		// Ouvre un dossier bien connu, et liste tous les fichiers
		if (is_dir($dir)) {
			if ($dh = opendir($dir)) {
				echo "<ul>\n";
				while (($file = readdir($dh)) !== false) {
					if($file != "." && $file !=".." && $file !="index.php"  ) {
						echo "<li><a href='$file/'>$file</a></li>";
						
					}
				}
				closedir($dh);
				echo "</ul>\n";
			}
		}
		
		?>
	</div>
</div>
</body>
</html>