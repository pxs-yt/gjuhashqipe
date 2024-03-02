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
