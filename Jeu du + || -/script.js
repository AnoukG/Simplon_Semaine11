$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Essayez plus ?";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Félicitations !";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Réessayez moins…";
    }
}

$bouton.onclick = verifier;
