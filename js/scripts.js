function raz_jeu() {
	setCookie("up1718_jeu_reveil","", 1);
	setCookie("up1718_jeu_clef","", 1);
	setCookie("up1718_jeu_mur","", 1);

}
function reveil(){
	// gère le fait qu'on est déjà passé là.
	var retour = getCookie("up1718_jeu_reveil");
	if(retour=="oui") {
		$("#debut").html("Vous êtes de retour dans le couloir où vous vous êtes réveillé.");
	} else {
		setCookie("up1718_jeu_reveil","oui", 1);
	}
}
function fouiller_coffre() {
	// ajoute la clé !
	setCookie("up1718_jeu_clef","oui", 1);
	$('#coffre').html("Il y a une clé !");
	
}
	
function tatonner_mur() {
	setCookie("up1718_jeu_mur","rien", 1);
	$('#mur').html("Il y a...");
	setTimeout("$('#mur').html('Il y a... rien du tout.');", 1200);

}

function ouvrir_porte(){
	var clef= getCookie("up1718_jeu_clef");
	if (clef=="oui") {
		$('#porte').html("Votre clé ouvre la porte... la lumière est aveuglante... vous y <a href='jeu_fin.html'>allez</a> ?");
	}
	else {
		$('#porte').html("La porte ne s'ouvre pas, elle est fermée à clé...");
		
	}
}

function descendre_escalier() {
	var savoir= getCookie("up1718_jeu_mur");
	if (savoir=="rien") {
		$('#escalier').html("Vous descendez, c'est de plus en plus sombre, et puis soudain... rouge. Il y a des flammes. On va <a href='jeu_droite.html'>remonter</a>, d'accord ?");
	}
	else {
		$('#escalier').html("Vous descendez, c'est de plus en plus sombre, et puis soudain... rouge. Des flammes ! Qui vous brûlent... trop tard ! <strong>Vous mourrez</strong> dans d'atroces souffrances !");
		$('#droite_demitour').html("...");
		setTimeout("recommencer()", 1200);
	}
}

function recommencer(){
	raz_jeu();
	$('#droite_demitour').html('<a href="jeu_1.html">Recommencer</a>');
}

function recommencer_apres_victoire(){
	raz_jeu();
	location.href="jeu_1.html";
}
