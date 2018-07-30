// Pour ne plus jamais manquer un bus
var busElt = document.getElementById('bus');
var now = new Date();
var hoursAuto = now.getHours() * 60 + now.getMinutes() * 1;
var strHour;

// Valeur dans le tableau = Heure * 60 + Minute
var Iut =
    ["835",
        "862",
        "880",
        "901",
        "929",
        "950",
        "972",
        "990",
        "1023",
        "1045",
        "1062",
        "1083",
        "1113",
        "1134",
        "1150",
        "1171",
        "1192",
        "1207"];

var Theatre =
    ["413",
        "420",
        "455",
        "482",
        "501",
        "513",
        "550",
        "572",
        "592",
        "613",
        "640",
        "666",
        "682",
        "700",
        "735",
        "757",
        "779",
        "799",
        "825"];

var calculeHoraire = function (tab) {
    var trouve = false;
    var i = 0;
    while (i < tab.length && trouve === false) {
        if (tab[i] < hoursAuto) {
            i++;
        } else {
            trouve = true;
            var a = Math.abs(tab[i] - hoursAuto);
            var p = document.createElement('p');
           
            // Obliger de stocker dans 2 variables car elles ne sont pas locales :(
            var partLieu;
            var partMinute;
           
            // Vérification du lieu de départ
            if (tab == Iut) {
                partLieu = "Le prochain bus en départ de l'IUT est dans ";
            } else {
                partLieu = "Le prochain bus en départ du Théâtre est dans ";
            }
            
            // Vérification s'il reste 1 minute
            if (a <= 1) {
                partMinute = a + " minute </span>";
            } else {
                partMinute = a + " minutes";
            }

            //
            p.innerHTML = partLieu + partMinute;
            busElt.appendChild(p);
        }
    }
    if (!trouve) {
        var p = document.createElement('p');
        p.innerHTML = "Il n'y a plus de bus disponible :("
        busElt.appendChild(p);
    }
}

// Si c'est le matin affiche les horaires du théâtre, sinon affiche l'IUT
if (hoursAuto < Iut[0]) {
    calculeHoraire(Theatre);
} else {
    calculeHoraire(Iut);
}

