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
    "shtat": {
      origin: "Latine",
      definition: "Trupi i njeriut nga koka deri te këmbët; lartësia e trupit të njeriut.",
      example: "Me shtat mesatar (të madh, të lartë)."
    },
    "gjel": {
      origin: "Latine",
      definition: "Mashkulli i pulës, këndes.",
      example: " Gjel fushe. | Fryhet si gjel."
    },
    "lepur": {
      origin: "Latine",
      definition: "Kafshë gjitare brejtëse, me kokë të rrumbullakët e me veshë të gjatë, me trupin të mbuluar me qime të gjata në ngjyrë të murrme ose të bardhë, me këmbët e prapme më të gjata se të përparmet, që rend shumë shpejt dhe që njihet si frikacake.",
      example: "Lepur i egër."
    },
    "luan": {
      origin: "Latine:",
      definition: "Kafshë e egër gjitare, e madhe e mishngrënëse, me lesh të shkurtër e të verdhemë, me një tufë qimesh në fund të bishtit (dhe te mashkulli me një kreshtë a kurorë qimesh të gjata në qafë e rreth kokës), që ndodhet në disa vise të Afrikës, të Azisë etj. dhe që mbahet si kafsha më e fortë në përleshje me të tjerat.",
      example: "I fortë si luan."
    },
    "pellumb": {
      origin: "Latine",
      definition: "Shpend i butë a i egër me krahë të shkurtër, me pendë të bardha ose ngjyrë hiri në të kaltër, me gushë pak të dalë dhe me pupla në këmbë, që mund të bëjë fluturime të gjata dhe që mbahet si simbol i butësisë, i pastërtisë, i bukurisë dhe i paqes.",
      example: "Si pëllumb i shkruar."
    },
    "pëllumb": {
      origin: "Latine",
      definition: "Shpend i butë a i egër me krahë të shkurtër, me pendë të bardha ose ngjyrë hiri në të kaltër, me gushë pak të dalë dhe me pupla në këmbë, që mund të bëjë fluturime të gjata dhe që mbahet si simbol i butësisë, i pastërtisë, i bukurisë dhe i paqes.",
      example: "Si pëllumb i shkruar."
    },
    "pule": {
      origin: "Latine",
      definition: "Shpend shtëpiak, me trup të vogël e me krahë të shkurtër, që mbahet për vezët dhe për mishin; femra e gjelit.",
      example: "Pulë pikaloshe."
    },
    "pulë": {
      origin: "Latine",
      definition: "Shpend shtëpiak, me trup të vogël e me krahë të shkurtër, që mbahet për vezët dhe për mishin; femra e gjelit.",
      example: "Pulë pikaloshe."
    },
    "qen": {
      origin: "Latine",
      definition: "Kafshë gjitare shtëpiake, mishngrënëse, me trup mesatar, që ka nuhatje shumë të mirë, që afrohet shpejt me njeriun dhe që mbahet për të ruajtur shtëpinë, bagëtinë etj., për gjah e për punë të tjera.",
      example: "Tufë qensh. | Qen gjuetie."
    },
    "furre": {
      origin: "Latine",
      definition: "1- Ndërtim i veçantë në trajtën e një kubeje, që është e zbrazët përbrenda, ku piqen bukët; ndërtesa me një vend të tillë të veçantë e me disa pjesë plotësuese, ku çohen byrekët, tavat, ëmbëlsirat etj. për t'u pjekur. <br> 2- Ndarje e veçantë në një sobë zjarri a në një stufë kuzhine, në të cilën futen tavat për të pjekur gjëra të ndryshme ushqimore; ndarje e veçantë në një sobë a në një stufë, ku ndizet zjarri.",
      example: "Çoj tavën në furrë."
    },
    "furrë": {
      origin: "Latine",
      definition: "1- Ndërtim i veçantë në trajtën e një kubeje, që është e zbrazët përbrenda, ku piqen bukët; ndërtesa me një vend të tillë të veçantë e me disa pjesë plotësuese, ku çohen byrekët, tavat, ëmbëlsirat etj. për t'u pjekur. <br> 2- Ndarje e veçantë në një sobë zjarri a në një stufë kuzhine, në të cilën futen tavat për të pjekur gjëra të ndryshme ushqimore; ndarje e veçantë në një sobë a në një stufë, ku ndizet zjarri.",
      example: "Çoj tavën në furrë."
    },
    "gelqere": {
      origin: "Latine",
      definition: "Lëndë e ngurtë me ngjyrë të bardhë, që del kur djegim gurin gëlqeror; lëng i bardhë e i trashë, që përftohet duke shuar me ujë gurin gëlqeror të djegur në furrë dhe që përdoret për të lyer muret e ndërtesave, për të gatuar llaçin etj.",
      example: "Gëlqere e pashuar."
    },
    "gëlqere": {
      origin: "Latine",
      definition: "Lëndë e ngurtë me ngjyrë të bardhë, që del kur djegim gurin gëlqeror; lëng i bardhë e i trashë, që përftohet duke shuar me ujë gurin gëlqeror të djegur në furrë dhe që përdoret për të lyer muret e ndërtesave, për të gatuar llaçin etj.",
      example: "Gëlqere e pashuar."
    },
    "kulm": {
      origin: "Latine",
      definition: "1- Maja e një kodre e një mullari etj. <br> 2- Maja e çatisë së një ndërtese, kulmare. <br> 3- Pika e sipërme ku takohen dy drejtëza dy gjysmëdrejtëza ose dy rrafshe. <br> 4- Shkalla më e lartë e arritur në zhvillimin e diçkaje; pika më e lartë e shfaqjes së një dukurie a e përsosurisë së diçkaje.",
      example: "Zbres një vijë nga kulmi."
    },
    "mur": {
      origin: "Latine",
      definition: "Ndërtim i gjatë e i ngushtë me tulla, me gurë a me qerpiçë, të lidhur zakonisht me llaç, me baltë etj. ose thjesht prej betoni që ngrihet lart mbi themelet dhe që përbën pjesën anësore të një ndërtese ose shërben për të ndarë dhomat, për të rrethuar një oborr a një kopsht etj.",
      example: "Mur i trashë (i hollë, i fortë, i lartë, i ulët)."
    },
    "porte": {
      origin: "Latine",
      definition: "Vend i hapur e i gjerë, zakonisht në murin e oborrit të një shtëpie a të një ndërmarrjeje, nëpër të cilin mund të hyjnë e të dalin njerëz e automjete dhe që mbyllet me kanate; kanatet që e mbyllin atë; dera kryesore e jashtme e një shtëpie.",
      example: "Portat e kalasë. | Kanatet e portës."
    },
    "portë": {
      origin: "Latine",
      definition: "Vend i hapur e i gjerë, zakonisht në murin e oborrit të një shtëpie a të një ndërmarrjeje, nëpër të cilin mund të hyjnë e të dalin njerëz e automjete dhe që mbyllet me kanate; kanatet që e mbyllin atë; dera kryesore e jashtme e një shtëpie.",
      example: "Portat e kalasë. | Kanatet e portës."
    },
    "shtepi": {
      origin: "Latine",
      definition: "Ndërtesë për të banuar (zakonisht për një familje a për familje të një gjaku); banesë; apartament ku banon një familje.",
      example: "Shtëpi me qira."
    },
    "shtëpi": {
      origin: "Latine",
      definition: "Ndërtesë për të banuar (zakonisht për një familje a për familje të një gjaku); banesë; apartament ku banon një familje.",
      example: "Shtëpi me qira."
    },
    "tjegull": {
      origin: "Latine",
      definition: "Pllakë e hollë, zakonisht e përkulur, që bëhet prej deltine e të ngjeshur mirë e të pjekur në një furrë të posaçme dhe që përdoret për të mbuluar çatitë e ndërtesave.",
      example: "U thyen tjegullat."
    },
    "tra": {
      origin: "Latine",
      definition: "Trung i gjatë e i trashë zakonisht prej druri, me katër qoshe e i rrumbullakët, që përdoret në ndërtim në çatitë e shtëpive, në mure, nën dërrasat e dyshemesë, nën dërrasat e urave etj.; trung i tillë që pritet nga drurët.",
      example: "Trarët e çatisë ( e shtëpisë)."
    },
    "bujk": {
      origin: "Latine",
      definition: "Ai që punon tokën dhe rrit bimë bujqësore, ai që merret me bujqësi.",
      example: "Bujk i përparuar (i dalluar)."
    },
    "geshtenje": {
      origin: "Latine",
      definition: "Dru i viseve malore, me trung të madh e me gjethe si heshtë, që bën fryte në trajtë kokrrash të vogla, të veshur me një lëkurë të ndritshme ngjyrëkafe e me një shark me gjemba; fryti i kësaj peme, i cili hahet.",
      example: "Gështenjë e butë."
    },
    "gështenjë": {
      origin: "Latine",
      definition: "Dru i viseve malore, me trung të madh e me gjethe si heshtë, që bën fryte në trajtë kokrrash të vogla, të veshur me një lëkurë të ndritshme ngjyrëkafe e me një shark me gjemba; fryti i kësaj peme, i cili hahet.",
      example: "Gështenjë e butë."
    },
    "kaproll": {
      origin: "Latine",
      definition: "Gjitar dythundrak i familjes së drerëve, me qime të kuqërreme, me brirë të vegjël e të degëzuar dhe me këmbë të holla e të shkathëta; mashkulli i sorkadhes.",
      example: "Vrapon si kaproll."
    },
    "mulli": {
      origin: "Latine",
      definition: "Makinë e thjeshtë për të bluar drithë, që përbëhet nga pajisje të ndryshme, si edhe nga dy gurë të mëdhenj, të sheshtë e të rrumbullakët, të vënë njëri mbi tjetrin, nga të cilët i sipërmi lëviz me anë të fuqisë së ujit, të erës a me motor; ndërtesa me një makinë të tillë ku bluhet drithi.",
      example: "Mulli drithi."
    },
    "musht": {
      origin: "Latine",
      definition: "Lëngu i rrushit të pjekur para se të tharmëtohet a të bëhet verë; lëngu që nxjerrim nga molla e nga pemë të tjera kur i shtypim; lëng rrushi, manash etj. i zier e i trashur si pekmez.",
      example: "Musht i ëmbël."
    },
    "myshk": {
      origin: "Latine",
      definition: "Grup bimësh me ndërtim më të ndërlikuar se algat, kërpudhat e likenet, pa lule, që kanë gjethe, kërcell dhe rrënjë, riprodhohen me spore dhe rriten në vende me lagështi, mbi trungje drurësh, mbi tjegulla, mbi gurë a mbi shkëmbinj, buzë përrenjsh etj.",
      example: "Myshqe të njoma."
    },
    "parmende": {
      origin: "Latine",
      definition: "Vegël bujqësore prej druri, që përbëhet nga përdheci me plor, veshëzat, doraku e shtiza, tërhiqet zakonisht nga një pendë qe dhe përdoret për të lëruar tokën.",
      example: "E punonin tokën me parmendë."
    },
    "parmendë": {
      origin: "Latine",
      definition: "Vegël bujqësore prej druri, që përbëhet nga përdheci me plor, veshëzat, doraku e shtiza, tërhiqet zakonisht nga një pendë qe dhe përdoret për të lëruar tokën.",
      example: "E punonin tokën me parmendë."
    },
    "peme": {
      origin: "Latine",
      definition: "Dru zakonisht i butë, fryti i të cilit hahet, dru frutor; fryti i këtij druri, zakonisht në trajtë kokrrash me madhësi e me ngjyra të ndryshme, me tul e me lëng të ushqyeshëm, me fara a bërthama brenda.",
      example: "Pemët e kopshtit."
    },
    "pemë": {
      origin: "Latine",
      definition: "Dru zakonisht i butë, fryti i të cilit hahet, dru frutor; fryti i këtij druri, zakonisht në trajtë kokrrash me madhësi e me ngjyra të ndryshme, me tul e me lëng të ushqyeshëm, me fara a bërthama brenda.",
      example: "Pemët e kopshtit."
    },
    "pjeshke": {
      origin: "Latine",
      definition: "Dru frutor, me degë të hapura, me gjethe të zgjatura, të dhëmbëzuara e pa bisht, me lule ngjyrë trëndafili, që bën kokrra të mëdha, të rrumbullakëta, mishtake, me lëkurë të butë e të mbuluar me push të imët dhe me një bërthamë në mes; kokrra e kësaj peme, që, kur piqet, merr ngjyrë të verdhë si në të kuqe e ka shumë lëng.",
      example: "Lulet e pjeshkës."
    },
    "pjeshkë": {
      origin: "Latine",
      definition: "Dru frutor, me degë të hapura, me gjethe të zgjatura, të dhëmbëzuara e pa bisht, me lule ngjyrë trëndafili, që bën kokrra të mëdha, të rrumbullakëta, mishtake, me lëkurë të butë e të mbuluar me push të imët dhe me një bërthamë në mes; kokrra e kësaj peme, që, kur piqet, merr ngjyrë të verdhë si në të kuqe e ka shumë lëng.",
      example: "Lulet e pjeshkës."
    },
    "pyll": {
      origin: "Latine",
      definition: "Sipërfaqe e madhe toke e veshur me drurë të dendur e të lartë ose me shkurre; tërësia e drurëve dhe e shkurreve që zënë një vend të madh.",
      example: "Pyje malore (fushore)."
    },
    "qerre": {
      origin: "Latine",
      definition: "Mjet për të mbartur zakonisht prodhime bujqësore, lëndë ndërtimi etj., i përbërë nga një shtrat i gjerë me ose pa drurë anash, me dy a me katër rrota druri, që tërhiqet me qe, me buaj a me kuaj.",
      example: "Rrotat e qerres."
    },
    "shporte": {
      origin: "Latine",
      definition: "Enë me përmasa e trajta të ndryshme, më e vogël se koshi, e punuar me thupra të holla a me kashtë, zakonisht e rrumbullakët e me fund të sheshtë dhe me një dorezë si hark përsipër, që përdoret për të mbajtur a për të mbartur pemë, vezë etj.",
      example: "Shportë e vogël."
    },
    "shportë": {
      origin: "Latine",
      definition: "Enë me përmasa e trajta të ndryshme, më e vogël se koshi, e punuar me thupra të holla a me kashtë, zakonisht e rrumbullakët e me fund të sheshtë dhe me një dorezë si hark përsipër, që përdoret për të mbajtur a për të mbartur pemë, vezë etj.",
      example: "Shportë e vogël."
    },
    "ulli": {
      origin: "Latine",
      defintion: "Dru frutor i vendeve të ngrohta, gjithmonë i blertë, me gjethe gjatoshe, që bën kokrra të vogla me shumë vaj; kokrra e këtij druri, që përdoret për të nxjerrë vaj ose për të ngrënë.",
      example: "Ulli kokërrmadh (kokërrvogël)."
    },
    "vaj": {
      origin: "Latine",
      definition: "Lëng i trashë dhe i yndyrshëm, më i lehtë se uji, që nxirret prej farave a prej kokrrave të disa bimëve (si luledielli, ulliri, kikiriku, etj.), prej bimësh të veçanta, prej disa kafshësh ose nga përpunimi i disa mineraleve e i naftës dhe që përdoret për ushqim, në industri, në mjekësi etj.",
      example: "Vaj i pastër (i kulluar)."
    },
    "gusht": {
      origin: "Latine",
      definition: "Muaji i tetë i vitit, është muaj në verë. Ky muaj ka 31 ditë.",
      example: "Sot është data 8 gusht."
    },
    "janar": {
      origin: "Latine",
      definition: "Muaji i parë i vitit. Ky muaj ka 31 ditë.",
      example: "Në pushimet e janarit."
    },
    "maj": {
      origin: "Latine",
      definition: "Muaji i pestë i vitit, që vjen pas prillit.",
      example: "Lulet e majit."
    },
    "mars": {
      origin: "Latine",
      definition: "Muaji i tretë i vitit, që vjen pas Shkurtit.",
      example: "7 marsi është Dita e Mësuesit."
    },
    "e marte": {
      origin: "Latine",
      definition: "Dita e dytë e javës, që vjen pas së hënës.",
      example: "Të martën në mëngjes."
    },
    "e martë": {
      origin: "Latine",
      definition: "Dita e dytë e javës, që vjen pas së hënës.",
      example: "Të martën në mëngjes."
    },
    "e merkure": {
      origin: "Latine",
      definition: "Dita e tretë e javës që vjen pas së martës.",
      example: "Të mërkurën në mëngjes."
    },
    "e mërkurë": {
      origin: "Latine",
      definition: "Dita e tretë e javës që vjen pas së martës.",
      example: "Të mërkurën në mëngjes."
    },
    "prill": {
      origin: "Latine",
      definition: "Muaji i katërt i vitit, është muaj në pranverë. Ky muaj ka 30 ditë.",
      example: "Prili është muaj në pranverë."
    },
    "e shtune": {
      origin: "Latine",
      definition: "Dita e gjashtë e javës, që vjen pas së premtes.",
      example: "Të shtunën mbrëma."
    },
    "e shtunë": {
      origin: "Latine",
      definition: "Dita e gjashtë e javës, që vjen pas së premtes.",
      example: "Të shtunën mbrëma."
    },
    "vere": {
      origin: "Latine",
      definition: "1- Stina e dytë dhe më e ngrohtë e vitit, që vjen pas pranverës (në gjysmërruzullin verior fillon më 21 qershor e mbaron më shtator). <br> 2- Pije alkoolike që nxirret zakonisht nga tharëtimi i mushtit të rrushit.",
      example: "Verë e kuqe (e bardhë). | Vapa (thatësira) e verës."
    },
    "verë": {
      origin: "Latine",
      definition: "1- Stina e dytë dhe më e ngrohtë e vitit, që vjen pas pranverës (në gjysmërruzullin verior fillon më 21 qershor e mbaron më shtator). <br> 2- Pije alkoolike që nxirret zakonisht nga tharëtimi i mushtit të rrushit.",
      example: "Verë e kuqe (e bardhë). | Vapa (thatësira) e verës."
    },
    "bekoj": {
      origin: "Latine",
      definition: "1- I jap dikujt a diçkaje hirin e perëndisë zakonisht duke i bërë kryqin dhe duke shqiptuar lutje; e bëj të shenjtëruar me anë të një riti sipas fesë së krishterë. <br> 2- I uroj dikujt mbarësi e lumturi.",
      example: "Bekonte njerëzit. | Bekoi djalin."
    },
    "duroj": {
      origin: "Latine",
      definition: "I përballoj dhe i kaloj vështirësitë, dhembjet, shqetësimet, vuajtjet, fatkeqësitë etj. i qetë e gjakftohtë, pa u ankuar e pa u ligështuar; i bëj ballë a i qëndroj një ndikimi, një veprimi ose një ngacmimi të jashtëm; jam në gjendje të mposht një dëshirë, një nevojë, një kërkesë të organizmit që më tundon a më mundon.",
      example: "I duroi dhembjet (vuajtjet, fatkeqësitë)."
    },
    "ferkoj": {
      origin: "Latine",
      definition: "Lëviz dorën a diçka tjetër disa herë mbi sipërfaqen e një sendi për ta pastruar, për t'i dhënë shkëlqim etj.; lëviz një send mbi një tjetër pa i shkëputur njërin prej tjetrit; kaloj lehtë e disa herë mbi diçka pëllëmbën e dorës ose mollëzat e gishtërinjve.",
      example: "Fërkoj duart."
    },
    "fërkoj": {
      origin: "Latine",
      definition: "Lëviz dorën a diçka tjetër disa herë mbi sipërfaqen e një sendi për ta pastruar, për t'i dhënë shkëlqim etj.; lëviz një send mbi një tjetër pa i shkëputur njërin prej tjetrit; kaloj lehtë e disa herë mbi diçka pëllëmbën e dorës ose mollëzat e gishtërinjve.",
      example: "Fërkoj duart."
    },
    "ftoj": {
      origin: "Latine",
      definition: "1- Grish dikë për drekë a për darkë, për të marrë pjesë në një festë, në një pritje, në një mbledhje, në një ceremoni me rastin e një dite të shënuar etj.; i bëj ftesë. <br> 2- I bëj thirrje dikujt për diçka.",
      example: "E ftoi për drekë."
    },
    "gjemoj": {
      origin: "Latine",
      definition: "Ushton një krismë e fortë, një zhurmë e madhe dhe e zgjatur pas vetëtimës, bubullin.",
      example: "Nuk gjëmon po s'vetëtiu."
    },
    "gjëmoj": {
      origin: "Latine",
      definition: "Ushton një krismë e fortë, një zhurmë e madhe dhe e zgjatur pas vetëtimës, bubullin.",
      example: "Nuk gjëmon po s'vetëtiu."
    },
    "gjykoj": {
      origin: "Latine",
      definition: "Jap një mendim a një vlerësim për dikë ose për diçka, nxjerr një përfundim që lidhet me diçka; quaj.",
      example: "Gjykon veprimet."
    },
    "levdoj": {
      origin: "Latine",
      definition: "Lavdëroj, mburr.",
      example: "Ia lëvduan punën."
    },
    "lëvdoj": {
      origin: "Latine",
      definition: "Lavdëroj, mburr.",
      example: "Ia lëvduan punën."
    },
    "mbroj": {
      origin: "Latine",
      definition: "Ruaj dikë a diçka nga sulmet e armikut, nga ndonjë kërcënim a rrezik tjetër; kam kujdes për dikë a për diçka dhe marr të gjitha masat e nevojshme për ta ruajtur nga ndonjë e keqe, nga ndonjë dëmtim etj.",
      example: "Mbrojmë kufijtë."
    },
    "pagezoj": {
      origin: "Latine",
      definition: "Laj ose lag me ujë «të bekuar» në kishë a në shtëpi fëmijën e porsalindur për ta bërë të krishterë dhe i vë emrin; kthej në të krishterë një të rritur që pranon këtë fe, duke i bërë ceremoninë përkatëse (në vendet ku vepron feja e krishterë).",
      example: "I pagëzonte prifti."
    },
    "pagëzoj": {
      origin: "Latine",
      definition: "Laj ose lag me ujë «të bekuar» në kishë a në shtëpi fëmijën e porsalindur për ta bërë të krishterë dhe i vë emrin; kthej në të krishterë një të rritur që pranon këtë fe, duke i bërë ceremoninë përkatëse (në vendet ku vepron feja e krishterë).",
      example: "I pagëzonte prifti."
    },
    "peshoj": {
      origin: "Latine",
      definition: "Përcaktoj peshën e një trupi a të diçkaje në një peshore ose duke e krahasuar me një tjetër, i mat peshën.",
      example: "Peshoj në kandar."
    },
    "pelqej": {
      origin: "Latine",
      definition: " Më duket e mirë, e këndshme a e shijshme diçka, më kënaq; më duket i bukur, i mirë a i këndshëm dikush, ndjej kënaqësi kur e shoh, kur e dëgjoj ose kur rri me të.",
      example: "I pëlqeu këpucët."
    },
    "pëlqej": {
      origin: "Latine",
      definition: " Më duket e mirë, e këndshme a e shijshme diçka, më kënaq; më duket i bukur, i mirë a i këndshëm dikush, ndjej kënaqësi kur e shoh, kur e dëgjoj ose kur rri me të.",
      example: "I pëlqeu këpucët."
    },
    "pertoj": {
      origin: "Latine",
      definition: "Më mungon vullneti e dëshira për të punuar, më pëlqen të rri e të mos bëj gjë, jam përtac.",
      example: "Përtonte të ngrihej."
    },
    "përtoj": {
      origin: "Latine",
      definition: "Më mungon vullneti e dëshira për të punuar, më pëlqen të rri e të mos bëj gjë, jam përtac.",
      example: "Përtonte të ngrihej."
    },
    "qortoj": {
      origin: "Latine",
      definition: "I flas dikujt për një faj a për një gabim që ka bërë, i shpreh pakënaqësinë për një faj a për një gabim, duke i kërkuar të mos e përsëritë më.",
      example: "E qortoi rëndë."
    },
    "rrembej": {
      origin: "Latine",
      definition: "Marr me dhunë diçka a dikë dhe e çoj tutje, e grabit; ia heq nga duart me forcë a kundër dëshirës, ia marr me forcë.",
      example: "Ua rrëmbyem armët pushtuesve."
    },
    "rrëmbej": {
      origin: "Latine",
      definition: "Marr me dhunë diçka a dikë dhe e çoj tutje, e grabit; ia heq nga duart me forcë a kundër dëshirës, ia marr me forcë.",
      example: "Ua rrëmbyem armët pushtuesve."
    },
    "rrenoj": {
      origin: "Latine",
      definition: "Shemb përdhe diçka të ndërtuar, kthej në gërmadhë, shkatërroj, prish.",
      example: "Rrënoi shtëpinë."
    },
    "rrënoj": {
      origin: "Latine",
      definition: "Shemb përdhe diçka të ndërtuar, kthej në gërmadhë, shkatërroj, prish.",
      example: "Rrënoi shtëpinë."
    },
    "shembellej": {
      origin: "Latine",
      definition: "I ngjaj dikujt a diçkaje, përngjaj me dikë a me diçka; dukem, ngjaj.",
      example: "Majmuni i shëmbëllen njeriut."
    },
    "shëmbëllej": {
      origin: "Latine",
      definition: "I ngjaj dikujt a diçkaje, përngjaj me dikë a me diçka; dukem, ngjaj.",
      example: "Majmuni i shëmbëllen njeriut."
    },
    "sherbej": {
      origin: "Latine", 
      definition: "Kryej një detyrë, punoj zakonisht si nëpunës, jam me shërbim në një punë; bëj një punë ndihmëse.",
      example: "Në spital shërbejnë mjekë me përvojë."
    },
    "shërbej": {
      origin: "Latine", 
      definition: "Kryej një detyrë, punoj zakonisht si nëpunës, jam me shërbim në një punë; bëj një punë ndihmëse.",
      example: "Në spital shërbejnë mjekë me përvojë."
    },
    "trishtoj": {
      origin: "Latine",
      definition: "I ngjall dikujt trishtim, bëj që dikush të bjerë në trishtim.",
      example: "E trishtoi vdekja e vëllait."
    },
    "novacion": {
      origin: "Angleze",
      definition: "Metodë e re në prodhim ose në teknikë; diçka e re e përparimtare në fushën e shkencës a të artit, risi.",
      example: "Novacione teknike. | Bëj (vë në jetë) një novacion."
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
