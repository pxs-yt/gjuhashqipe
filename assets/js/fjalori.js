const searchWordInput = document.getElementById("searchWord");
const searchButton = document.getElementById("searchButton");
const definitionDiv = document.getElementById("definition");

const albanianWords = {
    "akomodohu": {
      origin: "Angleze",
      definition: "Rehatohu",
      example: "Akomodohu, rri si në shtëpinë tënde."
    },
    "agravuar": {
      origin: "Angleze",
      definition: "Rënduar",
      example: "Gjendja është shumë e agravuar."
    },
    "relaksuar": {
      origin: "Angleze",
      definition: "Çlodhur",
      example: "Dua të relaksohem."
    },
    "puntatë": {
      origin: "Italiane",
      definition: "Pjesë",
      example: "Kjo puntatë ishte shumë argëtuese."
    },
    "puntate": {
      origin: "Italiane",
      definition: "Pjesë",
      example: "Kjo puntatë ishte shumë argëtuese."
    },
    "involvoj": {
      origin: "Angleze",
      definition: "Përfshij",
      example: "Involvo dhe persona të tjerë në projekt."
    },
    "monstër": {
      origin: "Angleze",
      definition: "Përbindësh",
      example: "Monstra në film më trembi shumë."
    },
    "monster": {
      origin: "Angleze",
      definition: "Përbindësh",
      example: "Monstra në film më trembi shumë."
    },
    "bravo": {
      origin: "Italiane",
      definition: "Të lumtë",
      example: "Bravo, dole shumë mirë në test!"
    },
    "selektoj": {
      origin: "Angleze",
      definition: "Përzgjedh",
      example: "Selekto vetëm fjalët që të duhen."
    },
    "shokuese": {
      origin: "Angleze",
      definition: "Tronditëse",
      example: "Situata është shokuese."
    },
    "ortografi": {
      origin: "Angleze",
      definition: "Drejtshkrim",
      example: "Ke gabime në ortografi."
    },
    "dimension": {
      origin: "Angleze",
      definition: "Përmasë",
      example: "Dimensioni i katrorit është brinjë * brinjë."
    },
    "inspirim": {
      origin: "Angleze",
      definition: "Frymëzim",
      example: "U inspirova nga një video."
    },
    "show": {
      origin: "Angleze",
      definition: "Shfaqje",
      example: "Show im i preferuar është në kanalin 5."
    },
    "kreativ": {
      origin: "Angleze",
      definition: "Krijues",
      example: "Ti je mjaft kreativ."
    },
    "konkluzion": {
      origin: "Angleze",
      definition: "Përfundim",
      example: "Përpiqu të arrish në konkluzion."
    },
    "dedikoj": {
      origin: "Angleze",
      definition: "Kushtoj",
      example: "Letrën ta dedikova ty."
    },
    "koincidence": {
      origin: "Angleze",
      definition: "Rastësi",
      example: "Është me të vërtetë koincidencë që u takuam."
    },
    "koincidencë": {
      origin: "Angleze",
      definition: "Rastësi",
      example: "Është me të vërtetë koincidencë që u takuam."
    },
    "inauguroj": {
      origin: "Angleze",
      definition: "Përuroj",
      example: "Dyqani i ri u inaugurua."
    },
    "iniciative": {
      origin: "Angleze",
      definition: "Nismë",
      example: "Merr iniciativën të mësosh."
    },
    "iniciativë": {
      origin: "Angleze",
      definition: "Nismë",
      example: "Merr iniciativën të mësosh."
    },
    "kauze": {
      origin: "Angleze",
      definition: "Çështje",
      example: "Kauza ime është mbrojtja e vendit."
    },
    "kauzë": {
      origin: "Angleze",
      definition: "Çështje",
      example: "Kauza ime është mbrojtja e vendit."
    },
    "evitoj": {
      origin: "Angleze",
      definition: "Shmang",
      example: "Evito sherret!"
    },
    "kuroj": {
      origin: "Angleze",
      definition: "Përkujdesem / Mjekoj",
      example: "Mjeku kuron pacientët."
    },
    "starton": {
      origin: "Angleze",
      definition: "Fillon",
      example: "Gara sapo startoi."
    },
    "kualitet": {
      origin: "Angleze",
      definition: "Cilësi",
      example: "Video ishte me kualitet të lartë."
    },
    "skonto": {
      origin: "Italiane",
      definition: "Ulje (çmimi)",
      example: "Kemi skonto 50% në produktet që shihni."
    },
    "konstatoj": {
      origin: "Angleze",
      definition: "Vërej",
      example: "Konstatova gabime trashanike."
    },
    "civilizim": {
      origin: "Angleze",
      definition: "Qytetërim",
      example: "Shqipëria është e civilizuar."
    },
    "indiferent": {
      origin: "Angleze",
      definition: "Mospërfillës",
      example: "Mos u trego indiferent."
    },
    "violence": {
      origin: "Angleze",
      definition: "Dhunë",
      example: "Violenca është rruga e gabuar për të zgjidhur problemin."
    },
    "violencë": {
      origin: "Angleze",
      definition: "Dhunë",
      example: "Violenca është rruga e gabuar për të zgjidhur problemin."
    },
    "ambient": {
      origin: "Angleze",
      definition: "Mjedis",
      example: "Mbani ambientin pastër!"
    },
    "kuantitet": {
      origin: "Angleze",
      definition: "Sasi",
      example: "Më mire cilësi sesa kuantitet."
    },
    "sensibilizim": {
      origin: "Angleze",
      definition: "Ndërgjegjësim",
      example: "Le të sensibilizohemi për të ndihmuar njerëzit."
    },
    "interaktiv": {
      origin: "Angleze",
      definition: "Bashkëveprues",
      example: "Projekti ishte interaktiv."
    },
    "destinacion": {
      origin: "Angleze",
      definition: "Vend-mbërritje",
      example: "Për pak arrijmë në destinacion."
    },
    "preferoj": {
      origin: "Angleze",
      definition: "Parapëlej",
      example: "Preferoj të mos e diskutoj situatën."
    },
    "kurioz": {
      origin: "Angleze",
      definition: "Kureshtar",
      example: "Jam kurioz të di gjithçka."
    },
    "trauma": {
      origin: "Angleze",
      definition: "Plagë (pasoja)",
      example: "Pacienti ishte me trauma prej luftës."
    },
    "imagjinoj": {
      origin: "Angleze",
      definition: "Përfytyroj",
      example: "Nuk e imagjinoj dot klasën pa ty."
    },
    "fans": {
      origin: "Angleze",
      definition: "Adhurues",
      example: "Ai kishte plot fansa të zjarrtë."
    },
    "hit": {
      origin: "Angleze",
      definition: "Këngë",
      example: "Hiti i tij bëri bujë."
    },
    "predominon": {
      origin: "Angleze",
      definition: "Mbizotëron",
      example: "Në shkollë predominon qetësia dhe edukata."
    },
    "eksperience": {
      origin: "Angleze",
      definition: "Përvojë",
      example: "Gazetari kishte 5 vjet eksperiencë."
    },
    "eksperiencë": {
      origin: "Angleze",
      definition: "Përvojë",
      example: "Gazetari kishte 5 vjet eksperiencë."
    },
    "download": {
      origin: "Angleze",
      definition: "Shkarkoj",
      example: "Djalit i doli butoni me shkrimin Download."
    },
    "upload": {
      origin: "Angleze",
      definition: "Ngarkoj",
      example: "Djalit i doli butoni me shkrimin Upload."
    },
    "network": {
      origin: "Angleze",
      definition: "Rrjet",
      example: "Kompjuterat ishin të lidhur në një network."
    },
    "risk": {
      origin: "Angleze",
      definition: "Rrezik",
      example: "Duhej parashikuar risku i situatës."
    },
    "suportoj": {
      origin: "Angleze",
      definition: "Mbështes (moralisht)",
      example: "Mësuesja suportonte idetë e nxënësve."
    },
    "posedon": {
      origin: "Angleze",
      definition: "Zotëron",
      example: "Djali posedonte një biçikletë të re."
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
