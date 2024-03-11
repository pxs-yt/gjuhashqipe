const searchWordInput = document.getElementById("searchWord");
const searchButton = document.getElementById("searchButton");
const definitionDiv = document.getElementById("definition");

const albanianWords = {
    "akomodohu": {
      origin: "Angleze",
      definition: "Rehatohu",
      example: "Mund të më telefononi më vonë?"
    },
    "agravuar": {
      origin: "Angleze",
      definition: "Rënduar",
      example: "SHEMBULLI"
    },
    "relaksuar": {
      origin: "Angleze",
      definition: "Çlodhur",
      example: "SHEMBULLI"
    },
    "puntatë": {
      origin: "Italiane",
      definition: "Pjesë",
      example: "SHEMBULLI"
    },
    "puntate": {
      origin: "Italiane",
      definition: "Pjesë",
      example: "SHEMBULLI"
    },
    "involvoj": {
      origin: "Angleze",
      definition: "Përfshij",
      example: "SHEMBULLI"
    },
    "monstër": {
      origin: "Angleze",
      definition: "Përbindësh",
      example: "SHEMBULLI"
    },
    "monster": {
      origin: "Angleze",
      definition: "Përbindësh",
      example: "SHEMBULLI"
    },
    "bravo": {
      origin: "Italiane",
      definition: "Të lumtë",
      example: "SHEMBULLI"
    },
    "selektoj": {
      origin: "Angleze",
      definition: "Përzgjedh",
      example: "SHEMBULLI"
    },
    "shokuese": {
      origin: "Angleze",
      definition: "Tronditëse",
      example: "SHEMBULLI"
    },
    "ortografi": {
      origin: "Angleze",
      definition: "Drejtshkrim",
      example: "SHEMBULLI"
    },
    "dimension": {
      origin: "Angleze",
      definition: "Përmasë",
      example: "SHEMBULLI"
    },
    "inspirim": {
      origin: "Angleze",
      definition: "Frymëzim",
      example: "SHEMBULLI"
    },
    "show": {
      origin: "Angleze",
      definition: "Shfaqje",
      example: "SHEMBULLI"
    },
    "kreativ": {
      origin: "Angleze",
      definition: "Krijues",
      example: "SHEMBULLI"
    },
    "konkluzion": {
      origin: "Angleze",
      definition: "Përfundim",
      example: "SHEMBULLI"
    },
    "dedikoj": {
      origin: "Angleze",
      definition: "Kushtoj",
      example: "SHEMBULLI"
    },
    "koincidence": {
      origin: "Angleze",
      definition: "Rastësi",
      example: "SHEMBULLI"
    },
    "koincidencë": {
      origin: "Angleze",
      definition: "Rastësi",
      example: "SHEMBULLI"
    },
    "inauguroj": {
      origin: "Angleze",
      definition: "Përuroj",
      example: "SHEMBULLI"
    },
    "iniciative": {
      origin: "Angleze",
      definition: "Nismë",
      example: "SHEMBULLI"
    },
    "iniciativë": {
      origin: "Angleze",
      definition: "Nismë",
      example: "SHEMBULLI"
    },
    "kauze": {
      origin: "Angleze",
      definition: "Çështje",
      example: "SHEMBULLI"
    },
    "kauzë": {
      origin: "Angleze",
      definition: "Çështje",
      example: "SHEMBULLI"
    },
    "evitoj": {
      origin: "Angleze",
      definition: "Shmang",
      example: "SHEMBULLI"
    },
    "kuroj": {
      origin: "Angleze",
      definition: "Përkujdesem / Mjekoj",
      example: "SHEMBULLI"
    },
    "starton": {
      origin: "Angleze",
      definition: "Fillon",
      example: "SHEMBULLI"
    },
    "kualitet": {
      origin: "Angleze",
      definition: "Cilësi",
      example: "SHEMBULLI"
    },
    "skonto": {
      origin: "Italiane",
      definition: "Ulje (çmimi)",
      example: "SHEMBULLI"
    },
    "konstatoj": {
      origin: "Angleze",
      definition: "Vërej",
      example: "SHEMBULLI"
    },
    "civilizim": {
      origin: "Angleze",
      definition: "Qytetërim",
      example: "SHEMBULLI"
    },
    "indiferent": {
      origin: "Angleze",
      definition: "Mospërfillës",
      example: "SHEMBULLI"
    },
    "violence": {
      origin: "Angleze",
      definition: "Dhunë",
      example: "SHEMBULLI"
    },
    "violencë": {
      origin: "Angleze",
      definition: "Dhunë",
      example: "SHEMBULLI"
    },
    "ambient": {
      origin: "Angleze",
      definition: "Mjedis",
      example: "SHEMBULLI"
    },
    "kuantitet": {
      origin: "Angleze",
      definition: "Sasi",
      example: "SHEMBULLI"
    },
    "sensibilizim": {
      origin: "Angleze",
      definition: "Ndërgjegjësim",
      example: "SHEMBULLI"
    },
    "interaktiv": {
      origin: "Angleze",
      definition: "Bashkëveprues",
      example: "SHEMBULLI"
    },
    "destinacion": {
      origin: "Angleze",
      definition: "Vend-mbërritje",
      example: "SHEMBULLI"
    },
    "preferoj": {
      origin: "Angleze",
      definition: "Parapëlej",
      example: "SHEMBULLI"
    },
    "kurioz": {
      origin: "Angleze",
      definition: "Kureshtar",
      example: "SHEMBULLI"
    },
    "trauma": {
      origin: "Angleze",
      definition: "Plagë (pasoja)",
      example: "SHEMBULLI"
    },
    "imagjinoj": {
      origin: "Angleze",
      definition: "Përfytyroj",
      example: "SHEMBULLI"
    },
    "fans": {
      origin: "Angleze",
      definition: "Adhurues",
      example: "SHEMBULLI"
    },
    "hit": {
      origin: "Angleze",
      definition: "Këngë",
      example: "SHEMBULLI"
    },
    "predominon": {
      origin: "Angleze",
      definition: "Mbizotëron",
      example: "SHEMBULLI"
    },
    "eksperience": {
      origin: "Angleze",
      definition: "Përvojë",
      example: "SHEMBULLI"
    },
    "eksperencë": {
      origin: "Angleze",
      definition: "Përvojë",
      example: "SHEMBULLI"
    },
    "download": {
      origin: "Angleze",
      definition: "Shkarkoj",
      example: "SHEMBULLI"
    },
    "upload": {
      origin: "Angleze",
      definition: "Ngarkoj",
      example: "SHEMBULLI"
    },
    "network": {
      origin: "Angleze",
      definition: "Rrjet",
      example: "SHEMBULLI"
    },
    "risk": {
      origin: "Angleze",
      definition: "Rrezik",
      example: "SHEMBULLI"
    },
    "suportoj": {
      origin: "Angleze",
      definition: "Mbështes (moralisht)",
      example: "SHEMBULLI"
    },
    "posedon": {
      origin: "Angleze",
      definition: "Zotëron",
      example: "SHEMBULLI"
    },
    
  };
  

searchButton.addEventListener("click", function() {
  const wordToSearch = searchWordInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive search

  if (wordToSearch) {
    const definition = albanianWords[wordToSearch];

    if (definition) {
      const origin = definition.origin;
      const definitionText = definition.definition;
      const example = definition.example || ""; // Use default empty string if `example` is missing

      definitionDiv.innerHTML = `
        <b>Origjina:</b> ${origin}<br>
        <b>Fjala gjegjëse:</b> ${definitionText}<br>
        ${example ? `<b>Shembull:</b> ${example}` : ""}
      `;
    } else {
      definitionDiv.textContent = "Fjala nuk u gjet ne fjalor.";
    }
  } else {
    definitionDiv.textContent = "Kerkoni per fjale te huaj.";
  }
});
