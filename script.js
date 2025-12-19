/* =========================
   UTIL FUNCTIONS
   ========================= */

// returns number of days since a fixed date
function getDayIndex(startYear = 2020) {
  const today = new Date();
  const start = new Date(startYear, 0, 1);
  return Math.floor((today - start) / (1000 * 60 * 60 * 24));
}

// sets text safely
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
/* =========================
   FUN FACTS
   ========================= */

const funFacts = [
  {
    title: "Pluto’s Weird Status",
    text:
      "Pluto was discovered in 1930 and was considered a planet for 76 years.\n" +
      "In 2006, it was reclassified as a dwarf planet.\n" +
      "This decision is still debated today.\n" +
      "Many people still emotionally consider Pluto a planet."
  },
  {
    title: "Silence of Space",
    text:
      "Space is completely silent.\n" +
      "Sound needs air or matter to travel.\n" +
      "Since space is a vacuum, sound cannot move.\n" +
      "Explosions in movies would be silent in real space."
  },
  {
    title: "Time on Venus",
    text:
      "A single day on Venus is longer than a year on Venus.\n" +
      "Venus rotates very slowly on its axis.\n" +
      "But it orbits the Sun relatively quickly.\n" +
      "This makes time behave very strangely there."
  },
  {
    title: "Weight of a Neutron Star",
    text:
      "Neutron stars are extremely dense objects.\n" +
      "One teaspoon of neutron star material would weigh billions of tons.\n" +
      "They are formed after massive stars explode.\n" +
      "They are some of the densest objects in the universe."
  },
  {
    title: "The Sun’s Mass",
    text:
      "The Sun contains about 99.8% of the mass in our solar system.\n" +
      "All planets combined make up only 0.2%.\n" +
      "Its gravity keeps everything in orbit.\n" +
      "Without it, the solar system would fall apart."
  }
];

function loadRandomFunFact() {
  const index = Math.floor(Math.random() * funFacts.length);
  setText("fact-title", funFacts[index].title);
  setText("fact-text", funFacts[index].text);
}

document.addEventListener("DOMContentLoaded", loadRandomFunFact);
