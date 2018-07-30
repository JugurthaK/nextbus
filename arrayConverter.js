
// Pour sortir un tableau en HTML, pcq bon la flemme
var fromArray = function (horaireBus) {
    var j = 0;
    var tabHoraire = horaireBus;
    for (var i = 0; i < horaireBus.length; i++) {
        var heure = horaireBus[i].split(":");
        var somme = heure[0] * 60 + heure[1] * 1;
        tabHoraire[j] = somme;
        j++;
    }
    var flemme = document.getElementById('bus');
    var p = document.createElement('p');
    p.innerHTML = "["
    for (var i = 0; i < tabHoraire.length; i++) {
        p.innerHTML += '"' + tabHoraire[i] + '", <br>'
        flemme.appendChild(p);
    }
}

// Pour convertir depuis une chaine de caractères vers un tableau
var toArray = function(str){
    var str = str.split(",");
    for (var i = 0; i < str.length; i++){
        str[i] = str[i].split(":");
        str[i] = str[i][0] * 60 + str[i][1] * 1;
    }
    var p = document.createElement('p');
    var tab = "[ <br>"
    for (var i = 0; i < str.length; i++){
        tab += '"'+str[i]+'",<br>';
    }
    p.innerHTML = tab;
    document.getElementById('bus').appendChild(p);
}
/* var busHoraire =
    ["385",
        "393",
        "419",
        "443",
        "459",
        "468",
        "507",
        "529",
        "549",
        "568",
        "597",
        "619",
        "639",
        "660",
        "687",
        "713",
        "729",
        "748",
        "782",
        "804",
        "838",
        "848",
        "872",
        "896",
        "923",
        "941",
        "962",
        "991",
        "1011",
        "1033",
        "1052",
        "1084",
        "1109",
        "1123",
        "1144",
        "1173",
        "1195"] */
   /*  var flemme = document.getElementById('bus');
    var p = document.createElement('p');
    p.textContent = 'const horaires = { \n';
    for (var i = 0; i < tabHoraire.length; i++) {
        p.innerHTML += tabHoraire[i] + ": {<br> heures:" + Math.floor(tabHoraire[i] / 60) + ",<br> minutes:" + tabHoraire[i] % 60 + "<br>}, <br>";
        flemme.appendChild(p);
    }
} 

"13:55,14:22,14:40,15:01,15:29,15:50,16:12,16:30,17:03,17:25,17:42,18:03,18:33,18:54,19:10,19:31,19:52,20:07"
// La key est heures *60 + minutes
 const horaires = {
    385: {
        heures: 6,
        minutes: 25
    },
    393: {
        heures: 6,
        minutes: 33
    },
    419: {
        heures: 6,
        minutes: 59
    },
    443: {
        heures: 7,
        minutes: 23
    },
    459: {
        heures: 7,
        minutes: 39
    },
    468: {
        heures: 7,
        minutes: 48
    },
    507: {
        heures: 8,
        minutes: 27
    },
    529: {
        heures: 8,
        minutes: 49
    },
    549: {
        heures: 9,
        minutes: 9
    },
    568: {
        heures: 9,
        minutes: 28
    },
    597: {
        heures: 9,
        minutes: 57
    },
    619: {
        heures: 10,
        minutes: 19
    },
    639: {
        heures: 10,
        minutes: 39
    },
    660: {
        heures: 11,
        minutes: 0
    },
    687: {
        heures: 11,
        minutes: 27
    },
    713: {
        heures: 11,
        minutes: 53
    },
    729: {
        heures: 12,
        minutes: 9
    },
    748: {
        heures: 12,
        minutes: 28
    },
    782: {
        heures: 13,
        minutes: 2
    },
    804: {
        heures: 13,
        minutes: 24
    },
    838: {
        heures: 13,
        minutes: 58
    },
    848: {
        heures: 14,
        minutes: 8
    },
    872: {
        heures: 14,
        minutes: 32
    },
    896: {
        heures: 14,
        minutes: 56
    },
    923: {
        heures: 15,
        minutes: 23
    },
    941: {
        heures: 15,
        minutes: 41
    },
    962: {
        heures: 16,
        minutes: 2
    },
    991: {
        heures: 16,
        minutes: 31
    },
    1011: {
        heures: 16,
        minutes: 51
    },
    1033: {
        heures: 17,
        minutes: 13
    },
    1052: {
        heures: 17,
        minutes: 32
    },
    1084: {
        heures: 18,
        minutes: 4
    },
    1109: {
        heures: 18,
        minutes: 29
    },
    1123: {
        heures: 18,
        minutes: 43
    },
    1144: {
        heures: 19,
        minutes: 4
    },
    1173: {
        heures: 19,
        minutes: 33
    },
    1195: {
        heures: 19,
        minutes: 55
    }
} */