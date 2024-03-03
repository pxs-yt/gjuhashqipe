const searchWordInput = document.getElementById("searchWord");
const searchButton = document.getElementById("searchButton");
const definitionDiv = document.getElementById("definition");

const albanianWords = {
    "telefon": {
      origin: "Greke",
      definition: "Mjet me te cilin dy ose me shume persona flasin me njeri-tjetrin.",
      example: "Mund të më telefononi më vonë?"
    },
    "adapt": {
        origin: "Angleze",
        definition: "Pershtatje",
        example: "Ai person eshte adapt per punen."
    },
    "definicion": {
        origin: "Angleze",
        definition: "Perkufizim",
        example: "Siper eshte definicioni i fjales se kerkuar."
    },
    "definitiv": {
        origin: "Angleze",
        definition: "Perfundimtar",
        example: "Vendimi i tij eshte definitiv."
    },
    "diference": {
        origin: "Angleze",
        definition: "Ndryshim (dallim)",
        example: "Këto dy punime nuk kanë asnjë diferencë mes tyre."
    },
    "diferencë": {
        origin: "Angleze",
        definition: "Ndryshim (dallim)",
        example: "Këto dy punime nuk kanë asnjë diferencë mes tyre."
    },
    "djall": {
      origin: "Latine",
      defintion: "Sipas paragjykimeve mistike-fetare: qenie e mbinatyrshme, e përfytyruar zakonisht si një njeri me brirë, me thundra e me bisht.",
      example: "E marrtë (e hëngërt) djalli!"
    },
    "eksperience": {
        origin: "Angleze",
        definition: "Përvojë",
        example: "Ai djalë nuk ka eksperiencë në këtë fushë."
    },
    "eksperiencë": {
        origin: "Angleze",
        definition: "Përvojë",
        example: "Ai djalë nuk ka eksperiencë në këtë fushë."
    },
    "ekzakt": {
        origin: "Angleze",
        definition: "I përpiktë",
        example: "Kerkesa eshte mjaft ekzakte."
    },
    "eveniment": {
        origin: "Angleze",
        definition: "Ngjarje",
        example: "Evenimenti nis për pesë minuta."
    },
    "evident": {
        origin: "Angleze",
        definitiion: "I qartë (i dukshëm)",
        example: "Situata është mjaft evidente."
    },
    "eliminoj": {
        origin: "Angleze",
        definition: "Zhduk (çrrënjos)",
        example: "Ata u përpoqën të eliminonin shenjat."
    },
    "fals": {
        origin: "Angleze",
        definition: "I rremë",
        example: "Paratë që ai përdori ishin false."
    },
    "frekuentoj": {
        origin: "Angleze",
        definition: "ndjek",
        example: "Nxënësi frekuenton disa grupe jashtëshkollore."
    },
    "indipendence": {
        origin: "Angleze",
        definition: "Pavarësi",
        example: "Kosova ka shpallur indipendencën e saj më 17 shkurt 2008."
    },
    "indipendencë": {
        origin: "Angleze",
        definition: "Pavarësi",
        example: "Kosova ka shpallur indipendencën e saj më 17 shkurt 2008."
    },
    
    "kishe": {
      origin: "Latine",
      definition: "Organizatë fetare e klerit të krishterë, e cila drejton jetën fetare të besimtarëve, bashkësi fetare",
      example: "Kisha katolike."
    },
    "kishë": {
      origin: "Latine",
      definition: "Organizatë fetare e klerit të krishterë, e cila drejton jetën fetare të besimtarëve, bashkësi fetare",
      example: "Kisha katolike."
    },
    "kreshme": {
      origin: "Latine",
      definition: "Ditë a kohë e caktuar, zakonisht para disa të kremteve kryesore, gjatë së cilës feja e krishterë u ndalon besimtarëve të hanë mish e bulmet (në vendet ku vepron feja e krishterë).",
      example: "Nuk mbajmë kreshmë."
    },
    "kreshmë": {
      origin: "Latine",
      definition: "Ditë a kohë e caktuar, zakonisht para disa të kremteve kryesore, gjatë së cilës feja e krishterë u ndalon besimtarëve të hanë mish e bulmet (në vendet ku vepron feja e krishterë).",
      example: "Nuk mbajmë kreshmë."
    },
    "mekat": {
      origin: "Latine",
      definition: "Shkelje e rregullave dhe e porosive fetare, veprim kundër dogmës dhe rregullave të fesë e të kishës (sipas paragjykimeve fetare).",
      example: "Besimtari lante mëkatin."
    },
    "mëkat": {
      origin: "Latine",
      definition: "Shkelje e rregullave dhe e porosive fetare, veprim kundër dogmës dhe rregullave të fesë e të kishës (sipas paragjykimeve fetare).",
      example: "Besimtari lante mëkatin."
    },
    "murg": {
      origin: "Latine",
      definition: "Anëtar i një urdhri fetar, që rri në një manastir e bën një jetë prej asketi.",
      example: "Murg katolik."
    },
    "pashke": {
      origin: "Latine",
      definition: "Festë fetare e përvitshme e të krishterëve, që bëhet për të përkujtuar vdekjen dhe ringjalljen e Krishtit.",
      example: "Ditë pashke."
    },
    "pashkë": {
      origin: "Latine",
      definition: "Festë fetare e përvitshme e të krishterëve, që bëhet për të përkujtuar vdekjen dhe ringjalljen e Krishtit.",
      example: "Ditë pashke."
    },
    "prift": {
      origin: "Latine",
      definition: "Titulli fetar më i thjeshtë në kishën e krishterë; ai që mban këtë titull dhe kryen shërbesat e zakonshme fetare (në vendet ku vepron kisha e krishterë).",
      example: "Prifti ortodoks."
    },
    "armik": {
      origin: "Latine",
      definition: " Ai që i do të keqen një tjetri, që e urren atë dhe që përpiqet ta dëmtojë.",
      example: "Armik për vdekje."
    },
    "femer": {
      origin: "Latine",
      definition: "Njeri me veti anatomike e fiziologjike të tilla, që i japin mundësi të bëjë fëmijë dhe që ka tipare të dallueshme nga mashkulli; grua a vajzë.",
      example: "Femra shqiptare."
    },
    "femër": {
      origin: "Latine",
      definition: "Njeri me veti anatomike e fiziologjike të tilla, që i japin mundësi të bëjë fëmijë dhe që ka tipare të dallueshme nga mashkulli; grua a vajzë.",
      example: "Femra shqiptare."
    },
    "femije": {
      origin: "Latine",
      definition: "Pjella e gruas; foshnjë; djalë ose vajzë në moshë të vogël.",
      example: "Fëmijë i zgjuar."
    },
    "fëmijë": {
      origin: "Latine",
      definition: "Pjella e gruas; foshnjë; djalë ose vajzë në moshë të vogël.",
      example: "Fëmijë i zgjuar."
    },
    "fqinj": {
      origin: "Latine",
      definition: " Ai që banon afër me dikë tjetër, ai që e ka shtëpinë a banesën ngjitur me atë të një tjetri.",
      example: "Jemi fqinjë."
    },
    "krushk": {
      origin: "Latine",
      definition: "Babai i nuses a secili nga të afërmit e saj (burrë a djalë) kundrejt prindërve e të afërmve të dhëndrit; babai i dhëndrit a secili nga të afërmit e tij (burrë a djalë) kundrejt prindërve e të afërmve të nuses; ai që lidhet e bëhet i afërm me një tjetër me anë të një martese.",
      example: "E kam krushk."
    },
    "kunat": {
      origin: "Latine",
      definition: "Vëllai i gruas (për burrin) ose burri i motrës (për vëllanë e saj); vëllai i burrit (për gruan).",
      example: "E ka kunat."
    },
    "kusheri": {
      origin: "Latine",
      definition: "Djali i xhaxhait, i dajës, i tezes a i hallës ose secili nga fëmijët a pasardhësit e tij kundrejt meje ose kundrejt fëmijëve të mi.",
      example: "E kam kushëri. Jemi kushërinj."
    },
    "kushëri": {
      origin: "Latine",
      definition: "Djali i xhaxhait, i dajës, i tezes a i hallës ose secili nga fëmijët a pasardhësit e tij kundrejt meje ose kundrejt fëmijëve të mi.",
      example: "E kam kushëri. Jemi kushërinj."
    },
    "mashkull": {
      origin: "Latine",
      definition: "Njeri me veti anatomike e fiziologjike të tilla që e bëjnë të aftë për të pllenuar femrën dhe që ka tipare të dallueshme prej saj; burrë a djalë.",
      example: "Meshkujt e shtëpisë."
    },
    "mbret": {
      origin: "Latine",
      definition: "Titull i monarkut në disa vende feudale e borgjeze, që trashëgohet nga pasardhësit; ai që mban këtë titull.",
      example: "Kurora e mbretit."
    },
    "mik": {
      origin: "Latine",
      definition: "Ai me të cilin kemi miqësi; ai që na do të mirën, na ndihmon me gjithë zemër e na gjendet në çdo nevojë; një i njohur, me të cilin kemi lidhje të ngushta, njeri i afërt.",
      example: "Mik i ngushtë (i vërtetë)."
    },
    "mjek": {
      origin: "Latine",
      definition: "Specialist me arsim të lartë në fushën e mjekësisë, doktor.",
      example: "Mjek kirurg (psikiatër, neurolog, gjinekolog, pediatër, okulist)."
    },
    "mjeshter": {
      origin: "Latine",
      definition: "Punëtor i përgatitur që ushtron një zeje të caktuar, zejtar. | Punëtor i përgatitur e me përvojë, që bën punë me cilësi të lartë, që u jep përvojën e njohuritë e veta më të rinjve dhe që drejton një repart a një sektor prodhimi.",
      example: "Mjeshtër rrobaqepës."
    },
    "mjeshtër": {
      origin: "Latine",
      definition: "Punëtor i përgatitur që ushtron një zeje të caktuar, zejtar. | Punëtor i përgatitur e me përvojë, që bën punë me cilësi të lartë, që u jep përvojën e njohuritë e veta më të rinjve dhe që drejton një repart a një sektor prodhimi.",
      example: "Mjeshtër rrobaqepës."
    },
    "njerk": {
      origin: "Latine",
      definition: "Burri i dytë i një gruaje kundrejt fëmijëve që ka ajo me burrin e parë, burri i nënës.",
      example: "Njerku s'është baba. (Fjalë e urtë)"
    },
    "prind": {
      origin: "Latine",
      definition: "Nëna dhe babai kundrejt fëmijëve.",
      example: "Prindër të dashur."
    },
    "qytet": {
      origin: "Latine",
      definition: "Qendër e madhe banimi, me shumë shtëpi të ndara zakonisht në lagje, me rrugë e me sheshe të rregulluara, ku zhvillojnë veprimtarinë e tyre një varg institucionesh politike, shoqërore, administrative, kulturore etj. dhe ndërmarrjesh industriale, tregtare etj.",
      example: "Qytet i madh."
    },
    "shok": {
      origin: "Latine",
      definition: "Njeri me të cilin jemi lidhur me miqësi gjatë jetës, në një punë a në një veprimtari të përbashkët ose në luftë për një çështje të përbashkët; njeri me të cilin kemi pikëpamje, mendime e interesa të përbashkëta, kemi moshë pak a shumë të afërt dhe shkojmë mirë njëri me tjetrin.",
      example: "Janë shokë të ngushtë."
    },
    "ungj": {
      origin: "Latine",
      definition: "Vëllai i babait ose i nënës (kundrejt nipit a mbesës), xhaxha, dajë.",
      example: "E kam ungj."
    },
    "faqe": {
      origin: "Latine",
      definition: "1- Secila nga dy pjesët anësore të fytyrës së njeriut nga syri deri te nofulla e poshtme dhe nga hunda deri te veshi; secila nga dy anët e turirit të kafshëve. <br> 2- Secila nga anët e një sendi; sipërfaqja anësore e diçkaje; pjesa e përparme e kryesore e një ndërtese, e një sendi etj., pjesa që duket, ballë; parëse.",
      example: "Laj faqet. | Faqe mali."
    },
    "flok": {
      origin: "Latine",
      definition: " Secila nga qimet e kokës së njeriut; tërësia e këtyre qimeve.",
      example: "Flokë të zinj. | Flokë kaçurrelë."
    },
    "fytyre": {
      origin: "Latine",
      definition: "Pjesa e përparme e kokës së njeriut, që përfshin ballin, faqet, mjekrën, gojën, hundën, sytë dhe veshët; pamja e jashtme e pjesës së përparme të kokës së njeriut; shprehja e jashtme e dikujt, që pasqyrohet në këtë pjesë të trupit.",
      example: "Tiparet (pjesët) e fytyrës."
    },
    "fytyrë": {
      origin: "Latine",
      definition: "Pjesa e përparme e kokës së njeriut, që përfshin ballin, faqet, mjekrën, gojën, hundën, sytë dhe veshët; pamja e jashtme e pjesës së përparme të kokës së njeriut; shprehja e jashtme e dikujt, që pasqyrohet në këtë pjesë të trupit.",
      example: "Tiparet (pjesët) e fytyrës."
    },
    "kembe": {
      origin: "Latine",
      definition: "Secila nga të dyja gjymtyrët e poshtme të trupit të njeriut; secila nga gjymtyrët e poshtme të trupit të një kafshe a të një shpendi që u shërbejnë atyre për të qëndruar, për të ecur a për të lëvizur; pjesë nga kjo gjymtyrë.",
      example: "Këmba e djathtë."
    },
    "këmbë": {
      origin: "Latine",
      definition: "Secila nga të dyja gjymtyrët e poshtme të trupit të njeriut; secila nga gjymtyrët e poshtme të trupit të një kafshe a të një shpendi që u shërbejnë atyre për të qëndruar, për të ecur a për të lëvizur; pjesë nga kjo gjymtyrë.",
      example: "Këmba e djathtë."
    },
    "kofshe": {
      origin: "Latine",
      definition: "Pjesa e këmbës së njeriut ose të kafshës nga këllku deri te gjuri.",
      example: "Kofsha e djathtë."
    },
    "kofshë": {
      origin: "Latine",
      definition: "Pjesa e këmbës së njeriut ose të kafshës nga këllku deri te gjuri.",
      example: "Kofsha e djathtë."
    },
    "koke": {
      origin: "Latine",
      definition: "Pjesa e sipërme e trupit të njeriut që qëndron mbi qafën ose pjesa e përparme a e sipërme e trupit të kafshëve, e rrumbullakët a e zgjatur, ku ndodhen truri, goja, sytë, veshët, hunda, flokët etj.",
      example: "Më dhemb koka."
    },
    "kokë": {
      origin: "Latine",
      definition: "Pjesa e sipërme e trupit të njeriut që qëndron mbi qafën ose pjesa e përparme a e sipërme e trupit të kafshëve, e rrumbullakët a e zgjatur, ku ndodhen truri, goja, sytë, veshët, hunda, flokët etj.",
      example: "Më dhemb koka."
    },
    "mendje": {
      origin: "Latine",
      definition: "Aftësia e njeriut për të menduar, për të njohur e për të pasqyruar botën, për të arsyetuar e për të gjykuar, që arrihet me anë të veprimtarisë së trurit; arsyeja si veti e njeriut; truri si qendër e veprimtarisë mendore.",
      example: "Aq ia preu mendja."
    },
    "shendet": {
      origin: "Latine",
      definition: "Gjendje e mirë fiziologjike e një organizmi, kur të gjitha organet me rëndësi jetësore punojnë mirë dhe nuk janë të prekura nga ndonjë sëmundje; gjendja kur organizmi ka aftësi të plota.",
      example: "Shëndet i mirë (i plotë)."
    },
    "shëndet": {
      origin: "Latine",
      definition: "Gjendje e mirë fiziologjike e një organizmi, kur të gjitha organet me rëndësi jetësore punojnë mirë dhe nuk janë të prekura nga ndonjë sëmundje; gjendja kur organizmi ka aftësi të plota.",
      example: "Shëndet i mirë (i plotë)."
    },
    "shpatull": {
      origin: "Latine",
      definition: "Secila nga të dy kockat e gjera, rrasike e si trekëndësh, që janë djathtas e majtas pjesës së sipërme të shpinës së njeriut; zakon. pjesa e shpinës rreth këtyre kockave; pjesa e trupit të kafshëve me katër këmbë, ku lidhet këmba e përparme me trupin; kocka e kësaj pjese.",
      example: "Shpatulla e djathtë."
    },
    "shpine": {
      origin: "Latine",
      definition: "Pjesa e prapme e trupit të njeriut nga qafa e supet deri te mesi; pjesa e sipërme e trupit të kafshëve gjatë shtyllës kurrizore deri te vithet; kurriz.",
      example: "Shpinë e drejtë."
    },
    "shpinë": {
      origin: "Latine",
      definition: "Pjesa e prapme e trupit të njeriut nga qafa e supet deri te mesi; pjesa e sipërme e trupit të kafshëve gjatë shtyllës kurrizore deri te vithet; kurriz.",
      example: "Shpinë e drejtë."
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
        <b>Kuptimi i fjales:</b> ${definitionText}<br>
        ${example ? `<b>Shembull:</b> ${example}` : ""}
      `;
    } else {
      definitionDiv.textContent = "Fjala nuk u gjet ne fjalor.";
    }
  } else {
    definitionDiv.textContent = "Kerkoni per fjale te huazuar.";
  }
});
